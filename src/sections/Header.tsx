"use client";
import { useState } from "react";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(""); // For success or failure messages

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/prassu18/google_sheets/iNEgSWNIOELypPAG?tabId=Sheet1",
        {
          method: "POST",
          body: JSON.stringify([[formData.name, formData.email, formData.phone, formData.message]]),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        setSubmissionStatus("Form submitted successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setIsFormOpen(false); // Close the form modal
      } else {
        setSubmissionStatus("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("An error occurred. Please try again.");
    }

    // Automatically clear the message after 3 seconds
    setTimeout(() => setSubmissionStatus(""), 3000);
  };

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container flex items-center justify-between">
          <Image src={Logo} alt="Saas logo" height={40} width={40} />
          <div className="md:hidden">
            <MenuIcon
              className="h-6 w-6 cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <a href="#about">About</a>
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#why-us">Why Us?</a>
            <a href="#help">Help</a>
            <a href="mailto:info@nyxspectra.com"><button className="btn btn-primary">Let's Connect</button></a>

          </nav>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg z-10">
          <nav className="flex flex-col gap-4 p-4 text-black/60">
            <a href="#about" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </a>
            <a href="#benefits" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </a>
            <a href="#why-us" onClick={() => setIsMenuOpen(false)}>
              Why Us?
            </a>
            <a href="#help" onClick={() => setIsMenuOpen(false)}>
              Help
            </a>
            <button
              onClick={() => {
                setIsFormOpen(true);
                setIsMenuOpen(false);
              }}
              className="bg-black text-white px-4 py-2 rounded-lg font-medium"
            >
              Schedule a Demo Today
            </button>
          </nav>
        </div>
      )}

      {/* Modal Form */}
      {isFormOpen && (
        <div className=" inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Schedule a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="btn btn-secondary px-6 py-2"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary px-6 py-2">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success or Failure Message */}
      {submissionStatus && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-2 rounded-lg shadow-lg">
          {submissionStatus}
        </div>
      )}
    </header>
  );
};
