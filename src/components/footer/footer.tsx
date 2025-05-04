import React from "react";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t-[1px] border-t-gray-1/30 font-industry text-gray-1">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between  py-10 h-[300px] items-center">
          <div className="w-1/3 gap-3 flex flex-col items-start">
            <Image src={logo} alt="logo" className="w-[50px] h-[50px]" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              modi ex aliquid! Quia cupiditate earum minima dignissimos quaerat,
              atque sapiente voluptate expedita non, voluptas magnam possimus
              eum recusandae. Provident laborum quia vel, sequi consequuntur
            </p>
          </div>
          <div>
            <p className="py-2">CONTACT US</p>
            <p className="flex items-center gap-3 py-2">
              <Phone /> +880 123 456 7890
            </p>
            <p className="flex items-center gap-3 py-2">
              <Mail /> john@doe.com
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-6">
            <p className=" text-gray-1/50 ">
              &copy; 2024 Electorade. All rights reserved.
            </p>
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie setting</p>
          </div>
          <div className="flex gap-6 py-5 items-center">
            <p>Google Security</p>
            <p>
              <FaLinkedin />
            </p>
            <p>
              <FaXTwitter />
            </p>
            <p>
              <FaYoutube />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
