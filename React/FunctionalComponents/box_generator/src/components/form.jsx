import { useState } from "react";
import '../Style.css';

const Form = (props) => {
    const [ colorInputValue, setColorInputValue ] = useState("");
    const [ widthInputValue, setWidthInputValue ] = useState("");
    const [ heightInputValue, setHeightInputValue ] = useState("");

    const handleChange = (event) => {
        switch (event.target.id) {
            case 'color_text':
                setColorInputValue(event.target.value);
                break;
            case 'width':
                setWidthInputValue(event.target.value);
                break;
            case 'height':
                setHeightInputValue(event.target.value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const styleObject = {
            backgroundColor: colorInputValue,
            width: widthInputValue + 'px',
            height: heightInputValue + 'px'
        };
        props.onStyleSubmit(styleObject);
        setColorInputValue("");
        setWidthInputValue("");
        setHeightInputValue("");
    };

    return (
        <form onSubmit={ handleSubmit }>
            <div className="flex_col gap_1">
                <div className="flex_row margin_auto gap_1">
                    <label htmlFor="color_text">Color:</label>
                    <input onChange={ (event) => handleChange(event) } type="text" id="color_text" value={ colorInputValue }/>
                    {/* <input onChange={ (event) => setCurrentColor(event.target.value) } type="color" id="color_picker"/> */}
                </div>
                <div className="flex_row margin_auto gap_1">
                    <label htmlFor="width">Width:</label>
                    <input onChange={ (event) => handleChange(event) } type="number" id="width" value={ widthInputValue }/>
                    <label htmlFor="height">Height:</label>
                    <input onChange={ (event) => handleChange(event) } type="number" id="height" value={ heightInputValue }/>
                </div>
                <input type="submit" value="Create Box"/>
            </div>
        </form>
    );
}

export default Form;