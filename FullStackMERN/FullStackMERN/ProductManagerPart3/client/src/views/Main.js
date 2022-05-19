import axios from 'axios';
import { useState, useEffect } from 'react';

import ProductsTable from '../components/ProductsTable';
import Form from '../components/Form';

/**
 * The home-page containing a create-form and a view-all table. 
 * 
 * @returns {JSX.Element}
 */
const Main = () => {
    const [ allDbProducts, setAllDbProducts ] = useState([]);
    const [ wasFormSubmitted, setWasFormSubmitted ] = useState(false);
    const [ validationErrors, setValidationErrors ] = useState({});

    /**
     * Immediately removes a product from the view-all table after a delete
     * request for that product.
     * 
     * @param {Number} productId The ID of the deleted product
     */
    const removeProductFromDom = (productId) => {
        setAllDbProducts(allDbProducts.filter((product) => {
            return (product._id !== productId);
        }))
    }

    /**
     * The method passed to the form component on the homepage that handles
     * product creation and form validation.
     * 
     * @param {String} title The product's title
     * @param {Number} price The product's price
     * @param {String} description The product's description
     * @returns {Promise} A promise that resolves to true if no errors
     */
    const handleFormSubmissionCreate = (title, price, description) => {
        return new Promise(resolve => {
            axios.post('http://localhost:8000/api/products', {
                title,
                price,
                description
            })
                .then(res => {
                    setWasFormSubmitted(!wasFormSubmitted);
                    setValidationErrors({});
                    resolve(true);
                })
                .catch(err => {
                    const errorResponse = err.response.data.errors;
                    const errorObj = {};
    
                    for (let key in errorResponse) {
                        const fieldKey = errorResponse[key].path;
                        errorObj[fieldKey] = errorResponse[key];
                    }
    
                    setValidationErrors(errorObj);
                });
        })
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setAllDbProducts(res.data.products);
            })
            .catch((err) => console.log(err));
    }, [ wasFormSubmitted ]);

    return (
        <div className='flex_col gap_1'>
            <Form handleFormSubmit={ handleFormSubmissionCreate } validationErrors={ validationErrors } />
            <h2 className="text_center">All Products</h2>
            <hr />
            {
                allDbProducts.length > 0
                && <ProductsTable dbProducts={ allDbProducts } handleDelete={ removeProductFromDom } />
            }
        </div>
    );
}

export default Main;