import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import '../style.css';

const DisplayResource = (props) => {
    const { type, id } = useParams();
    const [ resourceData, setResourceData ] = useState({});
    const { setErrorMessage } = props;

    const navigate = useNavigate();

    /**
     * The attributes for each resource type. accessAttributes are the keys in
     * the data object returned by the API call, while displayAttributes are
     * the formatted versions to display in the results table. 
     */
    const attributes = {
        "people": {
            "accessAttributes": [ "name", "height", "mass", "hair_color", "skin_color" ],
            "displayAttributes": [ "Name", "Height", "Mass", "Hair Color", "Skin Color" ]
        },
        "planets": {
            "accessAttributes": [ "name", "climate", "terrain", "surface_water", "population" ],
            "displayAttributes": [ "Name", "Climate", "Terrain", "Surface Water", "Population" ]
        }
    };

    useEffect(() => {
        if (type !== "people" && type !== "planets") {
            setErrorMessage("ERR_RESOURCE_TYPE")
            navigate("/error", { replace: true });
        }

        axios.get(`https://swapi.dev/api/${type}/${id}`)
            .then((response) => {
                console.log(response.data);
                setResourceData(response.data);
            })
            .catch((err) => {
                console.log(err);
                setErrorMessage(err.code);
                navigate("/error", { replace: true });
            })
    }, [id, type, navigate]);

    return (
        <table>
            <thead>
                <tr>
                {
                    attributes[type].displayAttributes.map((attribute, index) => {
                        return <th key={index}>{ attribute }</th>
                    })
                }
                </tr>
            </thead>
            <tbody>
                <tr>
                {
                    attributes[type].accessAttributes.map((attribute, index) => {
                        return <td key={index}>{ resourceData[attribute] }</td>
                    })
                }
                </tr>
            </tbody>
        </table>
    );
};

export default DisplayResource;