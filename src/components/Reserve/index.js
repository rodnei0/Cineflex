import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios'
import './style.css';
import { render } from "react-dom";

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