import { Typewriter } from 'react-simple-typewriter';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
   <section className="min-h-screen bg-white dark:bg-neutral-900 flex flex-col items-center justify-center gap-8 px-6 md:px-0">

      {/* Typing animation */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100">
          <Typewriter
            words={["Hi, I'm Lucky Jha"]}
            typeSpeed={70}
            delaySpeed={500}
            cursor={false}
          />
        </h1>

        <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300">
          <Typewriter
            words={["A passionate full-stack developer crafting clean and elegant web experiences."]}
            typeSpeed={50}
            delaySpeed={1000}
            cursor={false}
          />
        </p>
      </div>

      {/* Navigation links */}
      <nav className="flex flex-col items-center gap-6 mt-10">
        {[
          { to: '/about', label: 'About Me' },
          { to: '/projects', label: 'Projects' },
          { to: '/contact', label: 'Contact' },
          { to: '/resume', label: 'Resume' },
          { to: '/social', label: 'Social' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="inline-block text-2xl md:text-3xl font-mono text-neutral-700 dark:text-neutral-300 transition-all duration-300 transform hover:scale-110 hover:text-neutral-900 dark:hover:text-white"
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Theme toggle icon
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div> */}
    </section>
  );
};

export default Hero;








