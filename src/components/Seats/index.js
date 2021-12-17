import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import './style.css';
import Captions from '../Captions';

function Seat({ name, isAvailable }) {
    return ( 
            <div className='seat'>
                {`${name}`}
            </div>
    );
}

function Seats() {
    const { idSession } = useParams();
    const [seats, setSeats] = useState(null);

    useEffect(() => {
		const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`);

	    promisse.then(answer => {
            setSeats(answer.data.seats);
            console.dir(answer.data.seats)
	});
	}, []);

    if(seats === null) {
		return "Carregando";
	} 

    return (
        <section className="seats">
            <div className='container'>
                <h2>Selecione o(s) assento(s)</h2>
            </div>
            <div className='containerSeats'>
                {seats.map((seat) => <Seat name={seat.name} isAvailable={seat.isAvailable} key={seat.id}/>)}
            </div>
            <Captions />
        </section>
    );
}

export default Seats;