/* eslint-disable react/jsx-key */
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme";
import { UserContext } from "../../contexts/user";

export const AuthorizationButton = ({ logIn, logOut }) => {
    const backgroundColor = useContext(ThemeContext);
    const userContecst = useContext(UserContext);

    return (
        <div>
            {!userContecst ? (
                <div>
                    <span style={{ display: 'inlineBlock', marginRight: '5px' }} >{userContecst}</span>
                    <button style={{ backgroundColor }} onClick={() => logIn()}>Log In</button>
                </div>
            ) : (
                <div>
                    <span style={{ display: 'inlineBlock', marginRight: '5px' }} >{userContecst}</span>
                    <button style={{ backgroundColor }} onClick={() => logOut()}>Log Out</button>
                </div>
            )}
        </div>
    )
};
