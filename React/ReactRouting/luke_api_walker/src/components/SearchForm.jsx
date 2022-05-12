import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

const SearchForm = (props) => {
    const [ searchType, setSearchType ] = useState("people");
    const [ searchId, setSearchId ] = useState("1");

    const navigate = useNavigate();

    /**
     * Prevent default and redirect to the requested route.
     * 
     * @param {Event} event The event that triggered the call to handleSubmit
     */
    const handleSubmit = (event) => {
        event.preventDefault();

        navigate(`${searchType}/${searchId}`);
    }

    return (
        <form onSubmit={ (event) => handleSubmit(event) }>
            <div className="flex_col gap_1">
                <div className='flex_row gap_1 align_center'>
                    <label className='width_20'>Search For:</label>
                    <select
                        onChange={ (event) => setSearchType(event.target.value) }
                        value={ searchType }
                        className="width_80"
                    >
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                    </select>
                </div>
                <div className='flex_row gap_1 align_center'>
                    <label className='width_20'>ID:</label>
                    <input
                        type="number"
                        onChange={ (event) => setSearchId(event.target.value) }
                        value={ searchId }
                        className='width_80'
                    />
                </div>
                <input type="submit" value="Search"/>
            </div>
        </form>
    );
};

export default SearchForm;