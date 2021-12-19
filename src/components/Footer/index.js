import './style.css';

function Footer({ poster, title, showtime, day, name }) {
    if (showtime) {
        return (
            <footer>
                <div className='containerFooter'>
                    <figure>
                        <img src={`${poster}`} alt={`${title}`} />
                    </figure>
                    <div>
                        <p>{title}</p>
                    </div>
                </div>
            </footer>
        );
    } else {
        return (
            <footer>
                <div className='containerFooter'>
                    <figure>
                        <img src={`${poster}`} alt={`${title}`} />
                    </figure>
                    <div>
                        <p>{title}</p>
                        <p>{day} - {name}</p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;