import {useEffect, useState} from 'react';
import styled from 'styled-components';

const YearBlock = styled.div<{ left: number, width: number }>`
  position: absolute;
  bottom: 0;
  left: ${props => props.left}%;
  width: ${props => props.width}%;
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  z-index: 1;
  text-align: center;
`;

const YearMarker = styled.div<{ left: number }>`
  position: absolute;
  bottom: 0;
  left: ${props => props.left}%;
  width: 1px;
  height: 20px;
  background-color: black;
  z-index: 1;
`;

const YearLabel = styled.div<{ left: number }>`
  position: absolute;
  bottom: -20px;
  left: ${props => props.left - 0.5}%;
  font-size: 12px;
`;

const Container = styled.div<{ rows: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.rows * 25 + 20}px;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  position: relative;
  overflow: hidden;
`;

const Project = styled.div<{ top: number, left: number, width: number, index: number }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  width: ${props => props.width}%;
  padding: 5px;
  background-color: ${props => colors[props.index]};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
`;

const colors = [
    "#9880ab", "#a572c9", "#ddb6f5", "#8b6eb5", "#9470bc", "#ddb6f5",
    "#8271ae", "#8b6eb5", "#9470bc", "#ddb6f5", "#8271ae", "#8b6eb5",
    "#9470bc", "#8271ae", "#8b6eb5", "#ddb6f5", "#9470bc", "#8271ae",
    "#8b6eb5", "#9470bc", "#ddb6f5", "#8271ae", "#8b6eb5", "#9470bc",
    "#8271ae", "#7873a6"
];

const Tooltip: any = styled.div<{ visible: boolean }>`
  position: absolute;
  background-color: white;
  padding: 10px;
  z-index: 10;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: ${props => props.visible ? 'block' : 'none'};
`;

interface ProjectProps {
    name: string;
    startDate: string;
    endDate: string;
}

interface TooltipPosition {
    top: number;
    left: number;
}

const Timeline = ({projects}: { projects: ProjectProps[] }) => {


    const earliestStartDate: any = new Date(Math.min(...projects.map((project: any) => {
        const [day, month, year] = project.startDate.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    })));
    const latestEndDate: any = new Date();
    const totalTime = latestEndDate.getTime() - earliestStartDate.getTime();

    const [tooltipVisible, setTooltipVisible] = useState<boolean>(false);
    const [tooltipContent, setTooltipContent] = useState<string>("");
    const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({top: 0, left: 0});
    const [projectsWithRows, setProjectsWithRows] = useState<(ProjectProps & {
        row: number,
        left: number,
        width: number
    })[]>([]);

    useEffect(() => {
        const calculateRows = () => {
            return projects.map(project => {
                const [startDay, startMonth, startYear] = project.startDate.split("/").map(Number);
                const startDate = new Date(startYear, startMonth - 1, startDay);
                const [endDay, endMonth, endYear] = project.endDate.split("/").map(Number);
                const endDate = project.endDate === "today" ? new Date() : new Date(endYear, endMonth - 1, endDay);
                const left = ((startDate.getTime() - earliestStartDate.getTime()) / totalTime) * 100;
                const width = ((endDate.getTime() - startDate.getTime()) / totalTime) * 100;

                const row = getRowForProject(left, width, projectsWithRows);

                return {...project, row, left, width};
            });
        };

        const getRowForProject = (left: number, width: number, currentProjects: typeof projectsWithRows) => {
            let row = 0;
            while (true) {
                const overlaps = currentProjects.some(project => {
                    return project.row === row && (left + width) > project.left && left < (project.left + project.width);
                });

                if (!overlaps) return row;

                row++;
            }
        };

        setProjectsWithRows(calculateRows());
    }, [projects]);


    return (
        <Container rows={projectsWithRows.length}>
            {projectsWithRows.map((project: any, index: any) => {
                return (
                    <Project
                        key={project.name}
                        left={project.left}
                        width={project.width}
                        top={project.row * 25}
                        index={index % colors.length}
                        onMouseEnter={e => {
                            setTooltipVisible(true);
                            setTooltipContent(project.name);
                            setTooltipPosition({top: e.clientY, left: e.clientX});
                        }}
                        onMouseLeave={() => setTooltipVisible(false)}
                    />
                );
            })}
            {tooltipVisible && <Tooltip style={{top: tooltipPosition.top, left: tooltipPosition.left}}>
                {tooltipContent}
            </Tooltip>}
        </Container>
    );
};

export default Timeline;
