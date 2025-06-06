import React from "react";
import img from "../assets/logos.avif";
import Motion from "../components/motion-about";
import Typewrite from "../components/typewrite-about";

import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className="bg-white">
{/* Header */}
            <section className="min-h-100 flex items-center justify-center text-center px-6">
                <div>
                    <Typewrite/>
                    <br/>
                    <p className="py-6 text-3xl flex items-center gap-5">
                    Passionate about <Motion/>
                    </p>
                </div>
            </section>
{/* About me */}
            <section className="min-h-60 max-w-2xl px-6 mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                    I'm a front-end developer, and soon UX-designer, focused on building intuitive, scalable interfaces with modern tools.
                    Through my background, I care about accessability and user experience.
                    
                    When I'm not coding, I'm probably swishing around Malmö in my roller skates, read, or learning new tech.
                    <Link to="/contact" className="text-[#d69c9c] px-2 hover:underline">Let's get in touch!</Link>
                </p>
            </section>
{/* Skills */}
            <section className="bg-[#F4F3EE] py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-6">My Skills</h2>
                    <ul className="space-y-6">
                        <li>
                            <h3 className="text-xl font-semibold">Development</h3>
                            <p>Javascript, HTML, CSS, Sass, React, Tailwind</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold">UX Research</h3>
                            <p>User testing, empathy, problem space discovery</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold">UX Design</h3>
                            <p>Prototyping, UI design, UX writing</p>
                        </li>
                        <li>
                            <h3 className="text-xl font-semibold">Project leadership</h3>
                            <p>Management, critical thinking, intercultural communication</p>
                        </li>
                    </ul>
                </div>
            </section>
{/* Tools */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
                    <div className="w-full md:w-1/2 text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-6">My favorite tools</h2>
                        <p>These are the tools I could not code, design or plan without.</p>
                        <br/>
                        <p>However, the digital world is fast-changing and so are the tools. Therefore, I really enjoy working with new tools and growing my skillset</p>
                    </div>
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end">
                        <img
                        src={img}
                        alt="Tools illustrated"
                        className="max-w-[16rem] w-full h-auto"
                        />
                    </div>
                </div>
            </section>
{/* Education / Experience */}
            <section className="py-20 px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-10 text-center">
                                Education
                            </h2>
                            <div className="p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold mb-1">
                                    UX designer
                                </h4>
                                <p className="italic mb-2">Hyper Island, 2025-</p>

                                <h4 className="text-xl font-semibold mb-1">
                                    Front-end developer
                                </h4>
                                <p className="italic mb-2">Sundsgården folkhögskola, 2025</p>

                                <h4 className="text-xl font-semibold mb-1">
                                    Master in Applied Cultural Analysis
                                </h4>
                                <p className="italic mb-2">Lund University, 2020-2022</p>
                                <br/>
                            </div>
                       </div>
                       <div>
                            <h2 className="text-3xl font-bold mb-10 text-center">
                                Experience
                            </h2>
                            <div className="p-6 rounded-lg shadow-md">
                                <h4 className="text-xl font-semibold mb-1">
                                    Project assistant
                                </h4>
                                <p className="italic mb-2">Lund University, 2025-</p>
                                <h4 className="text-xl font-semibold mb-1">
                                    Children's rights coordinator
                                </h4>
                                <p className="italic mb-2">Malmö Stad, 2023-2024</p>
                                <h4 className="text-xl font-semibold mb-1">
                                    Project assistant
                                </h4>
                                <p className="italic mb-2">Arki-lab, 2021</p>
                                <Link to="/work" className="text-[#d69c9c] font-semibold hover:underline">Check my other projects here!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
