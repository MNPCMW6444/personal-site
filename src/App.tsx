import {Grid, Typography} from "@mui/material";
import profile from "./profile.jpg";
import {Email, LinkedIn, Phone} from "@mui/icons-material";

const HEAD_HEIGHT = 22.6;
const SIDE_WIDTH = 6.72;

const linkedin = <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="medium"
                      data-theme="light" data-type="VERTICAL" data-vanity="michael-nx" data-version="v1"><a
    className="badge-base__link LI-simple-link"
    href="https://il.linkedin.com/in/michael-nx?trk=profile-badge"></a></div>;

const contact = {
    header: "contact me",
    list: [
        {
            cus: (
                linkedin
            ),
        },
        {
            icon: (
                <>
                    <Phone/>
                </>
            ),
            label: "+972528971871",
        },
        {icon: <Email/>, label: "MNPCMW6444@gmail.com"},
        {
            icon: <LinkedIn/>,
            label: "linkedin.com/in/michael-nx",
        },
    ],
};

const skills = {
    header: "skills",
    list: [
        "TypeScript",
        "ReactJS, MUI",
        "Redux, RxJS",
        "AngularJS, CesiumJS",
        "NodeJS",
        "ExpressJS, GraphQL",
        "MongoDB",
        "BrainJS",
        "Docker, Compose",
        "AWS, EC2, Elastic BS",
        "CGP,  Firebase",
        "Python, Selenium",
    ],
}

const education = {
    header: "education",
    list: [
        "asd", "asd", "asd"
    ]
}

const App = () => {
    return (
        <Grid container height="29.7cm">
            <Grid item width={SIDE_WIDTH + "cm"} container direction="column" bgcolor="#BBBBBB">
                <Grid
                    item
                    width={SIDE_WIDTH + "cm"}
                    height={SIDE_WIDTH + "cm"}
                    marginTop="1cm"
                    marginBottom="1cm"
                    container
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item height="100%" width="100%">
                        <img
                            src={profile}
                            alt="profile"
                            width="60%"
                            height="60%"
                            style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "auto",
                                marginBottom: "auto",
                            }}
                        />
                    </Grid>
                </Grid>
                <Grid
                    item
                    height={(100 - HEAD_HEIGHT) / 3 + "%"}
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                    marginTop="-2cm"
                    marginLeft="-1cm"
                >
                    <Grid item width="80%">
                        <Typography
                            bgcolor="black"
                            borderRadius="20px"
                            color="white"
                            textAlign="center"
                            variant="h5"
                            letterSpacing={3}
                        >
                            {contact.header}
                        </Typography>
                    </Grid>
                    {
                        contact.list.map(({icon, label, cus}) => (
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                style={{gap: "8px", padding: "10%"}}
                            >
                                {cus || (
                                    <>
                                        {icon}
                                        <Typography>{label}</Typography>
                                    </>
                                )}
                            </Grid>
                        ))}
                </Grid>
                <Grid
                    item
                    height={(100 - HEAD_HEIGHT) / 3 + "%"}
                    container
                    direction="column"
                    justifyItems="center"
                >
                    {(
                        <Grid item>
                            {" "}
                            <Typography
                                bgcolor="black"
                                borderRadius="20px"
                                width="70%"
                                color="white"
                                textAlign="center"
                                variant="h5"
                                letterSpacing={3}
                            >
                                {skills.header}
                            </Typography>
                        </Grid>
                    )}
                    {
                        skills.list.map((label) => (
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                style={{gap: "8px", padding: "10%"}}
                            >
                                {(
                                    <>

                                        <Typography variant="h6">{label}</Typography>
                                    </>
                                )}
                            </Grid>
                        ))}
                </Grid>
                <Grid
                    item
                    height={(100 - HEAD_HEIGHT) / 3 + "%"}
                    container
                    direction="column"
                    justifyItems="center"
                >
                    {(
                        <Grid item>
                            {" "}
                            <Typography
                                bgcolor="black"
                                borderRadius="20px"
                                width="70%"
                                color="white"
                                textAlign="center"
                                variant="h5"
                                letterSpacing={3}
                            >
                                {education.header}
                            </Typography>
                        </Grid>
                    )}
                    {
                        education.list.map((label) => (
                            <Grid
                                item
                                display="flex"
                                alignItems="center"
                                style={{gap: "8px", padding: "10%"}}
                            >


                                <Typography variant="h6">{label}</Typography>


                            </Grid>
                        ))}
                </Grid>
            </Grid>
            <Grid item width={21 - SIDE_WIDTH + "cm"} container direction="column" bgcolor="#EEEEEE">
                <Grid item>asd</Grid>
            </Grid>
        </Grid>
    );
};

export default App;
