import axios from "axios";
import { Link } from "react-router-dom";

import '../style.css';

/**
 * 
 * 
 * @param {Object} props The static properties object passed from a parent view
 * @returns {JSX.Element} A table containing one or all authors
 */
const AuthorsTable = (props) => {
    /**
     * Deletes an author.
     * 
     * @param {Number} authorId The unique identifier of the author being deleted
     */
    const onDelete = (authorId) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
            .then((res) => {
                props.handleDelete(true);
            })
            .catch((err) => console.error(err));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                props.dbAuthors.map((author, index) => {
                    return (
                        <tr key={ index }>
                            <td>{ author.name }</td>
                            <td>
                                <div className="flex_row space_around align_center">
                                    <button className="btn action">
                                        <Link to={ `/authors/${ author._id.toString() }/edit` }>Edit</Link>
                                    </button>
                                    <button className="btn action" onClick={ () => onDelete(author._id) }>Delete</button>
                                </div>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
    );
};

export default AuthorsTable;