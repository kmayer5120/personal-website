import React from "react";
import { Technologies } from "../../shared/components/Technologies";
import { AboutMe } from "../../shared/components/AboutMe";
import { CurrentWork } from "../../shared/components/CurrentWork";
import { HeroSection } from "../../shared/components/HeroSection";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <section
          id="about"
          className="bg-gray-800 pb-10 h-full min-h-screen mb-auto"
        >
          <div className="flex align-items justify-center">
            <div className="flex flex-col">
              <div className="container mx-auto lg:flex align-items justify-content-center">
                <AboutMe className="flex-grow" />
                <CurrentWork className="flex-grow" />
                <Technologies className="flex-grow" />
              </div>
            </div>
          </div>
          <div className="flex align-items justify-center py-10">
            <Link to="/blog" className="btn btn-primary text-xl">
              Go To Blog
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
