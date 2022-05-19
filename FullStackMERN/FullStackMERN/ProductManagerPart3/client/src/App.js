import { Link, Route, Routes } from 'react-router-dom';

import EditProduct from './views/EditProduct';
import Main from './views/Main';
import ProductDetails from './views/ProductDetails';

import './style.css';

/**
 * The main entry-point for the application.
 * 
 * @returns {JSX.Element}
 */
function App() {
    return (
        <div className="flex_col gap_1">
            <h1 className="text_center">
                <Link to=''>Product Manager</Link>
            </h1>
            <Routes>
                <Route path='' element={ <Main /> } />
                <Route path='products/:productId' element={ <ProductDetails /> } />
                <Route path='products/:productId/edit' element={ <EditProduct /> } />
            </Routes>
        </div>
    );
}

export default App;
