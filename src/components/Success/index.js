import './style.css';
import {useLocation} from 'react-router-dom';


function Success() {
    const { state: { name },
            state: { cpf },
            state: { selectedSeats },
            state: { title },
            state: { date },
            state: { hour },
          } = useLocation();

    console.dir(name);
    console.dir(cpf);
    console.dir(selectedSeats);
    console.dir(title);
    console.dir(date) ;
    console.dir(hour) ;

    return (
        <h1>TESTE BAGABUNDO</h1>
    );
}

export default Success;