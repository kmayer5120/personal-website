import React from "react";

export const Resume = () => {
    return (
        <>
            <div className="box-border bg-gray-800 pb-10 h-screen mb-auto lg:grid lg:grid-cols-2">
                <div className="bg-gray-100 pt-5 rounded mt-5 lg:mx-5 mx-20 flex flex-col items-center">
                    <h2 className="text-2xl pt-5">Kyle Mayer</h2>
                    <h3 className="text-l">Albuquerque, NM - Available to work remotely</h3>
                    <h3 className="text-l py-2">
                        Email: kyle@kylemayer.com
                        | Phone: (505) 903-9834
                    </h3>
                    <div className="py-2">
                        <a className="btn btn-indigo mx-1"
                           href="https://www.linkedin.com/in/kyle-mayer-fullstack/">LinkedIn</a>
                        <a className="btn btn-indigo mx-1" href="https://github.com/kmayer5120">GitHub</a>
                    </div>
                    <div className="md:grid md:grid-cols-2 my-2 bg-blue-600 text-white rounded shadow-l p-3">
                        <h3 className="bg-in text-4xl py-5">Skills</h3>
                        <ul>
                            <li>Fullstack Web Development</li>
                            <li>Management</li>
                            <li>Public Speaking</li>
                            <li>Strong oral/written communication</li>
                            <li>Team oriented</li>
                            <li>Goal driven</li>
                        </ul>
                    </div>
                    <div className="md:grid md:grid-cols-2 my-2 mx-10 bg-indigo-600 text-white rounded shadow-l p-3">
                        <h3 className="text-4xl py-5">Projects</h3>
                        <ul>
                            <li className="pb-2 text-l">
                                Developed a mobile responsive website for my wife’s crochet business with
                                HTML/CSS/JavaScript and Bootstrap.
                            </li>
                            <li className="pb-2">
                                Implemented a fully functional contact form including Google reCAPTCHA validation.
                            </li>
                            <li className="pb-2">
                                Containerized with Docker and Docker Compose.
                            </li>
                            <li className="pb-2">
                                Running Express.js on Node for the backend.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bg-gray-100 rounded mt-5 lg:mx-5 mx-20 flex flex-col items-center">

                    <div className="bg-blue-500 mx-5 text-white rounded shadow-l p-3">
                        <h3 className="text-4xl pt-5">Experience</h3>
                        <h3 className="text-2xl pt-5">CNM Deep Dive Coding Bootcamp: Fullstack Web Development
                            intern</h3>
                        <ul className="md:grid md:grid-cols-2 gap-5 p-3">
                            <li>
                                Wrote code daily and participated in an Agile environment as a student of a 400 hour,
                                fully remote mobile-first bootcamp focused on MERN stack.
                            </li>
                            <li>
                                Fully remote collaboration on projects using Git and GitHub.
                            </li>
                            <li>
                                Developed fullstack web applications using HTML/CSS/JavaScript, Bootstrap, React,
                                Redux, Node, Express, and MySQL.
                            </li>
                            <li>
                                Developed REST APIs.
                            </li>
                            <li>
                                Connecting to REST APIs, displaying data from those APIs, and maintaining a database
                                of said data.
                            </li>
                            <li>
                                Collaborate on a team to develop solutions using Agile methodologies with Asana,
                                Google Docs, Balsamiq, and Lucid chart.
                            </li>
                            <li>
                                Design UI/UX with wireframing tools (Balsamiq, MockFlow, and Figma.)
                                Strategic data design of ERDs using Lucid chart and create conceptual models based on
                                those ERDs.
                            </li>
                            <li>
                                Deploying fullstack web applications using Docker containerization.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};