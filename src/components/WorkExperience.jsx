import { EXPERIENCES } from "../constants"
import { motion } from "framer-motion"
import { FaBriefcase } from "react-icons/fa"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 },
  },
};

const WorkExperience = () => {
  return (
    <section className="container mx-auto px-4 pt-20" id="work">
      <motion.h2 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mb-10 text-center text-4xl font-semibold"
      >
        <span className="flex items-center justify-center gap-3">
          <FaBriefcase className="text-blue-400 text-2xl" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Work Experience
          </span>
        </span>
      </motion.h2>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl space-y-6 p-4"
      >
        {EXPERIENCES.map((experience, index) => (
          <motion.div 
            variants={itemVariants}
            key={index} 
            className="relative overflow-hidden rounded-xl border border-stone-50/20 bg-gradient-to-br from-gray-900/60 to-gray-800/40 p-6 shadow-lg backdrop-blur-sm"
          >
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-2xl"></div>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-bold text-white">{experience.title}</h3>
              <p className="rounded-full bg-gradient-to-r from-blue-500/20 to-purple-600/20 px-4 py-1 text-sm font-medium text-gray-200">
                {experience.duration}
              </p>
            </div>
            
            <p className="mt-1 text-xl font-medium text-blue-400">{experience.company}</p>
            
            <p className="mt-4 text-base leading-relaxed text-gray-300">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default WorkExperience
