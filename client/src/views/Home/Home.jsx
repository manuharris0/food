import CardsContainer from "../../components/CardsContainer/CardsContainer";
// Cuando este ocomponente se monte, se debe despachar el getRecipes(), que me va a cargar el estado global con las recetas traidas de la API (y de la base de datos tambien?)
import { useEffect } from "react";
//  hook para manejar los estados de vida de los componentes
import { useDispatch } from "react-redux";
//  hook para despachar actions  
import { getRecipes } from "../../redux/actions";
// Me traigo la action para despachar cuando se monte el componente

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes())
    }, [dispatch])
    return (
        <div>
            Home page
            <CardsContainer />
        </div>
        
    )
};

export default Home;