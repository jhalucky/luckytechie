import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Coca-Cola 3D Landing Page",
    description:
      "A visually stunning Coca-Cola website with 3D rotating cans, dynamic lighting, and smooth scroll transitions.",
    image: "coca-cola-landingpage.png", // Put this image in /public/images/
    link: "https://jhalucky.github.io/coca-cola-landingpage/",
    tags: ["React", "Three.js", "Tailwind", "Framer Motion"],
  },
];

function Projects() {
  return (
    <section className="min-h-screen p-8 bg-white dark:bg-black text-black dark:text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Here are some of my recent works
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm mt-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-red-100 dark:bg-red-800 text-red-600 dark:text-white px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-red-600 hover:underline"
              >
                View Live →
              </a>
              <a
  href="https://github.com/jhalucky/luckytechie"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-4 text-gray-600 dark:text-gray-300 hover:underline"
>
  View Code →
</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

