import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./home.scss";

export default function Home() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        let promise = axios.get(
            "https://mock-api.driven.com.br/api/v5/cineflex/movies"
        );
        promise.then((response) => {
            setMovies([...response.data]);
        });
        promise.catch((err) => console.log(err));
    }, []);

    console.log(movies);
    return (
        <div className="home">
            <h1>Selecione Um filme</h1>
            <div className="movies-container">
                {movies.map((movie) => {
                    return (
                        <div className="poster" key={movie.id}>
                            <Link to={`/filme/${movie.id}`}>
                                <img src={movie.posterURL} alt="" />
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
