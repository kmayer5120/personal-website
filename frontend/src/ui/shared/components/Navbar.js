import React from "react";
import { FaGithub, FaLinkedin, GiPapers } from "react-icons/all";
import "../../../index.css"

export const Navbar = () => {
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 mb-0">
                <div className="container px-4 flex items-center justify-between">
                    <div className="w-full">
                        <a
                            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
                            href="/"
                        >
                            Kyle Mayer
                        </a>
                    </div>
                    <div>
                        <ul className="grid grid-flow-col gap-1 list-none">
                            <li>
                                <a
                                    href="https://github.com/kmayer5120"
                                    className={"nav-links"}
                                >
                                    <FaGithub />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com/in/kyle-mayer-fullstack"
                                    className={"nav-links"}
                                >
                                    <FaLinkedin />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className={"nav-links"}
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
