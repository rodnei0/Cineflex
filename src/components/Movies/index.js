import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios'

import './style.css';

function Movie({ poster, title, id}) {
    return (
        <div className="movie">
            <Link to={`/showtimes/${id}`}>
                <img src={`${poster}`} alt={`${title}`} />
            </Link>
        </div>
    );
}

function Movies() {
    const [movies, setMovies] = useState(null);
	
    useEffect(() => {
		const promisse = axios.get("https://mock-api.driven.com.br/api/v4/cineflex/movies");

	    promisse.then(answer => {
            setMovies(answer.data);
	});
	}, []);

    if(movies === null) {
		return "Carregando";
	} 
    
    return (
            <section className='movies'>
                {movies.map((movie) => <Movie poster={movie.posterURL} title={movie.title} id={movie.id} key={movie.id}/>)}
            </section>
    );
}

export default Movies;