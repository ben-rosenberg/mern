import React, { useEffect, useState } from 'react';
import axios from 'axios';

import '../style.css';

/**
 * The form component used by both the Edit Product and Main/create product
 * views.
 * 
 * @param {Object} props Static properties object from the parent component
 * @returns {JSX.Element} The rendered form component
 */
const Form = (props) => {
    const [ title, setTitle ] = useState('');
    const [ price, setPrice ] = useState('');
    const [ description, setDescription ] = useState('');

    /**
     * Prevents page refresh and calls the form submission handler method in
     * props. This method will either create a new product or update an
     * existing one depending on what view rendered this component. I
     * implemented a simple promise system to ensure that the inputs' values
     * are only reset if the submission was successful.
     * 
     * @param {Event} event The event that triggered the call to this method
     */
    const handleSubmit = async (event) => {
        event.preventDefault();

        const isValid = await props.handleFormSubmit(title, price, description);

        console.log(isValid);

        if (isValid) {
            setTitle('');
            setPrice('');
            setDescription(''); 
        }
    };

    /**
     * This autofills the form inputs when editing an existing product. This is
     * determined by whether a product ID was passed in props. If it wasn't,
     * it immediately returns. Otherwise it fetches the data from the product
     * before update so that the form inputs autofill with their values. This
     * is to avoid having to pass the title, price, and description to this
     * component in props.
     */
    useEffect(() => {
        if (props.productId === undefined) {
            return;
        }

        axios.get(`http://localhost:8000/api/products/${props.productId}`)
            .then((res) => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
            })
            .catch((err) => console.error(err));
    }, [ props.productId ]);

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
                        {/* Title */}
                        <input onChange={ (event) => setTitle(event.target.value) } value={ title } />
                        {
                            /* Title validation errors, if any */
                            props.validationErrors.hasOwnProperty('title')
                            && <p className='error'>{ props.validationErrors.title.message }</p>
                        }
                        {/* Price */}
                        <input type='number' onChange={ (event) => setPrice(event.target.value) } value={ price } />
                        {
                            /* Price validation errors, if any */
                            props.validationErrors.hasOwnProperty('price')
                            && <p className='error'>{ props.validationErrors.price.message }</p>
                        }
                        {/* Description */}
                        <input onChange={ (event) => setDescription(event.target.value) } value={ description } />
                        {
                            /* Description validation errors, if any */
                            props.validationErrors.hasOwnProperty('description')
                            && <p className='error'>{ props.validationErrors.description.message }</p>
                        }
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default Form;