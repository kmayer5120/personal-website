import React from "react";
import { Technologies } from "../shared/components/Technologies";
import { AboutMe } from "../shared/components/AboutMe";
import { HeroSection } from "../shared/components/HeroSection";

export const Home = () => {
    return (
        <>
            <div>
                <HeroSection />
                <section id="about" className="bg-gray-800 pb-10 h-full min-h-screen mb-auto">
                    <div className="flex align-items justify-center">
                        <div className="flex flex-col">
                            <div className="container mx-auto md:flex align-items justify-content-center">
                                <AboutMe className="flex-grow" />
                                <Technologies className="flex-grow" />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};
