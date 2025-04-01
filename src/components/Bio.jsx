import { BIO } from "../constants"
import { motion } from "framer-motion"
import { FaUserAlt } from "react-icons/fa"

const Bio = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 pt-20" id="bio">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 p-8 shadow-xl backdrop-blur-sm"
      >
        <motion.div 
          initial={{ opacity: 0, y: -20}}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-8 flex items-center justify-center gap-3"
        >
          <FaUserAlt className="text-blue-400 text-2xl" />
          <h2 className="text-center text-3xl font-bold lg:text-4xl">
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {BIO.map((bio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-6"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <p className="text-lg leading-relaxed text-gray-200 lg:text-xl">
                {bio}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Bio
