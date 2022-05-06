import { useState } from "react";

import '../style.css'

/**
 * 
 * @param {Object} props 
 * @returns 
 */
const ButtonsBar = (props) => {
    const [ tabButtonClassNames, setTabButtonClassNames ] = useState(
        [ 'tab_button_selected', 'tab_button', 'tab_button' ]);

    const handleClick = (event, tabNumber) => {
        props.tabChangeFunc(tabNumber);
        
        const temp = [ 'tab_button', 'tab_button', 'tab_button' ];
        for (let i = 0; i < 3; i++) {
            if (i === tabNumber - 1) {
                temp[i] = 'tab_button_selected';
            }
        }

        setTabButtonClassNames(temp);
    };

    return (
        <div className="flex_row gap_1 buttons_bar">
            <button
                className={ tabButtonClassNames[0] }
                onClick={ (event) => handleClick(event, 1)}
            >Tab 1</button>
            <button
                className={ tabButtonClassNames[1] }
                onClick={ (event) => handleClick(event, 2) }
            >Tab 2</button>
            <button
                className={ tabButtonClassNames[2] }
                onClick={ (event) => handleClick(event, 3) }
            >Tab 3</button>
        </div>
    );
};

export default ButtonsBar;