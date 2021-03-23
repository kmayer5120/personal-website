import React from "react";
import { FaGithub, FaLinkedin, GiPapers } from "react-icons/all";

export const Navbar = ({ fixed }) => {
    const linkClasses = "px-2 py-2 flex items-center text-3xl uppercase font-bold leading-snug text-white hover:opacity-75";
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-0">
                <div className="container px-4 flex items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                            href="/"
                        >
                            Kyle Mayer
                        </a>
                    </div>
                    <div>
                        <ul className="grid grid-flow-col list-none">
                            <li>
                                <a
                                    className={linkClasses}
                                    href="https://github.com/kmayer5120"
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    className={linkClasses}
                                    href="https://linkedin.com/in/kyle-mayer-fullstack"
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className={linkClasses}
                                >
                                    <GiPapers />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
