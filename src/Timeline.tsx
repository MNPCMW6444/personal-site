import {Fragment, useState} from 'react';
import styled from 'styled-components';
import CardTT from "./CardTT"

const projects = [
    {
        name: "IAF TrackIshi", startDate: "10/01/2021", endDate: "13/06/2022", more: {
            header: null,
            website: "https://github.com/MNPCMW6444/TrackIshi",
            linkedin: "This is a B2G project also released as open source",
            declaration: "Enterprise - Custom Human Resource Management Application - Developed using MERN stack. My first production project.",
            activeTime: null,

        }
    },
    {
        name: "IAF Ofek324", startDate: "13/06/2022", endDate: "today", more: {
            header: null,
            website: "https://www.iaf.org.il/9577-55976-he/IAF.aspx",
            linkedin: "This is a classified project developed for IAF control division operational needs",
            declaration: "After (and while) using this system as the basis for the operational role i have been serving as a developer",
            activeTime: null,

        }
    },
    {
        name: "Neurobica Supplements", startDate: "01/03/2021", endDate: "01/04/2023", more: {
            header: null,
            website: "neurobica.online (inactive)",
            linkedin: "https://www.linkedin.com/company/neurobica",
            declaration: "",
            activeTime: null,

        }
    },
    {
        name: "Neurobicare", startDate: "15/12/2022", endDate: "today", more: {
            header: null,
            website: "",
            linkedin: "",
            declaration: "",
            activeTime: null,

        }
    },
    {
        name: "CapHub.ai", startDate: "01/03/2023", endDate: "01/07/2023", more: {
            header: null,
            website: "",
            linkedin: "",
            declaration: "",
            activeTime: null,

        }
    },
    {
        name: "Neurobica.io", startDate: "15/12/2022", endDate: "today", more: {
            header: null,
            website: "",
            linkedin: "",
            declaration: "",
            activeTime: null,

        }
    },
    {
        name: "Failean", startDate: "01/07/2023", endDate: "today", more: {
            header: null,
            website: "",
            linkedin: "",
            declaration: "",
            activeTime: null,

        }
    },
    {
        name: "Offisito", startDate: "01/09/2023", endDate: "today", more: {
            header: null,
            website: "",
            linkedin: "",
            declaration: "",
            activeTime: null,

        }
    },
    {
        name: "DiveOps", startDate: "01/09/2023", endDate: "today", more: {
            header: null,
            website: "",
            linkedin: "",
            declaration: "",
            activeTime: null,

        }
    },
];


const ROW_HEIGHT = 25;
const YEAR_BAR_HEIGHT = 28;

const Container: any = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(${(props: any) => props.rowsCount} * ${ROW_HEIGHT}px + ${YEAR_BAR_HEIGHT}px);
  width: 80%;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  position: relative;
  overflow: hidden;
`;

const Tooltip: any = styled.div`
  word-break: break-all; // This will break URLs and long strings more aggressively
  position: fixed;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 8px;
  width: auto;
  max-width: 90vw;

  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  pointer-events: none;
  // white-space: nowrap; // Comment or remove this line
  display: ${(props: any) => (props.visible ? 'block' : 'none')};
  top: ${(props: any) => props.positionAbove ? 'initial' : props.y}px;
  bottom: ${(props: any) => props.positionAbove ? `${window.innerHeight - props.y}px` : 'initial'};
  left: ${(props: any) => props.x}px;
`;


const Project: any = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
  top: ${(props: any) => props.top}px;
  left: ${(props: any) => props.left}%;
  height: ${ROW_HEIGHT}px; // adjust this value to your preferred height
  font-size: ${ROW_HEIGHT / 2}px; // adjust this value to your preferred font size
  line-height: ${ROW_HEIGHT}px; // ensure line-height matches the height to vertically center the text
  width: ${(props: any) => props.width}%;
  padding: 5px;
  background-color: ${(props: any) => colors[props.index].bg};
  color: ${(props: any) => colors[props.index].t};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
  display: flex; // added for vertical and horizontal centering
  align-items: center; // added for vertical centering
  justify-content: center; // added for horizontal centering
  position: absolute;
`;


const YearBlock: any = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props: any) => props.left}%;
  width: ${(props: any) => props.width}%;
  height: 25px;
  background-color: #e0e0e0;
  border-radius: 4px;
  z-index: 1;
  text-align: center;
`;


const YearMarker: any = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props: any) => props.left}%;
  width: 1px;
  height: 20px;
  background-color: black;
  z-index: 1;
`;

