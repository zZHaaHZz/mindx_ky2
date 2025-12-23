import './Card.css';

const Card = ({name, lernClass,desc}) => {
    return (
        <div className="card">
            <div className="name">Tôi tên: {name}</div>
            <div className="name">Học lớp: {lernClass}</div>
            <div className="name">{desc}</div>
        </div>
    )
}

export default Card;
