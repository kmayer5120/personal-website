import React from "react";
import { Header } from "./Header";
import rsiLogo from "../../img/rsi-logo.png";
import "../../../index.scss";

export const CurrentWork = () => (
  <>
    <div className="container glass-blur rounded-xl shadow-md mt-10 md:mx-5 md:max-w-md">
      <Header label="Current Work" />
      <div className="ml-2 my-5 card__body rounded border-yellow-500">
        <div className="md:grid grid-cols-1 align-items justify-items-center">
          <img
            src={rsiLogo}
            alt="RSI Logo"
            id="img-rsi-logo"
            className="rounded max-w-xs mx-auto shadow-md bg-white p-3 mt-5"
          />
          <div className="px-20 flex-row mt-10">
            <p className="max-w-prose text-indigo-100 text-lg pt-3">
              I am currently working as an associate consultant for{" "}
              <a
                href="https://www.ruralsourcing.com"
                className="text-indigo-400 hover:text-indigo-300 transition duration-300 ease-in-out  flex-none"
                target="_blank"
                rel="noreferrer"
              >
                Rural Sourcing Inc.
              </a>{" "}
              I work in the web practice which is mainly frontend development.
              My work consists of integrating with client teams to build
              websites.
            </p>

            <p className="max-w-prose text-indigo-100 text-lg pt-3">
              I love working for RSI because I get the chance to constantly
              learn new things. The company culture is incredible and
              supportive! So far I've had the chance to work with a great
              client: Discovery Education. I feel that I've grown so much since
              starting at RSI. There isn't a better place I could have chosen to
              start my career in this field.
            </p>

            <p className="text-indigo-200 text-center text-6xl font-bold">
              ...
            </p>
            <p className="text-2xl font-bold text-indigo-100 mt-10">
              Some of the technologies I use in daily work:
            </p>
            <ul className="max-w-prose text-indigo-100 text-2xl mt-5 pb-5">
              <li className="ml-5">Gatsby</li>
              <li className="ml-5">React</li>
              <li className="ml-5">Redux</li>
              <li className="ml-5">Vue</li>
              <li className="ml-5">SCSS</li>
              <li className="ml-5">Pantheon</li>
            </ul>
            <a
              href="https://toyotakeystoconnect.com/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition duration-300 ease-in-out flex-none text-2xl max-w-md mx-auto"
            >
              Here is an example of my most recent work for a client for a
              partner program with Toyota.
            </a>
          </div>
        </div>
      </div>
    </div>
  </>
);
