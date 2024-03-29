import "../styles/reset.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header/Header";
import Sessions from "./Sessions/Sessions";
import Bookmark from "./Bookmark/Bookmark";
import Sucess from "./Sucess/Sucess";

import "../styles/globals.scss";

export default function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/filme/:idMovie" element={<Sessions />} />
                    <Route path="/sessao/:idSession" element={<Bookmark />} />
                    <Route path="/sucesso" element={<Sucess />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
