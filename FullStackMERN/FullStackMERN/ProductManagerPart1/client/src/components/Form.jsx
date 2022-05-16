import { useState } from 'react';
import axios from 'axios';
import '../style.css';

const Form = (props) => {
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/products', {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="flex_col gap_1">
                <div className="form_control flex_row space_between">
                    <label>Title</label>
                    <input onChange={ (event) => setTitle(event.target.value) } value={ title } />
                </div>
                <div className="form_control flex_row space_between">
                    <label>Price</label>
                    <input type='number' onChange={ (event) => setPrice(event.target.value) } value={ price } />
                </div>
                <div className="form_control flex_row space_between">
                    <label>Description</label>
                    <input onChange={ (event) => setDescription(event.target.value) } value={ description } />
                </div>
                <input type="submit" value="Create" />
            </div>
        </form>
    );
};

export default Form;