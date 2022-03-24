export default function Session(props) {
    const { weekday, date, showtimes } = { ...props.session };

    return (
        <div className="session">
            <h1>
                {weekday} - {date}
            </h1>
            <div className="time-box">
                {/* <button>15:00</button>
                <button>15:00</button>
                <button>15:00</button>
                <button>15:00</button> */}
                {showtimes.map((item) => {
                    return <button>{item.name}</button>;
                })}
            </div>
        </div>
    );
}
