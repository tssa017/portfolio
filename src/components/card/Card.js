import '../../index.scss';

function Card({ onClick, children }) {
    return (
        <div className="card" onClick={onClick}>
            <h2 className="card__heading">{children[0]}</h2>
            <p className="card__para">{children[1]}</p>
        </div>
    );
}

export default Card;
