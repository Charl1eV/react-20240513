/* eslint-disable react/jsx-key */
import { Button } from "../button/component";
import { useState } from "react";

export const AuthorizationForm = ({ onLogin, onCancel }) => {
   const [name, setName] = useState('');


    return (
        <div>
            <input value={name} onChange={(event) => setName(event.target.value)} />
            <Button onClick={onCancel}>Cancel</Button>
            <Button onClick={() => { onLogin(name); setName("");}}>Log In</Button>
        </div>
    )
};
