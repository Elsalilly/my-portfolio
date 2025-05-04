import React from "react";
import "../styles/contact.css";
import ContactForm from "../components/Contact-form";

const Contact = () => {
    return (
        <div className="py-8">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Wanna reach out, send me a message</h1>
                <p className="mt-4 text-lg text-gray-600">I would love to hear from you!</p>
            </div>
            <ContactForm />
        </div>
    );
}

export default Contact;