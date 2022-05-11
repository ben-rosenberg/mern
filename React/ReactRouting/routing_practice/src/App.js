import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import String from './components/String';
import Colors from './components/Colors';
import './style.css';

function App() {
    return (
        <BrowserRouter>
            <h1 className="text_center">Routing Practice</h1>
            <Routes>
                <Route path='' element={ <Home /> } />
                <Route path='home' element={ <Home /> } />
                <Route path=':string' element={ <String /> } />
                <Route path=':string/:textColor/:bgColor' element={ <Colors /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
