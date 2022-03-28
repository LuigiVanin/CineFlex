import { useState } from "react";

function Seat(props) {
    const { num, isAvailable, id, updateSeatsState } = props;
    const [status, setStatus] = useState("");
    return (
        <div className="seat-wrapper">
            <div
                className={`seat ${
                    isAvailable ? "" : "indisponivel"
                } ${status}`}
                onClick={() => {
                    if (!isAvailable) return;
                    if (status === "") {
                        setStatus("selecionado");
                    } else if (status !== "") {
                        setStatus("");
                    }
                    updateSeatsState(id, num);
                }}
            >
                {num}
            </div>
        </div>
    );
}

export default Seat;
