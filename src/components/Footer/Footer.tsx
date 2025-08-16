import React from "react";
import { motion } from "framer-motion";
import logo from "../../assets/images/An-fish.png";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import Map from "../Map/Map";

let tabs = ["Home", "About Us", "Our Products", "Gallery", "Contact"];

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-800 p-5 pb-10 py-8 pt-20 ">
        <div className="flex flex-col md:flex-row font-Mainlux gap-10">
          <div className="flex flex-col md:flex-row  gap-10 md:gap-20 w-full md:w-3/5">
            <div className="flex flex-col gap-3 ">
              <img src={logo} alt="logo" className="w-36 md:w-36" />
              <p className="text-sm text-white-700 pb-2">
                At AN Fish World, we provide premium quality seafood with
                acommitment to freshness and customer satisfaction. Form ocean
                to your plate ony the best.
              </p>
              <div className="flex text-sm item-center text-white-700 gap-2">
                <MapPin className="w-5" />
                <p>Shop No. 12, SeaFood Market, Pune, India.</p>
              </div>
              <div className="flex text-sm text-white-700 gap-2">
                <Phone className="w-5" />
                <p>8329450849</p>
              </div>
              <div className="flex text-sm text-white-700 gap-2">
                <Mail className="w-5" />
                <p>anfishsupport@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 w-full">
              <h2 className="text-lg font-bold ">Quck Links</h2>
              <ul className="flex flex-col gap-1">
                {tabs.map((item) => {
                  return (
                    <>
                      <li>
                        <a href="" className="hover:underline text-white-300">
                          {item}
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
              <div className="flex text-sm text-white-700 gap-2">
                <a href="">
                  <Facebook className="w-5" />
                </a>
                <a href="https://www.instagram.com/an.fishworld?igsh=MW1saXYyZjhndzJ3bg%3D%3D&utm_source=qr ">
                  <Instagram className="w-5" />
                </a>
                <a href="">
                  <Twitter className="w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 w-full md:w-2/3 ">
            <h2 className="text-lg font-bold">Find Us</h2>
            <div>
              <Map />
            </div>
          </div>
        </div>
      </footer>
      <div className="border-t border-white-800 p-3 text-white-300 text-center bg-gray-800">
        <p>© 2025 AN Fish World. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default Footer;
