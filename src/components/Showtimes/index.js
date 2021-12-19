import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios'
import './style.css';
import Footer from '../Footer';

function Showtime({ weekday, date, showtimes }) {
    return (
        <div className='containerShowtime'>
            <p>{`${weekday}`} - {`${date}`}</p>
            
            <div className='times'>
                {showtimes.map((time) => 
                    <Link to={`/seats/${time.id}`}>
                        <div className='time'>{`${time.name}`} </div>
                    </Link>)
                }
            </div>
        </div>
    );
}

function Showtimes() {
    const { idMovie } = useParams();
    const [showtimes, setShowtimes] = useState(null);

    useEffect(() => {
		const promisse = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idMovie}/showtimes`);

	    promisse.then(answer => {
            setShowtimes(answer.data);
	});
	}, []);

    if(showtimes === null) {
		return "Carregando";
	} 

    return (
        <>
            <section className="showtimes">
                <div className='container'>
                    <h2>Selecione o horário</h2>
                </div>
                {showtimes.days.map((showtime) => <Showtime weekday={showtime.weekday} date={showtime.date} showtimes={showtime.showtimes} key={showtime.id}/>)}
            </section>
            <Footer poster={showtimes.posterURL} title={showtimes.title} showtime={true}/>
        </>
    );
}

export default Showtimes;