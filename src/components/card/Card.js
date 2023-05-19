import '../../index.scss';

function Card({ onClick, src, children }) {
    return (
        <div className="card" onClick={onClick}>
            <img src={src} className="card__img" alt="Project snapshot"></img>
            <h2 className="card__heading">{children[0]}</h2>
            <p className="card__para">{children[1]}</p>
            <p className="card__icons">{children[2]}</p>
        </div>
    );
}

export default Card;
