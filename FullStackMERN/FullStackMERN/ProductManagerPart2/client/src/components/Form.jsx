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
            .then(res => {
                console.log(res);
                props.setFormSubmissionFlag(true);
                
                setTitle('');
                setPrice('');
                setDescription('');
            })
            .catch(err => console.log(err));
        
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <div className="flex_col gap_1">
                <div className="flex_row space_between">
                    <div className="flex_col gap_1 width_20 center">
                        <label>Title</label>
                        <label>Price</label>
                        <label>Description</label>
                    </div>
                    <div className="flex_col gap_1 width_80 center">
                        <input onChange={ (event) => setTitle(event.target.value) } value={ title } />
                        <input type='number' onChange={ (event) => setPrice(event.target.value) } value={ price } />
                        <input onChange={ (event) => setDescription(event.target.value) } value={ description } />
                    </div>
                </div>
                <input type="submit" value="Create" />
            </div>
        </form>
    );
};

export default Form;