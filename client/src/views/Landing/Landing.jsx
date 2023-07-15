import style from './Landing.module.css';
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className={style.landing}>
            <h1>Landing Page</h1>
            <button>
                <Link to='/home'>HOME</Link>
            </button>
        </div>
    )
};

export default Landing;