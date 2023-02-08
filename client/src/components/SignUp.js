import React, { useState } from "react";

const SignUp = (props) => {    
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        <div>
            <h1>Register</h1>
            <form>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
            </form>
        </div>
    );
}

export default SignUp;