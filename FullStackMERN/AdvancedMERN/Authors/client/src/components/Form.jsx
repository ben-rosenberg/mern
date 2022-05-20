import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Form = (props) => {
    const [ name, setName ] = useState('');

    /* if (props.hasOwnProperty('currentAuthor')) {
        setName(props.currentAuthor.name);
    } */

    const { currentAuthorValue } = props; 

    useEffect(() => {
        if (currentAuthorValue === undefined) {
            return;
        }

        setName(currentAuthorValue.name);
    }, [ currentAuthorValue ])

    /**
     * 
     * @param {Event} event The event that triggered the call to the handler
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        props.handleFormSubmit(name);
    }

    return (
        <form onSubmit={ (event) => handleSubmit(event) }>
            <div className="flex_col space_around">
                <div className="flex_row width_100">
                    <label>Name</label>
                    <input onChange={ event => setName(event.target.value) } value={ name } />
                    {
                        props.validationErrors.hasOwnProperty('name')
                        && <p className="error">{ props.validationErrors.name.message }</p>
                    }
                </div>
                <div className="flex_row width_100">
                    <button>
                        <Link to='/'>Cancel</Link>
                    </button>
                    <input type='submit' value='Submit'/>
                </div>
            </div>
        </form>
    );
};

export default Form;