import { useParams } from "react-router-dom";

const Detail = () => {
    const id = useParams()
    return (
        <div>
            Detail page
            <p>{`Mostrando la receta con id ${id}`}</p>
        </div>
    );
};

export default Detail;