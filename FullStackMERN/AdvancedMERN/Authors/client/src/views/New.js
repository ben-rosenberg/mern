import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";

const New = (props) => {
    const [ validationErrors, setValidationErrors ] = useState({})

    const navigate = useNavigate();

    const handleSubmitCreate = (name) => {
        axios.post('http://localhost:8000/api/authors', { name: name })
            .then((res) => {
                setValidationErrors({});
                navigate('/', { replace: true });
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const tempErrorsObj = {};

                for (let key in errorResponse) {
                    tempErrorsObj[errorResponse[key].path] = errorResponse[key];
                }

                setValidationErrors(tempErrorsObj);
            })
    }

    return (
        <div className="flex_col gap_1">
            <Link to='/'>Home</Link>
            <h2 className="text_center">Add An Author</h2>
            <Form handleFormSubmit={ handleSubmitCreate } validationErrors={ validationErrors }/>
        </div>
    );
}

export default New;