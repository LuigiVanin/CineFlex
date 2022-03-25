import { Link } from "react-router-dom";

export default function Session(props) {
    const { weekday, date, showtimes } = { ...props.session };

    return (
        <div className="session">
            <h1>
                {weekday} - {date}
            </h1>
            <div className="time-box">
                {showtimes.map((item) => {
                    return (
                        <Link to={`/sessao/${item.id}`} key={item.id}>
                            {item.name}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}
