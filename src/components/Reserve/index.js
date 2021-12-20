import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './style.css';

function ReserveSeat(name, cpf, selectedSeatsId, selectedSeatsName, navigate, title, date, hour) {
    if (selectedSeatsId.length === 0) {
        alert("Nenhum assento selecionado!");
        return
    }
    if (name === "") {
        alert("Nome não preenchido!");
        return
    }
    if (cpf === "") {
        alert("CPF não preenchido!");
        return
    }

    const data = {  name: name, 
                    cpf: cpf, selectedSeats: 
                    selectedSeatsName, 
                    title: title, 
                    date: date, 
                    hour: hour
                };

    const promisse = axios.post("https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many", {ids: selectedSeatsId, name: name, cpf: cpf});
    promisse.then(() => navigate("/success", {state: data}));
}

function Reserve({ name, cpf, selectedSeatsId, selectedSeatsName, title, date, hour }) {
    let navigate = useNavigate();

    return (
        <div className='containerReserve'>
            <button className='reserve' onClick={() => ReserveSeat(name, cpf, selectedSeatsId, selectedSeatsName, navigate, title, date, hour)}>Reservar assento(s)</button>
        </div>
    );
}

export default Reserve;