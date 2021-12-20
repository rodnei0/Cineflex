import './style.css';
import {Link, useLocation} from 'react-router-dom';


function Success() {
    const { state: { name },
            state: { cpf },
            state: { selectedSeats },
            state: { title },
            state: { date },
            state: { hour },
          } = useLocation();

    return (
        <section className='success'>
            <div className='container'>
                <h2>Pedido feito com sucesso!</h2>   
            </div>
            <div className='informations'>
                <h3>Filme e sessão</h3>
                <p>{title}</p>
                <p>{date} - {hour}</p>
            </div>
            <div className='informations'>
                <h3>Ingressos</h3>
                {selectedSeats.map((seat) => <p key={seat}>Assento - {seat}</p>)}
            </div>
            <div className='informations'>
                <h3>Comprador</h3>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <Link to={"/"}>
                <div className='home'> 
                    <button className='homeButton'>Voltar para Home</button>
                </div>
            </Link>
        </section>
    );
}

export default Success;