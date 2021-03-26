import React from "react";


export const HeroSection = () => {
    return (
        <>
            <section className="hero-image min-h-screen">
                <div className="overlay">
                    <h1 className="lg:text-8xl md:text-6xl sm:text-5xl text-3xl px-6">
                        <span className="text-indigo-300">Passionate</span> fullstack web developer.
                    </h1>
                    <div className="text-indigo-200 lg:text-5xl md:text-3xl sm:text-2xl text-xl flex flex-row gap-1">
                        <span className="text-yellow-500 pl-4">Always </span>
                        <span className="text-white">learning.</span>
                        <span className="text-yellow-500">Always </span>
                        <span className="text-white pr-4">growing.</span>
                    </div>
                    <div className="flex">
                        <a href="#about" className="btn btn-indigo shadow-lg">Learn more about Kyle</a>
                    </div>
                </div>
            </section>

        </>
    );
};