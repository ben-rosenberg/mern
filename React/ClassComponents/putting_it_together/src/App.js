import PersonCard from './components/PersonCard';
import './App.css';

function App() {
    return (
        <>
            <PersonCard firstName="John" lastName="Smith" age="45" hairColor="Brown"></PersonCard>
            <hr />
            <PersonCard firstName="Jane" lastName="Doe" age="24" hairColor="Black"></PersonCard>
        </>
  );
}

export default App;
