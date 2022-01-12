import { Box, Grid } from '@mui/material'

import EventListItem from './EventListItem'
import eventListDetails from './constants'

const EventsList = (props) => {
    const getEventCard = (eventObj) => {
        return (
            <Grid item sm={12}>
                <EventListItem {...eventObj} />
            </Grid>
        )
    }

    return (
        <Box sx={{ flexGrow: 1}}>
            <Grid container direction="row" spacing={2}>
                {eventListDetails.map(eventObj => getEventCard(eventObj))}
            </Grid>
        </Box>
    )
}

export default EventsList