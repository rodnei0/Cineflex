import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import MainPage from "./components/MainPage";
import Showtimes from "./components/Showtimes";
import Seats from "./components/Seats";
import Sucess from "./components/Success";

function App() {
    return (
        <BrowserRouter>
            <Top />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/showtimes/:idMovie" element={<Showtimes />}></Route>
                <Route path="/seats/:idSession" element={<Seats />}></Route>
                <Route path="/success" element={<Sucess />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;