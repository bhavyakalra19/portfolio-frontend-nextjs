import React from 'react'
import { easeInOut, motion } from 'framer-motion'

const TransitionEffect = () => {
  return (
    <>
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 dark:bg-primaryDark bg-primary' 
        initial = {{x: "100%", width: "100%"}}
        animate = {{x:"0%", width:"0%"}}
        transition={{duration: 0.8, ease: easeInOut}}
        exit={{ opacity: 0 }}
        />
        <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-light' 
        initial = {{x: "100%", width: "100%"}}
        animate = {{x: "0%", width:"0%"}}
        transition={{delay: 0.2, duration: 0.8, ease: easeInOut}}
        exit={{ opacity: 0 }}
        />

        <motion.div className='fixed bottom-full w-screen h-screen z-30 dark:bg-primaryDark bg-primary' 
        initial = {{y: "100%", height: "100%"}}
        animate = {{y:"0%", height:"0%"}}
        transition={{ duration: 0.8, ease: easeInOut}}
        exit={{ opacity: 0 }}
        />
        <motion.div className='fixed bottom-full w-screen h-screen z-10 bg-dark dark:bg-light' 
        initial = {{y: "100%", height: "100%"}}
        animate = {{y:"0%", height:"0%"}}
        transition={{delay: 0.2, duration: 0.8, ease: easeInOut}}
        exit={{ opacity: 0 }}
        />
    </>
  )
}

export default TransitionEffect
