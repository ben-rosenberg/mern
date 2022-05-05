import { useState } from "react";


const Form = () => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    const [isFirstNameValid, setIsFirstNameValid] = useState(true);
    const [isLastNameValid, setIsLastNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(true);

    const validate = (event) => {
        event.preventDefault();

        setIsFirstNameValid(firstName.length >= 2);
        setIsLastNameValid(lastName.length >= 2);
        setIsEmailValid(email.length >= 5);
        setIsPasswordValid(password.length >= 8);
        setIsConfirmPasswordValid(password === confirmPassword);
    };

    return (
        <form onSubmit={ (event) => validate(event) }>
            <div>
                <label htmlFor="first_name">First Name</label>
                <input onChange={ (event) => setFirstName(event.target.value)} type="text" id="first_name"/>
                {
                    !isFirstNameValid
                    ? <span>First name must be at least 2 characters</span>
                    : ""
                }
            </div>
            <div>
                <label htmlFor="last_name">Last Name</label>
                <input onChange={ (event) => setLastName(event.target.value)} type="text" id="last_name"/>
                {
                    !isLastNameValid
                    ? <span>Last name must be at least 2 characters</span>
                    : ""
                }
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={ (event) => setEmail(event.target.value)} type="text" id="email"/>
                {
                    !isEmailValid
                    ? <span>Email must be at least 5 characters</span>
                    : ""
                }
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={ (event) => setPassword(event.target.value)} type="text" id="password"/>
                {
                    !isPasswordValid
                    ? <span>Password must be at least 8 characters</span>
                    : ""
                }
            </div>
            <div>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input onChange={ (event) => setConfirmPassword(event.target.value)} type="text" id="confirm_password"/>
                {
                    !isConfirmPasswordValid
                    ? <span>Password and Confirm Password do not match</span>
                    : ""
                }
            </div>
            <input type="submit"/>
        </form>
    );
};

export default Form;