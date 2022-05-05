import { useState } from "react";


const Form = (props) => {
    const [ firstName, setFirstName ] = useState("");
    const [ lastName, setLastName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <input onChange={ (event) => setFirstName(event.target.value)} type="text" id="first_name"/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <input onChange={ (event) => setLastName(event.target.value)} type="text" id="last_name"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input onChange={ (event) => setEmail(event.target.value)} type="text" id="email"/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input onChange={ (event) => setPassword(event.target.value)} type="text" id="password"/>
                </div>
                <div>
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input onChange={ (event) => setConfirmPassword(event.target.value)} type="text" id="confirm_password"/>
                </div>
            </form>
            <div>
                <h3>Your Info:</h3>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </div>
    );
};

export default Form;