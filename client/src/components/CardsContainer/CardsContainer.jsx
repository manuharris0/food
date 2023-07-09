import Card from "../Card/Card";
import style from './CardsContainer.module.css'

const CardsContainer = () => {
    const array = [
        {id: 1, name: 'manu', image: 5, diets: [1, 2, 3]},
        {id: 2, name: 'piter', image: 5, diets: [1, 2, 3]},
        {id: 3, name: 'brenda', image: 5, diets: [1, 2, 3]},
        {id: 4, name: 'droguin', image: 5, diets: [1, 2, 3]}
    ]
    return(
        <div className={style.CardContainer}>
            {
                array.map(arr => {
                    return <Card 
                        key={arr.id}
                        name={arr.name}
                        image={arr.image}
                        diets={array.diets}
                    />
                })
            }
        </div>
    )
};

export default CardsContainer;