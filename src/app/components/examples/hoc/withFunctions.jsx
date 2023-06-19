import React, { useRef, useState } from "react";

import SimpleComponent from "./simpleComponent";

export const withFunctions = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth");
    const [name, setName] = useState("Войти");

    const refAuth = useRef();

    const onLogin = () => {
        localStorage.setItem("auth", "Never");
        setName("Выйти из системы");
        console.log(refAuth);
        console.log(isAuth);
    };
    const onLoginOut = () => {
        localStorage.removeItem("auth");
        setName("Войти");
        console.log(refAuth);
        console.log(isAuth);
    };
    return (
        <>
            <SimpleComponent
                onLogin={onLogin}
                onLoginOut={onLoginOut}
                isAuth={isAuth}
                refAuth={refAuth}
                name={name}
            />
        </>
    );
};
