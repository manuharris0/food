import { useParams } from "react-router-dom";

const Detail = () => {
    const params = useParams()
    return (
        <div>
            Detail page
            <p>{`Mostrando la receta con id ${params.id}`}</p>
        </div>
    );
};

export default Detail;