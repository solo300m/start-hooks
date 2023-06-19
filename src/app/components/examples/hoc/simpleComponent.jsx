import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLoginOut, isAuth, refAuth, name }) => {
    return (
        <div className="container m-3 w-75 shadow">
            <div className="m-2 w-50">
                {isAuth !== null ? (
                    <button
                        className="btn btn-primary m-2"
                        ref={refAuth}
                        onClick={onLoginOut}
                    >
                        {name}
                    </button>
                ) : (
                    <button
                        className="btn btn-primary m-2"
                        ref={refAuth}
                        onClick={onLogin}
                    >
                        {name}
                    </button>
                )}
            </div>
        </div>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLoginOut: PropTypes.func,
    isAuth: PropTypes.bool,
    refAuth: PropTypes.useRef,
    name: PropTypes.string
};
export default SimpleComponent;
