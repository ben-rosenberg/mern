import { useState } from 'react';

import ButtonsBar from './components/ButtonsBar';
import TabContent from './components/TabContent';

import './style.css'

function App() {
    const [ currentTabNumber, setCurrentTabNumber ] = useState(1);

    const onTabChange = (tabNumber) => {
        console.log(tabNumber);
        setCurrentTabNumber(tabNumber);
    };

    return (
        <div className="flex_col gap_1">
            <ButtonsBar tabChangeFunc={ onTabChange }></ButtonsBar>
            <TabContent currentTabNumber={ currentTabNumber }></TabContent>
        </div>
    );
}

export default App;
