import React, {useRef, useState} from "react";

import "./styles.css";
import {Chevron} from "../Chevron";

export function Accordion({title, content}) {

    const [setActive, setActiveState] = useState("");
    const [setHeight, setHeightState] = useState("0");
    const [setRotate, setRotateState] = useState("accordion__icon");


    const contentRef = useRef(null);

    function toggleAccordion() {
        setActiveState(setActive === "" ? "active" : "");
        setHeightState(
            setActive === "active" ? "0" : `${contentRef.current.scrollHeight}px`
        );
        setRotateState(
            setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
        );
    }
    return (
        <div className="accordion__section">
            <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
                <p className="accordion__title">{title}</p>
                <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
            </button>
            <div
                ref={contentRef}
                style={{ maxHeight: `${setHeight}` }}
                className="accordion__content"
            >
                <div
                    className="accordion__text"
                    dangerouslySetInnerHTML={{ __html: content }}
                />
            </div>
        </div>
    );
}
