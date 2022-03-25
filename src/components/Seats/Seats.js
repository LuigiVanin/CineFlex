import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Seat from "./Seat";

import "./seats.scss";

export default function Seats() {
    const { idSession } = useParams();
    const status = ["selecionado", "disponivel", "indisponivel"];
    const [session, setSession] = useState({
        movie: { posterURL: "", title: "" },
        seats: [],
        day: { weekday: "" },
        name: "",
    });
    useEffect(() => {
        const promise = axios.get(
            `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`
        );
        promise.then((response) => {
            console.log(response.data);
            setSession({ ...response.data });
        });
        promise.catch((err) => console.log(err.response));
    }, [idSession]);
    return (
        <>
            <div className="session-page">
                <div className="seat-container">
                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="seats-box">
                        {session.seats.map((item) => {
                            return (
                                <Seat
                                    num={item.name}
                                    isAvailable={item.isAvailable}
                                />
                            );
                        })}
                    </div>

                    <div className="legend">
                        {status.map((item) => {
                            return (
                                <div className="legend-box">
                                    <div className={`seat ${item}`}></div>
                                    <p>{item}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="form">
                        <h1>Nome do comprador</h1>
                        <input type="text" placeholder="Digite seu nome..." />
                        <h1>CPF do comprador</h1>
                        <input type="text" placeholder="Digite seu CPF" />
                        <button>Reserver assento(s)</button>
                    </div>
                </div>
            </div>
            <Footer
                src={session.movie.posterURL}
                title={session.movie.title}
                weekday={session.day.weekday}
                time={session.name}
            />
        </>
    );
}
