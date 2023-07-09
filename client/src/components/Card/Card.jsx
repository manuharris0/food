const Card = (props) => {
    return(
        <div>
            <p>Acá va a estar el detalle de cada carta (receta)</p>
            {props.image}
            <p>Name: {props.name}</p>
            <p>Diets: {props.diets}</p>
        </div>
    )
};

export default Card;