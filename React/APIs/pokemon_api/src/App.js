import { useState } from 'react';

import Form from './components/Form';
import './style.css';

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
     * at resultsOffset. If 
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

        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${ resultsOffset }&limit=${ numResults }`)
            .then(response => {
                return response.json();
            }).then(response => {
                setPokemons(response["results"]);
            }).catch(err => {
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
                    </tr>
                </thead>
                <tbody>
                    {
                        pokemons.length > 0 && pokemons.map((pokemon, index) => {
                            const capitalizedName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1, pokemon.name.length);

                            return (
                                <tr key={ index }>
                                    <td>{ index + 1 + parseInt(displayResultsOffset) }</td>
                                    <td>
                                        <a href={ pokemon.url }>{ capitalizedName }</a>
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
