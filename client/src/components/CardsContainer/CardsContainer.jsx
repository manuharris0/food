import Card from "../Card/Card";
import style from './CardsContainer.module.css'
import { useSelector } from 'react-redux';

const CardsContainer = () => {

    const users = useSelector(state => state.users)
 
    // Este array hardcodeado debe venir desde el store de redux, más adelante se comunicará con el Back
    return(
        <div className={style.CardContainer}>
            <p>Este es un compponente SMART, ya que tiene un mapeo lógico dentro</p>
            {
                users.map(user => {
                    return <Card 
                        id={user.id}
                        name={user.name}
                        phone={user.phone}
                        email={user.email}
                    />
                })
            }
        </div>
    )
};

export default CardsContainer;