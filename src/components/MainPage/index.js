import { useEffect } from 'react/cjs/react.development';
import Movies from '../Movies';
import './style.css';

function MainPage({ setPage }) {
    useEffect(() => {
        setPage("main");
    }, [setPage])
    

    return (
        <>
            <main>
                <h2>Selecione o filme</h2>
                <Movies />
            </main>
        </>
    );
}

export default MainPage;