import { useNavigate, useLocation } from "react-router-dom";
import "./header.scss";

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    console.log("aqui: ", location);
    return (
        <header>
            {location.pathname !== "/" ? (
                <div className="placeholder" onClick={() => navigate(-1)}>
                    <ion-icon name="arrow-back-outline" />
                </div>
            ) : (
                ""
            )}
            <h1>CINEFLEX</h1>
            {location.pathname !== "/" ? (
                <div className="placeholder"></div>
            ) : (
                ""
            )}
        </header>
    );
}
