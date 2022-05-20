import { Routes, Route } from 'react-router-dom';

import Edit from './views/Edit';
import Main from './views/Main';
import New from './views/New';

import './style.css';

function App() {
    return (
        <div className="flex_col gap_1">
            <h1 className="text_center">Favorite Authors</h1>
            <Routes>
                <Route path='' element={ <Main /> } />
                <Route path='/authors/new' element={ <New /> } />
                <Route path='/authors/:authorId/edit' element={ <Edit /> } />
            </Routes>
        </div>
    );
}

export default App;
