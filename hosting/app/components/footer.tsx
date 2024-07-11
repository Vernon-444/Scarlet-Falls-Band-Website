/**
 * footer.tsx
 *
 * Footer component for the website.
 * Contains social media links and contact information.
 *
 */

// import fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// import icons from fontawesome: facebook, instagram, twitter, youtube, and spotify
import { faFacebook, faInstagram, faSpotify } from "@fortawesome/free-brands-svg-icons";


export const Footer = () => {
  return (
    <footer className="bg-raisin-black text-ghost-white p-5 text-sm">
        <div className="flex justify-center text-3xl md:text-xl">
            <p className="text-right text-ghost-white pr-2">Find us here:</p>
            <a href="https://open.spotify.com/artist/6RizRYXwMC9CzZ2i5QUuQW?si=AQX9oW-NSGO-MxFV1pGcMA" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faSpotify} style={{ color: '#1DB954' }} className="px-3" />
            </a>
            <a href="https://www.instagram.com/scarletfallsband?igsh=MWpvNGkyemF4dG92Mw==" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ color: '#E4405F' }} className="px-3" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100080623967381&mibextid=ZbWKwL" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} style={{ color: '#1877F2' }} className="px-3" />
            </a>
        </div>
    </footer>
    );
}
