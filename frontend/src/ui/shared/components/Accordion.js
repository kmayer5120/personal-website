import React, { useRef, useState } from "react";
import "../components/css/components.css";

export const Accordion = ({ children }) => {
    const [active, setActive] = useState("");
    const [height, setHeight] = useState("0px");
    const [rotate, setRotate] = useState("accordion-icon");
    const content = useRef(null);

    const toggleAccordion = () => {
        setActive(active === "" ? "active" : "");
        setHeight(active === "active" ? "0px" : `${content.current.scrollHeight}px`);
        setRotate(active === "active" ? "accordion-icon rotate-reset" : "accordion-icon rotate");
    };


    return (
        <div className="flex flex-col">
            <button className={`rounded accordion ${active}`} onClick={toggleAccordion}>
                <h3 className="accordion-title">Learn More</h3>
                <div className={`${rotate}`}>
                    <svg
                        className="text-white w-6 h-6"
                        viewBox="0 0 266 438"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z"
                        />
                    </svg>
                </div>
            </button>
            <div className="accordion-content" ref={content} style={{maxHeight: `${height}`}}>
                {children}
            </div>
        </div>
    );
}
