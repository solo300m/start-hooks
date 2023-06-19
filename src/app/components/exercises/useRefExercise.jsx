import React, { useRef, useState } from "react";
import CollapseWrapper from "../common/collapse";
const UseRefExercise = () => {
    const [text, setText] = useState("Блок текста на русском языке");
    const [buttonText, setButtonText] = useState("Блок");
    const block = useRef();
    const gabarit = {
        width: "240px",
        height: "20px"
    };

    const widthRef = useRef(false);
    const hundleButton = () => {
        if (widthRef.current) {
            setText("Block of text in English");
            setButtonText("Блок");
            block.current.style.width = "80px";
            block.current.style.height = "150px";
            widthRef.current = false;
        } else {
            setText("Блок текста на русском языке");
            setButtonText("Text");
            widthRef.current = true;
            block.current.style.width = gabarit.width;
            block.current.style.height = gabarit.height;
        }
    };
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <p className="mt-3" ref={block}>
                {text}
            </p>
            <ul>
                <li>Изменится содержимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <button
                className=" btn btn-primary d-flex flex-row justify-content-center align-items-center rounded"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
                onClick={hundleButton}
            >
                {buttonText}
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
