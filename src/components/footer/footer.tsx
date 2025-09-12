import React from "react";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
// import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t-[1px] border-t-gray-1/30 font-industry text-gray-1">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between  py-10 h-[300px] items-center flex-col md:flex-row">
          <div className="w-full md:w-1/3 gap-3 flex flex-col md:items-start items-center">
            <Image src={logo} alt="logo" className="w-[50px] h-[50px]" />
            <p className="text-justify px-10 md:text-left md:px-0">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
              modi ex aliquid! Quia cupiditate earum minima dignissimos quaerat,
              atque sapiente voluptate expedita non, voluptas magnam possimus
              eum recusandae. Provident laborum quia vel, sequi consequuntur
            </p>
          </div>
          <div className="flex flex-col items-center mt-10 md:items-start md:mt-0 ">
            <p className="py-2">CONTACT US</p>
            <p className="flex items-center gap-3 py-2">
              <Phone /> +8801722311309
            </p>
            <p className="flex items-center gap-3 py-2">
              <Mail /> Info@electorade.com
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-36 md:mt-0">
          <div className="flex flex-col md:flex-row gap-6 text-center">
            <p className="text-gray-1/50">
              &copy; 2024 Electorade. All rights reserved.
            </p>
            <div className="flex flex-row  gap-6">
              <p>Terms of Use</p>
              <p>Privacy Policy</p>
              <p>Cookie setting</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6 py-5 items-center">
            <p>Google Security</p>
            <div className="flex gap-6">
              <p>
                <FaFacebook />
              </p>
              <p>
                <FaInstagram />
              </p>
              <p>
                <FaLinkedin />
              </p>
              <p>
                <FaYoutube />
              </p>
              <p>
                <FaXTwitter />
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
