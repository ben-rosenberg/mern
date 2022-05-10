import { useState } from 'react';
import axios from 'axios';

import Form from './components/Form';
import './style.css';


/**
 * The parent element and main entry point for the application.
 * 
 * @returns generated HTML
 */
function App() {
    const [ pokemons, setPokemons ] = useState([]);
    const [ displayResultsOffset, setDisplayResultsOffset ] = useState("");

    /**
     * Given a numeric string, ensures that the number is between min and max.
     * 
     * @param {String} value The input number to be clamped.
     * @param {Number} min The minimum allowable value.
     * @param {Number} max The maximum allowable value.
     * @returns {String} The input value if between min and max, min if input
     *     less than min, max if input greater than max.
     */
    const clampNumericStr = (value, min, max) => {
        const valueNum = parseInt(value);

        if (valueNum < min) {
            return min.toString();
        }

        if (valueNum > max) {
            return max.toString();
        }

        return value;
    };

    /**
     * Fetches numResults entries from the PokeAPI starting with the entry
     * at resultsOffset. If numResults or resultsOffset isn't submitted, they
     * default to 807 and 0 respectively.
     * 
     * @param {Event} event The form submission event that triggered the call.
     * @param {String} numResults A numeric string that limits the number of results.
     * @param {String} resultsOffset A numeric string that dictates the starting
     *     index of the results.
     */
    const fetchData = (numResults, resultsOffset) => {
        if (!numResults) {
            numResults = "807";
        }

        if (!resultsOffset) {
            resultsOffset = "0";
        }

        numResults = clampNumericStr(numResults, 0, 1126);
        resultsOffset = clampNumericStr(resultsOffset, 0, 1126);

        setDisplayResultsOffset(resultsOffset);

        axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${ resultsOffset }&limit=${ numResults }`)
            .then(response => {
                setPokemons(response.data.results);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <div className="flex_col gap_1">
            <h1 className='text_center'>Welcome! Let's Get Some Pokethings</h1>
            <Form onSubmission={ fetchData }></Form>
            <table>
                <thead>
                    <tr>
                        <th className='text_center'>Number</th>
                        <th className='text_center'>Name</th>
                        <th className='text_center'>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemons.length > 0 && pokemons.map((pokemon, index) => {
                            const capitalizedName = pokemon.name[0].toUpperCase()
                                + pokemon.name.slice(1, pokemon.name.length);
                            const offsetIndex = index + 1 + parseInt(displayResultsOffset);
                            const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ offsetIndex }.png`

                            return (
                                <tr key={ index }>
                                    <td>{ offsetIndex }</td>
                                    <td>
                                        <a href={ pokemon.url }>{ capitalizedName }</a>
                                    </td>
                                    <td>
                                        <a href={ imgUrl }>
                                            <img src={ imgUrl } alt={ `${ capitalizedName } sprite` } />
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default App;
