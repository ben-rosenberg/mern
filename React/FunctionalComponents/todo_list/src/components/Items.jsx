import '../style.css';


/**
 * Responsible for displaying each todo list item as well as buttons to either
 * mark an item as complete or delete an item. Marking an item as complete
 * results in the items text being rendered with a line through it.
 * 
 * @param {Object} props Properties object from App.js
 * @returns The HTML containing the todo list item
 */
const Items = (props) => {
    /**
     * Calls the completeItem function passed from App.js via props. The item
     * remains in the list but with its text rendered with a line through it.
     * 
     * @param {Number} index The index of the completed item
     */
    const handleCheck = (index) => {
        props.completeItemFunc(index);
    };

    /**
     * Prevents redirect and calls the deleteItem function passed from App.js
     * via props. The item is removed from the list.
     * 
     * @param {Event} event The event that triggered the call
     * @param {Number} index The index of the item to be deleted
     */
    const handleDelete = (event, index) => {
        event.preventDefault();
        props.deleteItemFunc(index);
    }

    return (
        <form>
            <table>
                <thead>
                    <tr>
                        <th>Complete</th>
                        <th>Item</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    props.allItems.map((item, index) => {
                        return (
                            <tr key={ index }>
                                <td>
                                    <input onClick={ () => handleCheck(index) } type="checkbox"/>
                                </td>
                                <td>
                                    <label className={ item.isCompleted && "strikethrough" }>{ item.itemText }</label>
                                </td>
                                <td>
                                    <button onClick={ (event) => handleDelete(event, index) } className='btn'>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </form>
    );
};

export default Items;