import './style.css';

function Captions() {
    return (
        <div className='captions'>
            <div className='caption'>
                <div className='seat selected'></div>
                <p>Selecionado</p>
            </div>
            <div className='caption'>
                <div className='seat available'></div>
                <p>Disponível</p>
            </div>
            <div className='caption'>
                <div className='seat unavailable'></div>
                <p>Indisponível</p>
            </div>
        </div>
    );
}

export default Captions;