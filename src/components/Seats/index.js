import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import './style.css';
import Captions from '../Captions';

function checkSeat(id, isAvailable, situation, setSituation, selectedSeats, setSelectedSeats) {
    if (!isAvailable) {
        alert("Esse assento não está disponível")
    } else if (situation === "seat selected") {
        setSituation("seat")
        for (let i = 0; i < selectedSeats.length; i++) {
            if (selectedSeats[i] === id) {
                selectedSeats.splice(i, 1)
            }
        }
    } else if (situation === "seat"){
        setSituation("seat selected")
        setSelectedSeats([...selectedSeats, id]);
    }
    console.log(selectedSeats)
}

function Seat({ id, name, isAvailable, selectedSeats, setSelectedSeats }) {
    const [situation, setSituation] = useState("seat");

    useEffect(() => {
        if (!isAvailable) {
            setSituation("seat unavailable");
        }
    }, [])
    
    return ( 
        <div className={`${situation}`} onClick={() => checkSeat(id, isAvailable, situation, setSituation, selectedSeats, setSelectedSeats)}>
            {`${name}`}
        </div>
    );
}

function Seats() {
    const { idSession } = useParams();
    const [seats, setSeats] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([])

    useEffect(() => {
		const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`);

	    promisse.then(answer => {
            setSeats(answer.data.seats);
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
                {seats.map((seat) => 
                    <Seat 
                        id={seat.id} 
                        name={seat.name} 
                        isAvailable={seat.isAvailable} 
                        selectedSeats={selectedSeats} 
                        setSelectedSeats={setSelectedSeats}
                        key={seat.id}/>)
                }
            </div>
            <Captions />
        </section>
    );
}

export default Seats;