import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="p-6 bg-transparent">
      <h2 className="text-3xl font-mono font-bold text-center mb-6 text-green-400">
        cat about.py
      </h2>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <motion.img
            src="./limbo.png"
            alt="Adam Sadiq "
            className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-green-500 flex-shrink-0 object-cover"
            whileHover={{ scale: 1.1 }}
          />
          <div className="bg-gray-900 p-4 md:p-6 rounded-lg border border-gray-700 w-full">
            <p className="text-sm md:text-lg leading-relaxed font-mono overflow-x-auto whitespace-pre">
              <span className="text-purple-400">class</span>{" "}
              <span className="text-yellow-400">Ethical Hacker</span>:<br />
              &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-400">
                def
              </span>{" "}
              <span className="text-green-400">__init__</span>(self):
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.name ={" "}
              <span className="text-orange-400">"Adam Sadiq Ismail"</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.role ={" "}
              <span className="text-orange-400">
                "Cyber-Security Specialist"
              </span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.languages = [
              <span className="text-orange-400">"Python"</span>,{" "}
              <span className="text-orange-400">"C++"</span>,{" "}
              <span className="text-orange-400">"SQL"</span>,{" "}
              <span className="text-orange-400">"Javascript"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.libraries =
              [<span className="text-orange-400">"Pytorch"</span>,{" "}
              <span className="text-orange-400">"Tensorflow"</span>,{" "}
              <span className="text-orange-400">"Flask"</span>,{" "}
              <span className="text-orange-400">"Scikit-Learn"</span>,{" "}
              <span className="text-orange-400">"Numpy"</span>,{" "}
              <span className="text-orange-400">"Pandas"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.tools =
              [<span className="text-orange-400">"MySQL"</span>,{" "}
              <span className="text-orange-400">"MongoDB"</span>,{" "}
              <span className="text-orange-400">"Git"</span>,{" "}
              <span className="text-orange-400">"GitHub"</span>,{" "}
              <span className="text-orange-400">"Docker"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.interests = [
              <span className="text-orange-400">"DevOps"</span>,{" "}
              <span className="text-orange-400">"Machine Learning"</span>]<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.status ={" "}
              <span className="text-orange-400">"Always learning"</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
