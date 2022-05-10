import { useState } from "react";

const Form = (props) => {
    const [ numResults, setNumResults ] = useState("");
    const [ resultsOffset, setResultsOffset ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        props.onSubmission(numResults, resultsOffset);
        props.updateDisplayResultsOffset(resultsOffset);

        setNumResults("");
        setResultsOffset("");
    };

    return (
        <form onSubmit={ (event) => handleSubmit(event) }>
            <div className="flex_col gap_1">
                <div className='flex_row gap_1 align_center'>
                    <label className='width_20'>Number of Results:</label>
                    <input
                        type="number"
                        onChange={ (event) => setNumResults(event.target.value) }
                        value={ numResults }
                        className='width_80'
                    />
                </div>
                <div className='flex_row gap_1 align_center'>
                    <label className='width_20'>Results Offset:</label>
                    <input
                        type="number"
                        onChange={ (event) => setResultsOffset(event.target.value, 0, 1126) }
                        value={ resultsOffset }
                        className='width_80'
                    />
                </div>
                <button>Get Pokemon</button>
            </div>
        </form>
    );
};

export default Form;