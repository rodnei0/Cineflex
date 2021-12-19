import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './style.css';

function ReserveSeat(name, cpf, selectedSeats, navigate) {

    const promisse = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {ids: selectedSeats, name: name, cpf: cpf});
    promisse.then(() => navigate("/success"));
}

function Reserve({ name, cpf, selectedSeats }) {
    let navigate = useNavigate();

    return (
        <div className='containerReserve'>
            <button className='reserve' onClick={() => ReserveSeat(name, cpf, selectedSeats, navigate)}>Reservar assento(s)</button>
        </div>
    );
}

export default Reserve;