import React from "react";
import logo from "@/assets/logo/footer-logo.png";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black/80 border-t-[1px] border-t-gray-1/30 font-industry text-gray-1">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between  py-10 h-[300px] items-center flex-col md:flex-row">
          <div
            id="about"
            className="w-full md:w-2/3 gap-3 flex flex-col md:items-start items-center"
          >
            <Image src={logo} alt="logo" className="w-[60px] h-[60px]" />
            <p className="text-justify px-10 md:text-left md:px-0">
              Golden Arc Pvt Ltd is a leading name in the beverage industry,
              dedicated to providing premium hydration solutions for
              health-conscious consumers. Our product range includes
              high-quality electrolyte drinks and pure bottled water, designed
              to keep you refreshed and energized throughout the day. We combine
              advanced purification processes with scientifically balanced
              electrolytes to deliver beverages that support active lifestyles
              and optimal wellness. At Golden Arc, we prioritize sustainability,
              innovation, and customer satisfaction, ensuring every bottle meets
              the highest standards of quality and safety. Whether you’re an
              athlete, a professional, or simply someone who values healthy
              hydration, Golden Arc Pvt Ltd is your trusted partner for superior
              drinking solutions.
            </p>
          </div>
          <div
            id="contact"
            className="flex flex-col items-center mt-10 md:items-start md:mt-0 "
          >
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
