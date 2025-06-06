import React from "react";
import ContactForm from "../components/Contact-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/elsa-mertala-3b236686/",
        color: "#0077b5"
    },
    {
    icon: faGithub,
    url: "https://github.com/Elsalilly",
    color: "#333",
    }
];

const Contact = () => {
    return (
        <div className="py-8">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Contact me</h1>
                <p className="mt-4 text-lg text-gray-600">Let's stay connected.</p>
                <div>
                    {socialLinks.map((item, index) => (
                        <a
                        key={index}
                        href={item.url}
                        target="_blank"
                        style={{color: item.color}}
                        className="mr-2 px-2 py-1 rounded text-xl sm:text-2xl md:text-3xl lg:text-3xl hover:bg-opacity-50"
                        >
                            <FontAwesomeIcon icon={item.icon}/>
                        </a>
                    ))}
                </div>
            </div>
            <ContactForm />
        </div>
    );
}

export default Contact;