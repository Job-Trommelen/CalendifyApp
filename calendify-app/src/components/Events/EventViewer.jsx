import { useState } from 'react'

import { Container, Grid, ToggleButton, ToggleButtonGroup } from '@mui/material'
import TableRowsIcon from '@mui/icons-material/TableRows'
import GridViewIcon from '@mui/icons-material/GridView'

import EventsList from './EventsList'

const EventViewer = () => {
    const [selectedView, setSelectedView] = useState('list');

    const handleSelectedView = (event, newView) => {
        setSelectedView(newView);
    };

    return (
        <Container
            sx={{
                mt: 5
            }}>
            <Grid container direction="column">
                <Grid
                    item
                    container
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-end"
                >
                    <Grid item sm={2}>
                        <ToggleButtonGroup
                            value={selectedView}
                            color="primary"
                            exclusive
                            onChange={handleSelectedView}
                            aria-label="Select View"
                        >
                            <ToggleButton value="grid" aria-label="grid view">
                                <GridViewIcon />
                            </ToggleButton>
                            <ToggleButton value="list" aria-label="list view">
                                <TableRowsIcon />
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </Grid>
                </Grid>
                <Grid container sx={{ mt: 2}}>
                    <Grid item xs={false} sm={1} />
                    <Grid item xs={12} sm={10}>
                        <EventsList />
                    </Grid>
                    <Grid item xs={false} sm={1} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default EventViewer