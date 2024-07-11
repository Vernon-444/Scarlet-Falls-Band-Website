/**
 * body.tsx
 *
 * This file contains the body component for the website.
 */

import Image from 'next/image';

// import band image
import bandImage from "../assets/band-pics/band-pic.jpg";

export const Body = () => {
    return (
        <div className="w-full flex flex-col justify-between items-center min-h-screen relative">
            {/* Set the Image Container height to 60vh */}
            <div className="Image-Container flex-col w-full bg-raisin-black text-ghost-white text-sm" style={{ height: '60vh', overflow: 'hidden' }}>
                {/* Wrap the Image in a div to handle overflow */}
                <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
                    <Image
                        alt="Pic of the band members"
                        src={bandImage}
                        layout="fill"
                        objectFit="cover"
                        sizes="60vh"
                    />
                </div>
            </div>
            {/* Spotify Section */}
            <div className="Spotify-Section w-full bg-madder text-ghost-white p-5 text-3xl" style={{ height: '60vh', overflow: 'hidden' }}>
                <h1>Spotify Stuffs</h1>
                {/* Additional content */}
            </div>
        </div>
    );
}