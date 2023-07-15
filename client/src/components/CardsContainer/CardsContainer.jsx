import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import { useSelector } from 'react-redux';

const CardsContainer = () => {

    const recipes = useSelector(state => state.recipes)
 
    return(
        <div className={style.CardContainer}>
            {
                recipes.map(recipe => {
                    return <Card 
                        key={recipe.id}
                        name={recipe.name}
                        image={recipe.image}
                        diets={recipe.diets}
                    // Falta renderizar las dietas de las recetas de la BDD y acomodar el renderizado de las dietas de las recetas de la api
                    />
                })
            }
        </div>
    )
};

export default CardsContainer;