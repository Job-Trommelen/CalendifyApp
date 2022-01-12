const Event = ({ event, onToggle }) => {
    return(
        <div className="event" onDoubleClick={() => onToggle(event.id)}>
            <h3>{event.text}</h3>
            <p>{event.date}</p>
        </div>
    )
}

export default Event