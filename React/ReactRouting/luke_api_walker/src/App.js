import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import ErrorPage from './components/ErrorPage';
import DisplayResource from './components/DisplayResource';
import SearchForm from './components/SearchForm';
import Welcome from './components/Welcome';
import './style.css';

function App() {
    const [ errorMessage, setErrorMessage ] = useState("");

    return (
        <div className="flex_col gap_2">
            <div>
                <h1 className='text_center'>Star Wars Search</h1>
                <SearchForm></SearchForm>
            </div>
            <Routes>
                <Route path="" element={ <Welcome /> } />
                <Route path=':type/:id' element={ <DisplayResource setErrorMessage = { setErrorMessage }/> } />
                <Route path=':any' element={ <ErrorPage errorMessage = { "404" }/> } />
                <Route path='error' element={ <ErrorPage errorMessage={ errorMessage }/> } />
            </Routes>
        </div>
    );
}

export default App;
