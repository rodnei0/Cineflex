import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'
import './style.css';
import Captions from '../Captions';
import Buyer from '../Buyer';
import Footer from '../Footer';
import Reserve from '../Reserve';

function checkSeat(id, name, isAvailable, situation, setSituation, selectedSeatsId, setSelectedSeatsId, selectedSeatsName, setSelectedSeatsName) {
    if (!isAvailable) {
        alert("Esse assento não está disponível")
    } else if (situation === "seat selected") {
        setSituation("seat")
        for (let i = 0; i < selectedSeatsId.length; i++) {
            if (selectedSeatsId[i] === id) {
                selectedSeatsId.splice(i, 1);
                selectedSeatsName.splice(i, 1);
            }
        }
    } else if (situation === "seat"){
        setSituation("seat selected")
        setSelectedSeatsId([...selectedSeatsId, id]);
        setSelectedSeatsName([...selectedSeatsName, name]);
    }
}

function Seat({ id, name, isAvailable, selectedSeatsId, setSelectedSeatsId, selectedSeatsName, setSelectedSeatsName }) {
    const [situation, setSituation] = useState("seat");

    useEffect(() => {
        if (!isAvailable) {
            setSituation("seat unavailable");
        }
    }, [])
    
    return ( 
        <div className={`${situation}`} onClick={() => checkSeat(id, name, isAvailable, situation, setSituation, selectedSeatsId, setSelectedSeatsId, selectedSeatsName, setSelectedSeatsName)}>
            {`${name}`}
        </div>
    );
}

function Seats() {
    const { idSession } = useParams();
    const [seats, setSeats] = useState(null);
    const [selectedSeatsId, setSelectedSeatsId] = useState([])
    const [selectedSeatsName, setSelectedSeatsName] = useState([])
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
		const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`);

	    promisse.then(answer => {
            setSeats(answer.data);
	});
	}, []);

    if(seats === null) {
		return "Carregando";
	} 

    return (
        <>
            <section className="seats">
                <div className='container'>
                    <h2>Selecione o(s) assento(s)</h2>
                </div>
                <div className='containerSeats'>
                    {seats.seats.map((seat) => 
                        <Seat 
                            id={seat.id} 
                            name={seat.name} 
                            isAvailable={seat.isAvailable} 
                            selectedSeatsId={selectedSeatsId} 
                            setSelectedSeatsId={setSelectedSeatsId}
                            selectedSeatsName={selectedSeatsName} 
                            setSelectedSeatsName={setSelectedSeatsName}
                            key={seat.id}
                        />)
                    }
                </div>
                <Captions />
                <Buyer name={name} setName={setName} cpf={cpf} setCpf={setCpf}/>
                <Reserve name={name} cpf={cpf} selectedSeats={selectedSeatsName} title={seats.movie.title} date={seats.day.date} hour={seats.name}/>
            </section>
            <Footer poster={seats.movie.posterURL} title={seats.movie.title} day={seats.day.weekday} name={seats.name}/>
        </>
    );
}

export default Seats;