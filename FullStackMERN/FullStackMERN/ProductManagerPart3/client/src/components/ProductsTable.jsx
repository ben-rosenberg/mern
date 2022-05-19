import axios from "axios";
import { Link } from "react-router-dom";

import '../style.css';

/**
 * A product-information table used by the read-all (Main.js) and read-one
 * (ProductDetails.js) views.
 * 
 * @param {Object} props The static properties object passed from a parent view
 * @returns {JSX.Element} A product-information table
 */
const ProductsTable = (props) => {
    /**
     * Deletes a product.
     * 
     * @param {Number} productId The unique identifier of the product being deleted
     */
    const onDelete = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) => {
                props.handleDelete(productId);
            })
            .catch((err) => console.error(err));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                props.dbProducts.map((product, index) => {
                    return (
                        <tr key={ index }>
                            <td><Link to={ `/products/${ product._id.toString() }` }>{ product.title }</Link></td>
                            <td>${ product.price }</td>
                            <td>{ product.description }</td>
                            <td>
                                <div className="flex_row space_around align_center">
                                    <Link to={ `/products/${ product._id.toString() }/edit` }>
                                        <button className="btn action" /* onClick={ (event) => event.preventDefault() } */>Edit</button>
                                    </Link>
                                    <button className="btn action" onClick={ () => onDelete(product._id) }>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default ProductsTable;