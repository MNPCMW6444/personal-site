import React from 'react';
import {Card, CardContent, Grid, Typography} from '@mui/material';

type ProjectProps = {
    project: {
        name: string;
        more: {
            declaration: string;
            website: string;
            linkedin: string;
        };
        startDate: string;
        endDate: string;
    };
};

const CardTT: React.FC<ProjectProps> = ({project}) => {
    const {name, more: {declaration, website, linkedin}, startDate, endDate} = project;

    return (
        <Card variant="outlined" style={{maxWidth: '300px', margin: '10px'}}>
            <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body1">
                    {declaration}
                </Typography>
                <Grid container direction="column" spacing={1} style={{marginTop: '8px'}}>
                    <Grid item>
                        <strong>Website:</strong> {website}
                    </Grid>
                    <Grid item>
                        <strong>LinkedIn:</strong> {linkedin}
                    </Grid>
                    <Grid item>
                        <strong>End Date:</strong> {endDate}
                    </Grid>
                    <Grid item>
                        <strong>Active time:</strong> {startDate + " - " + (endDate === "today" ? "Present" : endDate)}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default CardTT;
