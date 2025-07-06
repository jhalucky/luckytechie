import React from "react";

const Social = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <h1 className="text-3xl font-bold mb-6">Connect With Me</h1>
      <p className="mb-8 text-center max-w-md">
        I'm active on the following platforms. Feel free to reach out!
      </p>

      <div className="flex flex-col gap-4 text-lg">
        <a
          href="https://github.com/jhalucky"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500 transition duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/theluckyjha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500 transition duration-200"
        >
          LinkedIn
        </a>
         <a
          href="https://instagram.com/Theluckyjha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500 transition duration-200"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com/Theluckyjha"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline hover:text-blue-500 transition duration-200"
        >
          Twitter
        </a>
        <a
          href="mailto:jhalucky61@gmal.com"
          className="hover:underline hover:text-blue-500 transition duration-200"
        >
          Email Me
        </a>
      </div>
    </div>
  );
};

export default Social;
