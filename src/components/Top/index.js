import { useNavigate } from 'react-router-dom';
import './style.css';

function goBack(navigate) {
    navigate(-1);
}

function Top({ page }) {
    let navigate = useNavigate();
    // console.log(navigate);


    return (
        <header>
            <div className='containerTop'>
                {page === `not-main` ? <ion-icon name="arrow-back-circle" onClick={() => goBack(navigate)}></ion-icon> : ""}
                <div className='top'>
                    CINEFLEX
                </div>
            </div>
        </header>
    );
}

export default Top;