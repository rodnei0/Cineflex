import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import MainPage from "./components/MainPage";
import Showtimes from "./components/Showtimes";
import Seats from "./components/Seats";
import Sucess from "./components/Success";
import { useState } from 'react';

function App() {
    const [page, setPage] = useState("main");

    return (
        <BrowserRouter>
            <Top page={page}/>
            <Routes>
                <Route path="/" element={<MainPage setPage={setPage}/>}></Route>
                <Route path="/showtimes/:idMovie" element={<Showtimes setPage={setPage}/>}></Route>
                <Route path="/seats/:idSession" element={<Seats />}></Route>
                <Route path="/success" element={<Sucess />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;