import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";
export const withLogin = (Component) => (props) => {
    localStorage.setItem("aut", "No Never");
    const isLogin = localStorage.getItem("aut");
    return (
        <>
            {isLogin ? <Component name={isLogin} /> : <SmallTitle>Auth</SmallTitle>}
        </>
    );
};
