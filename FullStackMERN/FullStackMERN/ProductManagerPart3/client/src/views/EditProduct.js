import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Form from "../components/Form";

/**
 * The view for editing an existing product.
 * 
 * @param {Object} props The properties object
 * @returns {JSX.Element} The edit product form
 */
const EditProduct = (props) => {
    const [ validationErrors, setValidationErrors ] = useState({});
    const { productId } = useParams();
    const navigate = useNavigate();

    /**
     * The form-submission handler passed to the Form component from this view.
     * 
     * @param {String} title The title of the product from the form
     * @param {String} price The price from the form (numeric string)
     * @param {String} description The description of the product from the form
     * @returns {Promise} A promise that resolves to true if no errors
     */
    const handleFormSubmissionUpdate = (title, price, description) => {
        return new Promise((resolve) => {
            axios.put(`http://localhost:8000/api/products/${productId}`, {
                title, price, description
            })
                .then((res) => {
                    console.log(res);
                    navigate(`/products/${productId}`);
                    resolve(true);
                })
                .catch((err) => {
                    const errorResponse = err.response.data.errors;
                    const errorObj = {};
    
                    for (let key in errorResponse) {
                        errorObj[errorResponse[key].path] = errorResponse[key];
                    }
    
                    console.log(errorObj);
                    setValidationErrors(errorObj);
                });
        })
    }

    return (
        <div className="flex_col gap_1">
            <h2 className='text_center'>Update Product</h2>
            <Form
                handleFormSubmit={ handleFormSubmissionUpdate }
                productId={ productId }
                validationErrors={ validationErrors }
            />
        </div>
    );
};

export default EditProduct;