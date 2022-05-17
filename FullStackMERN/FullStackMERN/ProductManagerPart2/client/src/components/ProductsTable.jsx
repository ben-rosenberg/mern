import { Link } from "react-router-dom";

import '../style.css';

const ProductsTable = (props) => {
    const headerText = props.dbProducts.length > 1
        ? `All Products (${ props.dbProducts.length })`
        : `Product Information: ${ props.dbProducts[0].title }`;

    return (
        <div className="flex_col gap_1">
            <h2 className="text_center">{ headerText }</h2>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
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
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    );
};

export default ProductsTable;