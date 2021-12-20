import { useState } from 'react/cjs/react.development';
import Reserve from '../Reserve';
import './style.css';

function Buyer({selectedSeats, title, date, hour }) {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <div className='containerBuyer'>
            <div className='buyer'>
                <div>
                    <p>Nome do comprador:</p>
                    <input placeholder="Digite seu nome..." value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>CPF do comprador:</p>
                    <input placeholder="Digite seu CPF..." value={cpf} onChange={e => setCpf(e.target.value)} />
                </div>
            </div>
            <Reserve name={name} cpf={cpf} selectedSeats={selectedSeats} title={title} date={date} hour={hour}/>
        </div>
    );
}

export default Buyer;