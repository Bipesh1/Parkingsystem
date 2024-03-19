import React from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <div className=" bg-gray-950">
      <div className="container mx-auto px-10 py-10 flex gap-10 flex-wrap">
        <div className="footer-logo w-2/5 text-sm flex flex-col gap-y-5">
          <img src="./images/logo-img.png" width={100} alt="" />
          <p className="text-white">
            <span className=" text-blue-400 leading-loose">Unlock Convenience</span>: Seamlessly Reserve, Effortlessly Pay, and Stay
            Informed with Our Smart Parking Solutions.
          </p>
        </div>
        <div className="footer-navigation text-blue-400 flex flex-col gap-y-5 text-sm">
          <h2 className=" font-semibold text-white">Discover</h2>
          <Link href={""} className="hover:scale-105 transition-all">
            Your Dashboard
          </Link>
          <Link href={""} className="hover:scale-105 transition-all">
            About Us
          </Link>
          <Link href={""} className="hover:scale-105 transition-all">
            Contact
          </Link>
        </div>
        <div className="help text-sm text-blue-400 flex flex-col gap-y-5">
          <h2 className="text-white font-semibold">Help</h2>
          <Link href={""} className="hover:scale-105 transition-all">
            Privacy Policy
          </Link>
          <Link href={""} className="hover:scale-105 transition-all">
            Terms and Conditions
          </Link>
          <Link href={""} className="hover:scale-105 transition-all">
            Partners
          </Link>
        </div>
        <div className="social-media text-sm text-blue-400 flex flex-col gap-y-5">
          <h2 className="text-white font-semibold">Follow Us</h2>
          <div className="social-media-icons flex text-lg gap-x-5">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaWhatsapp />
          </div>
        </div>
      </div>
    </div>
  );
}
