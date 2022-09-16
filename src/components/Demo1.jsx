import React, { useState } from 'react'
import './Demo1.css'
import { motion, useAnimation } from 'framer-motion'

const Demo1 = () => {
  const [isanimating, setisanimating] = useState(false)
  const boxDemo = {
    lion: {
      x: 100,
      scale: 1.5
    },
    elephant: {
      x: 1000,
      scale: 1.5
    }
  }
  const control = useAnimation()
  return (
    <div className='demo'>
      <motion.div className="box1"
        initial={{
          opacity: 0.2
        }}
        animate={{
          x: isanimating ? 1000 : 0,
          opacity: isanimating ? 1 : 0.2,
          backgroundColor: isanimating ? 'red' : 'blue',
          rotate: isanimating ? 360 : 0
        }}
        transition={{
          type: "tween",
          duration: 2
        }}
        onClick={() => setisanimating(!isanimating)}
      >1</motion.div>
      <motion.div className="box2"
        whileHover={{
          scale: 1.2
        }}
        whileTap={{
          scale: 0.9
        }}
        drag
        dragConstraints={{
          right: 20,
          left: -5,
          top: 20,
          bottom: 50
        }}
      >2</motion.div>
      <motion.div className="box3"
        variants={boxDemo}
        animate="elephant"
      >3</motion.div>
      <motion.div className="box4"
        animate={{
          scale: [1, 1.5, 1.8, 1.4, 1.1, 1],
          borderRadius: ["20%", "30%", "50%", "35%", "25%", "20%"],
          backgroundColor: ["yellow"],
          rotate: [0, 50, 270, 180, 90, 0]
        }}
        transition={{
          duration: 2
        }}
      >4</motion.div>
      <motion.div className="box5"
        animate={control}
      ></motion.div>
      <div className="btn" style={{ disply: "flex" }} >
        <button
          onClick={() => {
            control.start({
              x: 1000,
              transition: {
                duration: 2
              }
            })
          }}
        >move right</button>
        <button
        onClick={()=>{
          control.start({
            x:0,
            transition : {duration:2}
          })
        }}
        >move left</button>
        <button
        onClick={()=>{
          control.start({
            y :50,
            transition : {
              duration : 2
            }
          })
        }}
        >Up</button>
        <button
         onClick={()=>{
          control.start({
            y :-50,
            transition : {
              duration : 2
            }
          })
        }}
        >move bottom</button>
        <button
        onClick={()=>{
          control.stop()
        }}
        >stop</button>
      </div>

    </div>
  )
}

export default Demo1;
