import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { FaGithub } from "react-icons/fa";
import { RiLinkedinBoxFill } from "react-icons/ri";
import Notification from "./Notification";

const Contact = () => {
  const form = useRef();
  const [notification, setNotification] = useState({ show: false, message: '' });

  const showNotification = (message) => {
    setNotification({ show: true, message });
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        console.log('Email sent successfully');
        form.current.reset();
        showNotification('Message executed successfully! ✨');
      }, (error) => {
        console.log('Failed to send email:', error);
        showNotification('Command failed. Please try again. 🚫');
      });
  };

  return (
    <section id="contact" className="p-6 bg-transparent">
      <Notification 
        message={notification.message}
        isVisible={notification.show}
        onClose={() => setNotification({ show: false, message: '' })}
      />
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ./contact --send
      </h2>
      <form 
        ref={form}
        onSubmit={handleSubmit} 
        className="max-w-md mx-auto bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Name"
          required
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-green-500 focus:outline-none"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email"
          required
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-green-500 focus:outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-2 mb-4 bg-gray-800 border border-gray-700 rounded-md text-white focus:border-green-500 focus:outline-none"
          rows={4}
        />
        <button 
          type="submit"
          className="w-full bg-green-500 text-black p-2 rounded-md font-mono hover:bg-green-400 transition-colors"
        >
          Execute
        </button>
      </form>
      <div className="flex justify-center mt-6 md:mt-8 gap-6">
        <a
          href="https://github.com/Limbo05"
          target="_blank"
          className="text-gray-400 hover:text-green-400 transition-colors"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/adam-sadiq"
          target="_blank"
          className="text-gray-400 hover:text-green-400 transition-colors"
        >
          <RiLinkedinBoxFill size={26} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
