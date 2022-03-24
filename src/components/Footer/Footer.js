import "./footer.scss";

export default function Footer(props) {
    console.log(props);
    return (
        <footer>
            <img src={props.src} alt={props.title} />
            <div className="info">
                <h1>{props.title}</h1>
            </div>
        </footer>
    );
}
