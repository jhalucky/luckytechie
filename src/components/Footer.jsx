import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-700 text-center py-6 mt-16">
      <div className="flex flex-col items-center gap-4">
        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-mono">
          <Link to="/" className="hover:underline hover:text-blue-600 dark:hover:text-white">Home</Link>
          <Link to="/about" className="hover:underline hover:text-blue-600 dark:hover:text-white">About</Link>
          <Link to="/projects" className="hover:underline hover:text-blue-600 dark:hover:text-white">Projects</Link>
          <Link to="/contact" className="hover:underline hover:text-blue-600 dark:hover:text-white">Contact</Link>
          <Link to="/social" className="hover:underline hover:text-blue-600 dark:hover:text-white">Social</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex gap-6 text-xl">
          <a href="https://github.com/jhalucky" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white">
            <FaGithub />
          </a>
          <a href="https://instagram.com/theluckyjha" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com/in/theluckyjha" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/Theluckyjha" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white">
            <FaTwitter />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-8">
  Made with <span className="text-red-500">❤️</span> by Lucky
</p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400 font-mono">
          &copy; {new Date().getFullYear()} Lucky Jha. All rights reserved.
        </p>
        {/* <p className="text-center text-sm text-neutral-600 dark:text-neutral-400 mt-8">
  Made with <span className="text-red-500">❤️</span> by Lucky
</p> */}

      </div>
    </footer>
  );
};

export default Footer;

