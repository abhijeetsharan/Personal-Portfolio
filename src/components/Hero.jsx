import { HERO } from "../constants"
import Abhijeet from "../assets/Abhijeet.jpg"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from "react-icons/fa6"
import { useRef } from 'react'
import ShinyText from '../libs/ShinyText'

const Hero = () => {
  const descriptionRef = useRef(null);

  return (
    <section className='flex min-h-screen flex-wrap items-center justify-center py-10'>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='w-full md:w-1/2 px-4'>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='my-4 p-2 text-5xl font-bold md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600'>
          {HERO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="p-2 text-3xl tracking-tighter lg:text-4xl font-light">
          {HERO.greet}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-6 p-2 text-xl text-gray-300 max-w-lg"
          ref={descriptionRef}
          style={{ position: 'relative' }}>
          <ShinyText
            text={HERO.description}
            className="custom-class"
            disabled={false}
            speed={3}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex space-x-4 p-2 mb-8">
          <a href="mailto:abhijeetsharan@gmail.com" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:opacity-90 transition-all">
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1ckkIK_z6uM7GPyyj-kPmTZLKQ-09LZXa/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-500 rounded-lg hover:bg-gray-800 transition-all">
            View Resume
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex space-x-5 p-2">
          <a href="https://github.com/abhijeetsharan" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/abhijeetsharan1510" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors"><FaLinkedin /></a>
          <a href="https://x.com/devilabhiiii" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-blue-400 transition-colors"><FaSquareXTwitter /></a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full md:w-1/2 p-4 flex justify-center items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl -z-10 transform rotate-6">
          </motion.div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src={Abhijeet}
            width={450}
            height={450}
            alt="Abhijeet Sharan"
            className="rounded-2xl shadow-2xl object-cover" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero