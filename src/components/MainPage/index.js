import Movies from '../Movies';
import './style.css';

function MainPage() {
    return (
        <>
            <main>
                <h2>Selecione o filme</h2>
                <section className='movies'>
                    <Movies />
                </section>
            </main>
        </>
    );
}

export default MainPage;