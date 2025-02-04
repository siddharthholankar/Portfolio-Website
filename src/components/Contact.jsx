import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      return "All fields are required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Siddharth Holankar",
      message: formData.subject + ":" + formData.message,
    };
    toast.loading("Sending message...");

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        toast.dismiss();
        toast.success("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        toast.dismiss();
        toast.error("Failed to send message. Please try again later.");
      }
    );
  };

  return (
    <div id="contact" className="bg-neutral-900 py-20">
      <Toaster position="top-right" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-cyan-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8">
                Have a project in mind? Let&apos;s discuss how we can work
                together to create something amazing.
              </p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="mailto:sholanka@asu.edu"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sholankar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/siddharthholankar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>

          </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-400"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-lg text-white focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
