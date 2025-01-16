import logo from "@/assets/logosaas.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#001E80] to-black text-[#BCBCBC] text-sm py-10">
      <div className="container mx-auto text-center">
        {/* Logo Section */}
        <div className="inline-flex items-center justify-center mb-6 relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo} alt="logo" height={40} className="relative" />
        </div>
        <p className="text-lg text-white font-semibold">
          Revolutionizing Healthcare with AI-as-a-Service
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 mt-6 text-[#BCBCBC]">
          <a href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white transition">
            Terms of Service
          </a>
          <a href="/contact-us" className="hover:text-white transition">
            Contact Us
          </a>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <SocialLinkedin className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <SocialX className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <SocialPin className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <SocialInsta className="h-6 w-6 text-white" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <SocialYoutube className="h-6 w-6 text-white" />
          </a>
        </div>

        {/* Footer Bottom Text */}
        <p className="mt-6 text-[#BCBCBC]">
          &copy; 2024 Nyxspectra All rights reserved.
        </p>
      </div>
    </footer>
  );
};
