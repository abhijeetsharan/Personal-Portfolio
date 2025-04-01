import { MdArrowOutward } from "react-icons/md"
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaGithub } from "react-icons/fa"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section className="pt-20 px-4" id="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-3xl font-bold lg:text-4xl">
        <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActiveProject(project.id)}
            onMouseLeave={() => setActiveProject(null)}
            onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
            key={project.id} 
            className="group relative h-[300px] overflow-hidden rounded-xl shadow-lg shadow-black/20 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
          >
            <img
              src={project.image} 
              alt={project.name} 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80" />
            
            <div className="absolute bottom-0 left-0 p-4 text-white">
              <h3 className="mb-1 text-xl font-semibold">{project.name}</h3>
              <p className="text-sm text-gray-300 line-clamp-2">{project.description}</p>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: activeProject === project.id ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-6 text-white backdrop-blur-sm"
            >
              <h3 className="mb-3 text-xl font-bold text-blue-400">{project.name}</h3>
              <p className="mb-6 text-center text-sm">{project.description}</p>
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2 text-sm font-medium text-white transition-all hover:opacity-90"
              >
                <FaGithub className="text-lg" />
                <span>View on Github</span>
                <MdArrowOutward />
              </a>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects
