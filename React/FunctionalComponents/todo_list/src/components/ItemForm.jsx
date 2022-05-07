import { useState } from 'react';
import '../style.css';

/**
 * The Item Form component. Only a text input and a submit button.
 * 
 * @param {Object} props The properties object passed to the component from App.js
 * @returns The item form HTML
 */
const ItemForm = (props) => {
    const [ currentItemText, setCurrentItemText ] = useState('');

    /**
     * Prevents redirect, constructs a new item object, and passes the new
     * object to App.js via the newItemFunc passed from App.js in props. Also
     * clears the text input after submission.
     * 
     * @param {Event} event The event that triggered the call
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        const newItemObject = {
            itemText: currentItemText,
            isCompleted: false,
            isDeleted: false
        };
        props.newItemFunc(newItemObject);

        setCurrentItemText("");
    }

    return (
        <form onSubmit={ (event) => handleSubmit(event) }>
            <div className="flex_row width_50 gap_1 margin_auto center">
                <input onChange={ (event) => setCurrentItemText(event.target.value) } value={ currentItemText } className="width_50"/>
                <input type="submit" value="Add Item" className="btn width_20"/>
            </div>
        </form>
    );
};

export default ItemForm;