import React from 'react';
import Timeline from './Timeline';

function App() {
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
            name: "IAF Ofek324", startDate: "13/06/2022", endDate: "01/01/2024", more: {
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
            name: "Neurobicare", startDate: "15/12/2022", endDate: "01/07/2023", more: {
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
            name: "Neurobica.io", startDate: "15/12/2022", endDate: "01/07/2023", more: {
                header: null,
                website: "",
                linkedin: "",
                declaration: "",
                activeTime: null,

            }
        },
        {
            name: "Failean", startDate: "01/07/2023", endDate: "01/01/2024", more: {
                header: null,
                website: "",
                linkedin: "",
                declaration: "",
                activeTime: null,

            }
        },
        {
            name: "Offisito", startDate: "01/09/2023", endDate: "01/01/2024", more: {
                header: null,
                website: "",
                linkedin: "",
                declaration: "",
                activeTime: null,

            }
        },
        {
            name: "DiveOps", startDate: "01/09/2023", endDate: "01/01/2024", more: {
                header: null,
                website: "",
                linkedin: "",
                declaration: "",
                activeTime: null,

            }
        },
    ];

    return (
        <div className="App">
            <Timeline projects={projects}/>
        </div>
    );
}

export default App;
