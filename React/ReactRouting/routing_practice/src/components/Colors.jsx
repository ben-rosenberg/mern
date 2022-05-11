import { useParams } from "react-router-dom";

const Colors = (props) => {
    const { string, textColor, bgColor } = useParams();

    return (
        <h2 style={ { color: textColor, backgroundColor: bgColor } }>
        {
            isNaN(string)
            ? `The word is ${ string }`
            : `The number is ${ string }`
        }
        </h2>
    );
};

export default Colors;