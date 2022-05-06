import React, { useState } from 'react';
import './App.css';

import Boxes from './components/boxes';
import Form from './components/form';

function App() {
    const [ stylesArray, setStylesArray ] = useState([]);

    const setNewStyle = (newStyle) => {
        setStylesArray([ ...stylesArray, newStyle ]);
    };

    return (
        <div>
            <Form onStyleSubmit={ setNewStyle }></Form>
            <Boxes stylesArray={ stylesArray }></Boxes>
        </div>
    );
}

export default App;
