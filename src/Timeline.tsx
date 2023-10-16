// Timeline.js
import React from 'react';
import styled from 'styled-components';


const YearBlock: any = styled.div`
  position: absolute;
  bottom: 0;
  left: ${(props: any) => props.left}%;
  width: ${(props: any) => props.width}%;
  height: 20px;
  background-color: #e0e0e0; // You can choose any color you want here
  border-radius: 4px;
  z-index: 1;
  text-align: center;
`;


const YearMarker: any = styled.div`
  position: absolute;
  bottom: 0; // Adjust this if you want the markers at the top
  left: ${(props: any) => props.left}%;
  width: 1px;
  height: 20px;
  background-color: black;
  z-index: 1;
`;

const YearLabel: any = styled.div`
  position: absolute;
  bottom: -20px; // Adjust this if you want the labels at the top
  left: ${(props: any) => props.left - 0.5}%; // Centers the label under the marker
  font-size: 12px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  width: 80%;
  margin: 0 auto;
  border: 1px solid #e0e0e0;
  position: relative;
  overflow: hidden;
`;


const Project: any = styled.div`
  position: absolute;
  top: ${(props: any) => props.top}%;
  left: ${(props: any) => props.left}%;
  width: ${(props: any) => props.width}%;
  padding: 5px;
  background-color: ${(props: any) => colors[props.index]};
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 2;
`


const colors = [
    "#9880ab",
    "#a572c9",
    "#ddb6f5",
    "#8b6eb5",
    "#9470bc",
    "#ddb6f5",
    "#8271ae",
    "#8b6eb5",
    "#9470bc",
    "#ddb6f5",
    "#8271ae",
    "#8b6eb5",
    "#9470bc",
    "#8271ae",
    "#8b6eb5",
    "#ddb6f5",
    "#9470bc",
    "#8271ae",
    "#8b6eb5",
    "#9470bc",
    "#ddb6f5",
    "#8271ae",
    "#8b6eb5",
    "#9470bc",
    "#8271ae",
    "#7873a6"
];


const Timeline = ({projects}: any) => {
    const earliestStartDate: any = new Date(Math.min(...projects.map((project: any) => {
        const [day, month, year] = project.startDate.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    })));
    const latestEndDate: any = new Date(Math.max(...projects.map((project: any) => {
        const [day, month, year] = project.endDate.split("/").map(Number);
        return new Date(year, month - 1, day).getTime();
    })));
    const totalTime = latestEndDate.getTime() - earliestStartDate.getTime();

    const startYear = earliestStartDate.getFullYear();
    const endYear = latestEndDate.getFullYear();

    const yearMarkers = [];
    for (let year = startYear; year <= endYear; year++) {
        const dateInYearStart = new Date(year, 0, 1);
        const dateInYearEnd = new Date(year + 1, 0, 1); // The start of the next year
        const left = ((dateInYearStart.getTime() - earliestStartDate.getTime()) / totalTime) * 100;
        const width = ((dateInYearEnd.getTime() - dateInYearStart.getTime()) / totalTime) * 100;

        yearMarkers.push(
            <React.Fragment key={year}>
                <YearBlock left={left} width={width}>{year}</YearBlock>
                <YearMarker left={left}/>
                <YearLabel left={left}>{year}</YearLabel>
            </React.Fragment>
        );
    }


    return (
        <Container>
            {yearMarkers}
            {projects.map((project: any, index: number) => {
                const [startDay, startMonth, startYear] = project.startDate.split("/").map(Number);
                const startDate: any = new Date(startYear, startMonth - 1, startDay);

                const [endDay, endMonth, endYear] = project.endDate.split("/").map(Number);
                const endDate: any = new Date(endYear, endMonth - 1, endDay);

                const projectDuration: any = endDate.getTime() - startDate.getTime();
                const left = ((startDate.getTime() - earliestStartDate.getTime()) / totalTime) * 100;
                const width = (projectDuration / totalTime) * 100;

                const top = ((index + 1) / projects.length) * 85  // random value between 10% and 80%

                return (
                    <Project key={project.name} left={left} top={top} width={width} index={index}>
                        {project.name}
                    </Project>
                );
            })}
        </Container>
    );
};

export default Timeline;