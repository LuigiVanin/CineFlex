import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";
import Seat from "./Seat";
import MovieForm from "./MovieForm";

import "./seats.scss";

export default function Seats() {
    const { idSession } = useParams();
    const navigate = useNavigate();
    const status = ["selecionado", "disponivel", "indisponivel"];
    let [seats, setSeats] = useState([]);
    const [session, setSession] = useState({
        movie: { posterURL: "", title: "" },
        seats: [],
        day: { weekday: "", date: "" },
        name: "",
    });
    const [order, setOrder] = useState({ ids: [], name: "", cpf: "" });

    function formInputUpdate(type, value) {
        order[type] = value;
        setOrder({ ...order });
    }

    function updateSeatsState(id, num) {
        if (order.ids.indexOf(id) !== -1) {
            order.ids = order.ids.filter((i) => (i === id ? 0 : 1));
            seats = seats.filter((i) => (i === num ? 0 : 1));
        } else {
            order.ids.push(id);
            seats.push(num);
        }
        setOrder({ ...order });
        setSeats([...seats]);
    }

    function submitted() {
        if (order.ids.length === 0) {
            alert("selecione pelo menos um assento");
            return;
        }
        if (order.cpf.length !== 11) {
            alert("O CPF deve ter 11 dígitos!");
            return;
        }
        console.log(order);
        console.log(seats);
        const promise = axios.post(
            "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
            { ...order }
        );
        promise.then((response) => {
            console.log(response);
            navigate("/sucesso", {
                state: {
                    order: { ...order },
                    movie: {
                        name: session.movie.title,
                        time: session.name,
                        date: session.day.date,
                    },
                    seats: [...seats],
                },
            });
        });
        promise.catch((err) => {
            console.log(err);
            alert("Algo está errado, tente novamente");
        });
    }
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
            <div className="bookmark-page">
                <div className="seat-container">
                    <h1>Selecione o(s) assento(s)</h1>
                    <div className="seats-box">
                        {session.seats.map((item) => {
                            return (
                                <Seat
                                    num={item.name}
                                    isAvailable={item.isAvailable}
                                    id={item.id}
                                    updateSeatsState={updateSeatsState}
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
                    <MovieForm
                        dataChange={formInputUpdate}
                        submitAction={submitted}
                    />
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
