import { useState } from 'react';

import ItemForm from './components/ItemForm';
import Items from './components/Items';

import './style.css';

/**
 * The main entry-point into the program. All child components are established
 * here, and all states are stored and managed in some form here.
 * 
 * @returns The page's HTML to be rendered
 */
function App() {
    const [ items, setItems ] = useState([]);

    /**
     * Appends the new item to the items array via the setItems setter method.
     * A new array containing a copy of the previous state of the array and the
     * new item are passed to the setter.
     *
     * @param {Array<Object>} newItem The newly created todo list item
     */
    const onNewItem = (newItem) => {
        setItems([ ...items, newItem ]);
    };

    /**
     * Called from Items.jsx when an item has been marked as completed. A new
     * copy of the items array is created, and the isCompleted key in the
     * element at index 'index' is reassigned to the opposite of its previous
     * value.
     *
     * @param {Number} index The index of the newly completed item
     */
    const completeItem = (index) => {
        const [ ...itemsCopy ] = items;
        itemsCopy[index].isCompleted = !items[index].isCompleted;
        setItems(itemsCopy);
    };

    /**
     * Deletes the item at index 'index.' Sets the items array with a new array
     * filtered by index value. If the index of item equals 'index', it is
     * filtered out.
     *
     * @param {Number} index The index of the item to be deleted
     */
    const deleteItem = (index) => {
        setItems(items.filter((item, i) => i !== index));
    };

    return (
        <div className="flex_col gap_1">
            <h1 className='margin_auto'>Welcome! Create Your Todo List</h1>
            <ItemForm newItemFunc={ onNewItem }></ItemForm>
            <Items allItems={ items } completeItemFunc={ completeItem } deleteItemFunc={ deleteItem }></Items>
        </div>
    );
}

export default App;
