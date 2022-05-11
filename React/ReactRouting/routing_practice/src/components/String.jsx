import { useParams } from "react-router-dom";

const String = (props) => {
    const { string } = useParams();

    return (
        <h2>
        {
            isNaN(string)
            ? `The word is ${ string }`
            : `The number is ${ string }`
        }    
        </h2>
    );
};

export default String;