// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Customer Service</h3>
            <ul>
              <li className="mb-2"><a href="/help" className="hover:underline">Help & FAQs</a></li>
              <li className="mb-2"><a href="/returns" className="hover:underline">Returns & Exchanges</a></li>
              <li className="mb-2"><a href="/shipping" className="hover:underline">Shipping Information</a></li>
              <li className="mb-2"><a href="/track-order" className="hover:underline">Track Order</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Information</h3>
            <ul>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
             
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <ul className="flex space-x-4">
              <li>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                  <FaFacebook size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                  <FaInstagram size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                  <FaTwitter size={24} />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-2">Contact Information</h3>
            <p>Email: <a href="mailto:bindneeraj1504@gamil.com" className="hover:underline">bindneeraj1504@gamil.com</a></p>
            <p>Phone: <a href="tel:+123456789" className="hover:underline">+91 8172890782</a></p>
            <p>Address: J 6/91 L, Nehru Market, Rajouri Garden,Delhi,India</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; {new Date().getFullYear()} eCommerce Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
