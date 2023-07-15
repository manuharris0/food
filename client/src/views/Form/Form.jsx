import { useState } from "react";
import axios from 'axios';

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: [],
        image: '',
        diets: []
    });

    const [errors, setErrors] = useState({
        name: '',
        summary: '',
        healthScore: '',
        steps: [],
        image: '',
        diets: []
    })

    const changeHandler = (event) => {
        const propery = event.target.name;
        const value = event.target.value;

        validate({ ...form, [propery]: value })
        // Acá a la función que valida que esté correcto el campo le paso lo mismo que le voy a pasar al estado, para que valide realmente lo que está en el estado y no lo que estaba previamente

        setForm({ ...form, [propery]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3001/recipes', form)
        // el parámetro luego de la URL sería el body que se manda
        .then(res=>alert(res))
        .catch(err=>alert(err))
    }

    const validate = (form) => {
        if(/^[a-z ,.'-]+$/i.test(form.name)) {
            setErrors({...errors, name:''})
        } else {
            setErrors({...errors, name:'Invalid format'})
        };
        // investigar sobre las regex para validar todos los campos
        if(form.name === '') setErrors({...errors, name: 'Required field'})
    }

    return (
        <form onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <input type='text' value={form.name} onChange={changeHandler} name='name' />
                <span>{errors.name}</span>
            </div>
            <div>
                <label>Summary:</label>
                <input type='text' value={form.summary} onChange={changeHandler} name='summary' />
            </div>
            <div>
                <label>Heatlh score:</label>
                <input type='integer' value={form.healthScore} onChange={changeHandler} name='healthScore' />
            </div>
            <div>
                <label>Steps:</label>
                <input type='text' value={form.steps} onChange={changeHandler} name='steps' />
            </div>
            <div>
                <label>Image:</label>
                <input type='text' value={form.image} onChange={changeHandler} name='image' />
            </div>
            <div>
                <label>Diets:</label>
                <input type='text' value={form.diets} onChange={changeHandler} name='diets' />
            </div>
            <button type="submit">SUBMIT</button>
        </form>
    )
};

// Todo form debe tener un div que 'abrace' a un label y a un input
export default Form;