const YearLabel: any = styled.div`
  position: absolute;
  bottom: -20px;
  left: ${(props: any) => props.left - 0.5}%;
  font-size: 12px;
`;


const whitep = "#f2c6f9";
const blackp = "#440044";


const colors = [
    {bg: "#9860ab", t: whitep},
    {bg: "#a572c9", t: blackp},
    {bg: "#8251ae", t: whitep},
    {bg: "#9420bc", t: whitep},
    {bg: "#ddb6f5", t: blackp},
    {bg: "#440044", t: whitep},
    {bg: "#9893a6", t: blackp}
];

const calculateRows = (projects: any[]) => {

    const rows: any[][] = [];

    projects.forEach(project => {
        const [startDay, startMonth, startYear] = project.startDate.split("/").map(Number);
        const startDate = new Date(startYear, startMonth - 1, startDay);


        let placed = false;

        for (let i = 0; i < rows.length; i++) {

            const lastProjectInRow = rows[i][rows[i].length - 1];
            const [lastEndDay, lastEndMonth, lastEndYear] = lastProjectInRow.endDate.split("/").map(Number);
            const lastEndDate = lastProjectInRow.endDate === "today" ? new Date() : new Date(lastEndYear, lastEndMonth - 1, lastEndDay);

            if (startDate.getTime() > lastEndDate.getTime()) {
                rows[i].push(project);
                placed = true;
                break;
            }
        }

        if (!placed) {

            rows.push([project]);
        }
    });

    return rows;
}


const Timeline = () => {
    const earliestStartDate: any = new Date(Math.min(...projects.map((project: any) => {
        const [day, month, year] = project.startDate.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    })));
    const latestEndDate: any = new Date();
    const totalTime = latestEndDate.getTime() - earliestStartDate.getTime();

    const startYear = earliestStartDate.getFullYear();
    const endYear = latestEndDate.getFullYear();

    const handleProjectMouseEnter = (event: React.MouseEvent<HTMLDivElement>, project: any) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        const showBelow = event.clientY < viewportHeight / 2;

        setTooltip({
            content: <CardTT project={project}/>,
            x: rect.left,
            y: showBelow ? rect.bottom : rect.top,
            positionAbove: !showBelow
        });
    }


    const handleProjectMouseLeave = () => {
        setTooltip({});
    }


    const [tooltip, setTooltip] = useState<{
        content?: React.ReactNode;
        x?: number;
        y?: number;
        positionAbove?: boolean;
    }>({});


    const yearMarkers = [];
    for (let year = startYear; year <= endYear; year++) {
        const dateInYearStart = new Date(year, 0, 1);
        const dateInYearEnd = new Date(year + 1, 0, 1);
        const left = ((dateInYearStart.getTime() - earliestStartDate.getTime()) / totalTime) * 100;
        const width = ((dateInYearEnd.getTime() - dateInYearStart.getTime()) / totalTime) * 100;

        yearMarkers.push(
            <Fragment key={year}>
                <YearBlock left={left} width={width}>{year}</YearBlock>
                <YearMarker left={left}/>
                <YearLabel left={left}>{year}</YearLabel>
            </Fragment>
        );
    }


    const rows = calculateRows(projects);


    return (
        <Container rowsCount={rows.length}>
            {yearMarkers}
            {rows.map((row, rowIndex) =>
                row.map((project, projectIndex) => {
                    const [startDay, startMonth, startYear] = project.startDate.split("/").map(Number);
                    const startDate = new Date(startYear, startMonth - 1, startDay);

                    const [endDay, endMonth, endYear] = project.endDate.split("/").map(Number);
                    const endDate = project.endDate === "today" ? new Date() : new Date(endYear, endMonth - 1, endDay);

                    const projectDuration = endDate.getTime() - startDate.getTime();
                    const left = ((startDate.getTime() - earliestStartDate.getTime()) / totalTime) * 100;
                    const width = (projectDuration / totalTime) * 100;


                    const top = rowIndex * ROW_HEIGHT;


                    return (
                        <Project
                            key={project.name}
                            left={left}
                            top={top}
                            width={width}
                            index={rowIndex}
                            onMouseEnter={(e: any) => handleProjectMouseEnter(e, project)}
                            onMouseLeave={handleProjectMouseLeave}
                        >
                            {project.name}
                        </Project>
                    );
                })
            )}
            <Tooltip
                visible={!!tooltip.content}
                x={tooltip.x || 0}
                y={tooltip.y || 0}
                positionAbove={tooltip.positionAbove}
            >
                {tooltip.content}
            </Tooltip>


        </Container>
    );
}


export default Timeline;