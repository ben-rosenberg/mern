import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProductsTable from "../components/ProductsTable";
import '../style.css';

/**
 * The read-one product view.
 * 
 * @param {Object} props The static properties object passed from the parent
 *   component
 * @returns {JSX.Element}
 */
const ProductDetails = (props) => {
    const { productId } = useParams();
    const [ product, setProduct ] = useState({});
    const [ wasProductFound, setWasProductFound ] = useState(false);

    const navigate = useNavigate();

    /**
     * Performs an Axios delete request and navigates back to the homepage.
     */
    const removeProductAndRedirect = () => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                setProduct(res.data.product);
                setWasProductFound(res.data.product !== undefined);
            })
            .catch((err) => console.error(err));
    }, [ productId ]);

    return (
        wasProductFound
        ?
        <div className="flex_col gap_1">
            <h2 className="text_center">Product Information: { product.title }</h2>
            <ProductsTable dbProducts={ [ product ] } handleDelete={ removeProductAndRedirect }/>
        </div>
        :
        <h2 className="text_center">Error 404: Product not found</h2>
    );
};

export default ProductDetails;