import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";

const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const buttonRef = useRef();
    const widthRef = useRef(false);
    const handleClick = () => {
        console.log(inputRef);
        console.log(buttonRef);
    };
    const handleClickWith = () => {
        if (widthRef.current === false) {
            inputRef.current.style.width = "150px";
            console.log("width : ", inputRef.current.clientWidth);
            widthRef.current = true;
        } else {
            inputRef.current.style.width = "100%";
            console.log("width : ", inputRef.current.clientWidth);

            widthRef.current = false;
        }
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            />
            <button
                ref={buttonRef}
                className="btn btn-primary"
                onClick={handleClick}
            >
                Кнопка
            </button>
            <button className="btn btn-primary" onClick={handleClickWith}>
                Изменить ширину input
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
