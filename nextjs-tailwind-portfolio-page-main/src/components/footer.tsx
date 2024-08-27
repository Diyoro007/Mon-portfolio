import { faLinkedin, faSquareGithub, faSquareWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Home", "About Us", "Blog", "Service"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (


    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" className="hover:underline">DIYORO™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
          <FontAwesomeIcon icon={faLinkedin} className="me-4 md:me-6 h-10 w-10 hover:text-[#65636D] cursor-pointer" />
          </li>
          <li>
          <FontAwesomeIcon icon={faSquareGithub} className="me-4 md:me-6 h-10 w-10 hover:text-[#65636D] cursor-pointer" />
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareWhatsapp} className="me-4 md:me-6 h-10 w-10 hover:text-[#65636D] cursor-pointer" />
          </li>
        </ul>
      </div>
    </footer>

  );
}

export default Footer;
