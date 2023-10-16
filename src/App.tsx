import React from 'react';
import Timeline from './Timeline';

function App() {
    const projects = [
        {name: "IAF TrackIshi", startDate: "10/01/2021", endDate: "13/06/2022"},
        {name: "IAF Ofek324", startDate: "13/06/2022", endDate: "01/01/2024"},
        {name: "Neurobica Supplements", startDate: "01/03/2021", endDate: "01/04/2023"},
        {name: "Neurobicare", startDate: "15/12/2022", endDate: "01/07/2023"},
        {name: "CapHub.ai", startDate: "01/03/2023", endDate: "01/07/2023"},
        {name: "Neurobica.io", startDate: "15/12/2022", endDate: "01/07/2023"},
        {name: "Failean", startDate: "01/07/2023", endDate: "01/01/2024"},
        {name: "Offisito", startDate: "01/09/2023", endDate: "01/01/2024"},
        {name: "DiveOps", startDate: "01/09/2023", endDate: "01/01/2024"},
    ];

    return (
        <div className="App">
            <Timeline projects={projects}/>
        </div>
    );
}

export default App;
