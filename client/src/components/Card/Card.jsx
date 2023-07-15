import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = (props) => {
    return(
        <div className={style.Card}>
            <img src={props.image} alt='img'/>
            <Link to='recipes/:id'>
                <p>Name: {props.name}</p>
            </Link>
            <p>Diets: {props.diets}</p>
        </div>
    )
};

export default Card;