import { useState } from "react";

function Seat(props) {
    const { num, isAvailable } = props;
    const [status, setStatus] = useState("");
    return (
        <div className="seat-wrapper">
            <div
                className={`seat ${
                    isAvailable ? "" : "indisponivel"
                } ${status}`}
                onClick={(eent) => {
                    if (!isAvailable) return;
                    if (status === "") {
                        setStatus("selecionado");
                        return;
                    }
                    if (status !== "") {
                        setStatus("");
                    }
                }}
            >
                {num}
            </div>
        </div>
    );
}

export default Seat;
