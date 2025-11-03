import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

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

    // Get EmailJS credentials from environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if credentials are configured
    if (!serviceId || !templateId || !publicKey) {
      // Fallback to mailto if EmailJS not configured
      const mailtoLink = `mailto:siddharthholankar08@gmail.com?subject=${encodeURIComponent(
        formData.subject
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoLink;
      toast.success("Opening your email client...");
      
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 1000);
      return;
    }

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      to_name: "Siddharth Holankar",
      message: `Subject: ${formData.subject}\n\n${formData.message}`,
    };

    toast.loading("Sending message...");

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        toast.dismiss();
        toast.success("Your message has been sent successfully! 🎉");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      },
      (error) => {
        toast.dismiss();
        console.error("EmailJS Error:", error);
        
        // Fallback to mailto on error
        toast.error("EmailJS failed. Opening your email client instead...");
        const mailtoLink = `mailto:siddharthholankar08@gmail.com?subject=${encodeURIComponent(
          formData.subject
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        setTimeout(() => {
          window.location.href = mailtoLink;
        }, 1500);
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
          <div className="w-20 h-1 bg-cyan-500 mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">
            Open to new opportunities and collaborations in financial analysis
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Direct Contact Information */}
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
              <p className="text-gray-400 mb-8">
                Interested in discussing financial analysis opportunities, collaboration, 
                or have questions? Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:siddharthholankar08@gmail.com"
                className="flex items-center space-x-4 p-4 bg-neutral-800 border border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <FaEnvelope size={24} className="text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white font-semibold">siddharthholankar08@gmail.com</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+16232652034"
                className="flex items-center space-x-4 p-4 bg-neutral-800 border border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <svg
                    className="w-6 h-6 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white font-semibold">+1 (623) 265-2034</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/siddharthhol/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-neutral-800 border border-cyan-500/30 rounded-lg hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
              >
                <div className="bg-cyan-500/20 p-3 rounded-lg group-hover:bg-cyan-500/30 transition-colors">
                  <FaLinkedin size={24} className="text-cyan-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="text-white font-semibold">linkedin.com/in/siddharthhol</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center space-x-4 p-4 bg-neutral-800 border border-cyan-500/30 rounded-lg">
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <svg
                    className="w-6 h-6 text-cyan-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white font-semibold">Arizona, USA</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <p className="text-gray-400 text-sm mb-4">Follow me on:</p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/siddharthholankar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 border border-cyan-500/30 p-3 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <FaGithub size={24} className="text-cyan-500" />
                </a>
                <a
                  href="https://linkedin.com/in/siddharthhol/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 border border-cyan-500/30 p-3 rounded-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
                >
                  <FaLinkedin size={24} className="text-cyan-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form - Alternative Method */}
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

            {/* Alternative Email Button */}
            <div className="text-center">
              <p className="text-gray-400 text-sm mb-3">Or email me directly:</p>
              <a
                href="mailto:siddharthholankar08@gmail.com?subject=Inquiry from Portfolio Website"
                className="inline-flex items-center space-x-2 bg-neutral-800 border border-cyan-500/30 text-cyan-400 px-6 py-3 rounded-lg font-medium hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-300"
              >
                <FaEnvelope />
                <span>Open Email Client</span>
              </a>
            </div>
          </form>
        </div>

        {/* Quick Actions */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://drive.google.com/file/d/1hRssQrhvvfjdmq6efz7YwgYIxj-qPmcH/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-cyan-500 text-white px-8 py-3 rounded-full font-medium hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Download Resume</span>
            </a>
            <a
              href="https://linkedin.com/in/siddharthhol/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-neutral-800 border border-cyan-500 text-cyan-400 px-8 py-3 rounded-full font-medium hover:bg-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              <FaLinkedin />
              <span>Connect on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
