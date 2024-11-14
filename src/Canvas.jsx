import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from "react"
import canvasimages from "./canvasimages"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"


function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;

  const [index, setIndex] = useState({value: startIndex })
  const canvasRef = useRef(null)

  useGSAP(()=>{
    gsap.to(index, {
      value: startIndex + numImages -1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) })
      }
    })
  })

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d')
    
    const img = new Image()
    img.src = canvasimages[index.value]
    
    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
    }
  }, [index])


  return (
    <canvas 
      id='canvas' 
      ref={canvasRef} 
      className='absolute'
      style={{
        width: `${size}px`,
        height: `${size}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`
      }}
    >
    </canvas>
  )
}

Canvas.propTypes = {
  details: PropTypes.shape({
    startIndex: PropTypes.number.isRequired
  }).isRequired
}

export default Canvas
