import { Link, Route, Routes } from 'react-router-dom';

import Main from './views/Main';
import ProductDetails from './views/ProductDetails';

import './style.css';

function App() {
    return (
        <div className="flex_col gap_1">
            <h1 className="text_center">
                <Link to=''>Product Manager</Link>
            </h1>
            <Routes>
                <Route path='' element={ <Main /> } />
                <Route path='products/:productId' element={ <ProductDetails /> } />
            </Routes>
        </div>
    );
}

export default App;
