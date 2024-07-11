/**
 * navbar.tsx
 *
 * This file contains the navbar component for the website.
 * Navbar contains the bands logo on the left and the band name on the right.
 */

// import Image from nextjs
import Image from "next/image";

// import band logo
import bandLogo from "../assets/logo/basketcase-png-white-long.png";

export const Navbar = () => {
  return (
      <div className="flex items-center justify-between p-4 bg-raisin-black text-ghost-white px-5">
          <div className="flex items-center">
              <div className="logo-container" style={{ maxHeight: '10vh', maxWidth: '150px', height: '5vh' }}> {/* Adjust these values as needed */}
                  <Image
                    src={bandLogo}
                    alt="Scarlet Falls Logo"
                    width={100}
                    height={50}
                    style={{ height: '100%', width: 'auto' }}
                    quality={50}
                  />
              </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl w-full text-left">Scarlet Falls</h1>
            <p className="text-sm w-full text-left px-0">Tulsa, OK</p>
          </div>
      </div>
  );
};
