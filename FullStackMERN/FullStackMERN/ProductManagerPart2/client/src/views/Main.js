import axios from 'axios';
import { useState, useEffect } from 'react';

import ProductsTable from '../components/ProductsTable';
import Form from '../components/Form';

const Main = () => {
    const [ allDbProducts, setAllDbProducts ] = useState([]);
    const [ wasFormSubmitted, setWasFormSubmitted ] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then((res) => {
                setAllDbProducts(res.data.products);
            })
            .catch((err) => console.log(err));
    }, [ wasFormSubmitted ]);

    return (
        <div className='flex_col gap_1'>
            <Form setFormSubmissionFlag={ setWasFormSubmitted }/>
            <hr />
            { allDbProducts.length > 0 && <ProductsTable dbProducts={ allDbProducts } /> }
        </div>
    );
}

export default Main;