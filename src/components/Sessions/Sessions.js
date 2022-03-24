import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Session from "./Session";
import Footer from "../Footer/Footer";

import "./sessions.scss";

export default function Sessions() {
    const [sessions, setSessions] = useState({
        days: [],
        posterURL: "",
        title: "",
    });
    const { idSession } = useParams();
    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idSession}/showtimes`
        );
        promise.then((response) => {
            setSessions({ ...response.data });
        });
        promise.catch((err) => console.log(err));
    }, [idSession]);

    console.log(sessions);

    return (
        <div className="sessions">
            <h1 class="title">Selecione o horário</h1>
            <div className="session-container">
                {sessions.days.map((item) => {
                    return <Session session={item} />;
                })}
            </div>

            <Footer src={sessions.posterURL} title={sessions.title} />
        </div>
    );
}
