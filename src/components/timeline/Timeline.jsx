import React from 'react'

const Timeline = () => {
    const events = [
        { date: '2023-04-01', title: 'Event 1' },
        { date: '2023-04-10', title: 'Event 2' },
        { date: '2023-04-15', title: 'Event 3' },
        { date: '2023-04-20', title: 'Event 4' },
    ];
    return (
        <div className="timeline">
            {events.map((event, index) => (
                <div key={index} className={`event-container ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="event">
                        <div className="event-date">{event.date}</div>
                        <div className="event-title">{event.title}</div>
                    </div>
                    <div className="dot" />
                </div>
            ))}
            <div className="line" />
        </div>
    )
}

export default Timeline