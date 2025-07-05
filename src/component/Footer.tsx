import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative bg-cover bg-center py-16 px-4 text-white"
      style={{ backgroundImage: 'url("/img/overlay-bg.jpg")' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/img/sticker.png"
              alt="Sticker"
              width={300}
              height={300}
              className="rounded shadow-lg"
            />
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h5 className="text-3xl font-semibold mb-4 border-b border-gray-500 inline-block pb-2">
              Get in Touch
            </h5>
            <p className="text-gray-300 mb-6">
              If you&apos;ve gone through any of the above projects or ideas and
              want to connect, feel free to contact me.
              <br />
              <br />
              Please don&apos;t spam.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center gap-3">
                <i className="ion-ios-location text-xl"></i>
                Pittsburgh, PA
              </li>
              <li className="flex items-center gap-3">
                <i className="ion-email text-xl"></i>
                pradnyal.gandhi1997@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
