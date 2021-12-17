import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top from "./components/Top";
import MainPage from "./components/MainPage";
import Showtimes from "./components/Showtimes";
import Seats from "./components/Seats";

function App() {
    return (
        <BrowserRouter>
            <Top />
        <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/showtimes/:idMovie" element={<Showtimes />}></Route>
            <Route path="/seats" element={<Seats />}></Route>
            {/* <Route path="/seats/:idSession" element={<Seats />}></Route> */}
        </Routes>
            
        </BrowserRouter>
    );
}

export default App;