import React, {useState} from 'react';

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formBtn, setFormBtn] = useState("");

const handleNameChange = (e) => setName(e.target.value);
const handleEmailChange = (e) => setEmail(e.target.value);
const handleMessageChange = (e) => setMessage(e.target.value);
const handleBtnChange = (e) => setFormBtn(e.target.value);

const handleSubmit = (e) => {
    e.preventDefault();

if (!name || !email || !message) {
    alert('All fields are required');
    return;
}
  /*  if (!/\S+@S+/.test(email)){
        alert('Please enter a valid email');
        return;
    }*/
    //Clear form after submission
    setName("");
    setEmail("");
    setMessage("");
    setFormSubmitted(true);
};

return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md mt-6">
        {formSubmitted ? (
            <div className="text-center">
                <h2 className="text-xl font-bold text-black">Thank you for your message!</h2>
                <p>I will reach back to you shortly.</p>
            </div>
        ) : (
            <form onSubmit={handleSubmit}>
                <div className="mb-4 mt-6">
                    <label htmlFor="name" className="block text-gray-700">Full Name *</label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={name}
                    onChange={handleNameChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d69c9c] invalid:text-rose-400 hover:bg-stone-50"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700">Email *</label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email"
                    value={email}
                    onChange={handleEmailChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d69c9c] invalid:text-rose-400 hover:bg-stone-50"
                    required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700">Message *</label>
                    <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Your message"
                    value={message}
                    onChange={handleMessageChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#d69c9c] invalid:text-rose-400 hover:bg-stone-50"
                    required
                    />
                </div>
                <div className="mb-4 text-center">
                    <button
                    type="sumbit"
                    className="px-6 py-3 bg-[#d69c9c] text-white font-semibold rounded-lg shadow-md hover:bg-white hover:border-[#d69c9c] border-2 border-[#d69c9c] hover:border-2 hover:text-[#d69c9c] focus:outline-none focus-ring-2 focus:ring-[#d8d7d0] focus-ring-opacity-50"
                    onChange={handleBtnChange}
                    >
                        Submit
                    </button>
                </div>
            </form>
        )}
    </div>
);
};
export default ContactForm;