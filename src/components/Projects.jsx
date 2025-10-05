import { motion } from "framer-motion";
import { VscCode } from "react-icons/vsc";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    
  {
    title: "Web Application Threat Detector",
    description: "A web app that analyses HTTP requests and detects potential web vulnerabilities such as SQL injection, XSS, and CSRF attacks",
    technologies: ["Python", "Flask", "OWASP ZAP", "JavaScript", "HTML", "CSS", "Git"],
    github: "https://github.com/Limboo05/web-app-threat-detector",
    website: ""
  },
  {
    title: "Network Intrusion Monitoring Dashboard",
    description: "Dashboard for monitoring network traffic and flagging suspicious activity using packet capture and anomaly detection",
    technologies: ["Python", "Scapy", "Pandas", "Flask", "HTML", "CSS", "Git"],
    github: "https://github.com/Limboo05/network-intrusion-dashboard",
    website: ""
  }
];
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
