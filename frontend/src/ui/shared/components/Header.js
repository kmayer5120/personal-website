import React from "react";

export const Header = ({ label }) => {
    return (
        <>
            <h1 className="m-4 text-3xl text-white">{label}</h1>
            <hr />
        </>
    );
};
