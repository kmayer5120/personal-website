import React from "react";
import { FaBars, FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = ({ fixed }) => {
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-0">
                <div className="container px-4 flex items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                            href="#pablo"
                        >
                            Kyle Mayer
                        </a>
                        <FaBars />
                    </div>
                    <div>
                        <ul className="grid grid-flow-col list-none">
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="https://github.com/kmayer5120"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    className="px-3 py-2 flex items-center text-xl uppercase font-bold leading-snug text-white hover:opacity-75"
                                    href="https://linkedin.com/in/kyle-mayer-fullstack"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
