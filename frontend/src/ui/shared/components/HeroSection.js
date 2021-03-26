import React from "react";


export const HeroSection = () => {
    return (
        <>
            <section className="hero-image min-h-screen">
                <div className="overlay">
                    <h1 className="text-6xl px-6">
                        <span className="text-indigo-300">Passionate</span> fullstack web developer.
                    </h1>
                    <p className="text-indigo-200 text-3xl flex flex-row gap-1">
                        <span className="text-yellow-500">Always </span>
                        <span className="text-white">learning.</span>
                        <span className="text-yellow-500">Always </span>
                        <span className="text-white">growing.</span>
                    </p>
                    <div className="flex">
                        <a href="#about" className="btn btn-indigo shadow-lg">Learn more about Kyle</a>
                    </div>
                </div>
            </section>

        </>
    );
};