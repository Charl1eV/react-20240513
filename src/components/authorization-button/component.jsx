/* eslint-disable react/jsx-key */
import { Button } from "../button/component";
import { useUser } from "../../contexts/user/hooks"
import { useCallback, useState } from "react";
import { Modal } from "../modal/component";
import { AuthorizationForm } from "../authorization-form/component";

export const AuthorizationButton = () => {
    const { user, logOut, logIn } = useUser();
    const [isVisible, seyIsVisible] = useState(false);

    const handleClose = useCallback(() => seyIsVisible(false), []);
    const handleLogin = useCallback((name) => {
        logIn(name);
        handleClose();
    }, [logIn]);

    return (
        <div>
            <span>{user}</span>
            {user ? <Button onClick={() => logOut()}>Log Out</Button> : <Button onClick={() => seyIsVisible(true)}>Log In</Button>}
            {isVisible && <Modal onClose={handleClose}><AuthorizationForm onLogin={handleLogin} onCancel={handleClose} /></Modal>}
        </div>
    )
};
