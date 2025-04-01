import { SKILLS } from "../constants";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4 },
  },
};

const Skills = () => {
  if (!SKILLS || SKILLS.length === 0) {
    return <div>Loading skills...</div>;
  }

  return (
    <section className="container mx-auto px-4" id="skills">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 mt-20 text-center text-4xl font-semibold"
      >
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Skills
        </span>
      </motion.h2>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-6 shadow-xl backdrop-blur-sm"
      >
        {SKILLS.map((skill, index) => (
          <motion.div
            variants={itemVariants}
            whileHover={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            key={index}
            className={`flex items-center justify-between rounded-lg p-4 transition-colors ${
              index !== SKILLS.length - 1 ? "mb-3 border-b border-stone-50/20" : ""
            }`}
            aria-label={`Skill: ${skill.name}`}
          >
            <div className="flex items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20">
                {skill.icon}
              </div>
              <h3 className="px-6 text-lg font-medium text-white lg:text-xl">{skill.name}</h3>
            </div>
            <div className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-4 py-1 text-sm font-medium text-gray-200 lg:text-base">
              {skill.experience}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
