import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductsTable from "../components/ProductsTable";
import '../style.css';

const ProductDetails = (props) => {
    const { productId } = useParams();
    const [ product, setProduct ] = useState({});
    const [ wasProductFound, setWasProductFound ] = useState(false);

    /** Why is .catch not running when I try to navigate to a non-existent product? */
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                setProduct(res.data.product);
                setWasProductFound(res.data.product !== undefined);
            })
            .catch((err) => console.log(err));
    }, [ productId ]);

    return (
        wasProductFound
        ?
        <ProductsTable dbProducts={ [ product ] } />
        :
        <h2 className="text_center">Error 404: Product not found</h2>
    );
};

export default ProductDetails;