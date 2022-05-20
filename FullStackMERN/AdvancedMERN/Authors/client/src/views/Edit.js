import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import Form from "../components/Form";

const Edit = (props) => {
    const [ author, setAuthor ] = useState({});
    const [ isLoaded, setIsLoaded ] = useState(false);
    const [ validationErrors, setValidationErrors ] = useState({});
    const { authorId } = useParams();

    const navigate = useNavigate();
    
    const handleSubmitUpdate = (newName) => {
        axios.put(`http://localhost:8000/api/authors/${authorId}`, { name: newName })
            .then(res => {
                setValidationErrors({});
                navigate('/', { replace: true });
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                setValidationErrors({ name: errorResponse.name });
            })
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${authorId}`)
            .then(res => {
                setAuthor(res.data.author);
                setIsLoaded(true);
            })
            .catch(err => console.log(err));
    }, [ authorId ])

    return (
        <div className="flex_col gap_1">
            <Link to='/'>Home</Link>
            {
                isLoaded
                ?
                <div>
                    <h2 className="text_center">Edit author: { author.name }</h2>
                    <Form
                        handleFormSubmit={ handleSubmitUpdate }
                        currentAuthorValue={ author }
                        validationErrors={ validationErrors }
                    />
                </div>
                :
                <h2 className="text_center">Loading...</h2>
            }
        </div>
    );
}

export default Edit;