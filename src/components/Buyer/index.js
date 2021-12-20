import './style.css';

function Buyer({name, setName, cpf, setCpf }) {
    return (
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
    );
}

export default Buyer;