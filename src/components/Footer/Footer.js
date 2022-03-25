import "./footer.scss";

export default function Footer(props) {
    const { title, src, time, weekday } = props;
    const buildTimeInfo =
        weekday === undefined || time === undefined ? (
            <></>
        ) : (
            <p>
                {weekday} - {time}
            </p>
        );
    return (
        <footer>
            <img src={src} alt={title} />
            <div className="info">
                <h1>{title}</h1>
                {buildTimeInfo}
            </div>
        </footer>
    );
}
