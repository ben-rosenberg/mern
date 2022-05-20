import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import AuthorsTable from "../components/AuthorsTable";

const Main = (props) => {
    const [ allDbAuthors, setAllDbAuthors ] = useState([]);
    const [ authorDeleted, setAuthorDeleted ] = useState(false);

    /* const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/authors/${authorId}`)
            .then(res => setAuthorDeleted(!authorDeleted))
            .catch(err => console.log(err));
    } */

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAllDbAuthors(res.data.authors))
            .catch(err => console.log(err));
    }, [ authorDeleted ]);

    return (
        <div className="flex_col gap_1">
            <h3>
                <Link to='/authors/new'>Add An Author</Link>
            </h3>
            <AuthorsTable dbAuthors={ allDbAuthors } handleDelete={ setAuthorDeleted }/>
        </div>
    );
}

export default Main;