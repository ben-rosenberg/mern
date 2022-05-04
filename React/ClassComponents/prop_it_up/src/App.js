import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import PersonCard from './components/PersonCard'

class App extends Component {
    render() {
        return(
            <>   
                <PersonCard firstName="Jane" lastName="Doe" age="45" hairColor="black"></PersonCard>
                <PersonCard firstName="John" lastName="Smith" age="88" hairColor="brown"></PersonCard>
                <PersonCard firstName="Millard" lastName="Fillmore" age="50" hairColor="brown"></PersonCard>
                <PersonCard firstName="Maria" lastName="Smith" age="62" hairColor="brown"></PersonCard>
            </>
        );
    }
}

export default App;
