import { useEffect, useRef, useState } from "react"
import canvasimages from "./canvasimages"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

function Canvas() {
  const [index, setIndex] = useState({value:0})
  const canvasRef = useRef(null)

  useGSAP(()=>{
    gsap.to(index, {
      value: 149,
      duration: 3,
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
    <canvas id='canvas' ref={canvasRef} className='w-[18rem] h-[18rem]'>

    </canvas>
  )
}

export default Canvas
