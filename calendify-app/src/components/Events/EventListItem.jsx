import { Card, CardContent, CardHeader, Typography } from "@mui/material"
import { teal } from "@mui/material/colors"

const EventListItem = (props) => {
    const { title, subtitle, description } = props
    const cardColor = teal[400]

    return (
        <Card 
            sx={{ minWidth: 275 }}
            style={{ backgroundColor: cardColor}}>
            <CardHeader
                title={title}
                subheader={subtitle}
            />
            <CardContent>
                <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default EventListItem