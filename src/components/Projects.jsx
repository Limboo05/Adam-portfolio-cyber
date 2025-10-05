import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "News Headline Analyzer",
      description: "Web Application for sentiment analysis using Flask and TensorFlow",
      technologies: ["Python", "TensorFlow", "Scikit-Learn", "Flask", "HTML", "CSS", "Git"],
      github: "https://github.com/Limbo05/Cgpa-Calculator",
      website: "https:/bello-musa.vercel.app/" // Leave empty if no website yet
    },
    {
      title: "AQI Prediction Web Application",
      description: "Web Application for predicting air quality using Machine Learning.",
      technologies: ["Python", "Scikit-Learn", "Flask", "HTML", "CSS", "JavaScript", "Git"],
      github: "https://github.com/Limbo05/Sneaker app",
      website: ""
    }
  ];

  return (
    <section id="projects" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        ls projects/
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700 hover:border-green-500 transition-colors w-full max-w-md"
            >
              <div className="flex justify-between items-start mb-4">
                <VscCode className="text-green-400" size={24} />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-green-400 transition-colors"
                    title="View Source Code"
                  >
                    <FaGithub size={20} />
                  </a>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-mono mb-2">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs md:text-sm bg-gray-800 text-green-400 px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
