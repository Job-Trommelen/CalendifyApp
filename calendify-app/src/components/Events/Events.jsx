import Event from "./Event";

const Events = ({ events, onToggle }) => {
    return(
        <>
            {events.map((event) => (
                <Event key={event.id} event={event} onToggle={onToggle}/>
            ))}
        </>
    )
}

export default Events