const Card = (props) => {
    return(
        <div>
            <p>Este es un Componente DUMB ya que solo muestra información</p>
            <p>Acá va a estar el detalle de cada carta (receta)</p>
            <p>Name: {props.name}</p>
            <p>Email: {props.email}</p>
            <p>Phone: {props.phone}</p>
        </div>
    )
};

export default Card;