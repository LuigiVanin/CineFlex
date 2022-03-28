import { Link, useLocation } from "react-router-dom";
import "./sucess.scss";

function Sucess() {
    const { state } = useLocation();
    return (
        <div className="sucess-page">
            <h1>Pedido feito com sucesso!</h1>
            <div className="info-box">
                <h2>Filme e sessão</h2>
                <p>{state.movie.name}</p>
                <p>
                    {state.movie.date} - {state.movie.time}
                </p>
            </div>
            <div className="info-box">
                <h2>Ingressos</h2>
                {state.seats.map((num) => (
                    <p key={num}>Assento {num}</p>
                ))}
            </div>
            <div className="info-box">
                <h2>Comprador</h2>
                <p>Nome: {state.order.name}</p>
                <p>CPF: {state.order.cpf}</p>
            </div>
            <Link to="/">Voltar para Home</Link>
        </div>
    );
}

export default Sucess;
