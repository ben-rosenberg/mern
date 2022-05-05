const PersonCard = (props) => {
    const { firstName, lastName, age, hairColor } = props;

    return (
        <fieldset>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </fieldset>
    );
};

export default PersonCard;