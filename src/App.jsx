import './index.css'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect, useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



function App() {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingref = useRef(null);
  const growingSpan = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  useEffect(() => {
    const handleClick = (e) => {
      setShowCanvas((prevShowCanvas) => {
        if (!prevShowCanvas) {
          gsap.set(growingSpan.current, {
            top: e.clientY,
            left: e.clientX,
          });

          gsap.to("body", {
            color: "#000",
            backgroundColor: "#fd2c2a",
            duration: 1.2,
            ease: "power2.inOut",
          });

          gsap.to(growingSpan.current, {
            scale: 1000,
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
              gsap.set(growingSpan.current, {
                scale: 0,
                clearProps: "all",
              });
            },
          });
        } else {
          gsap.to("body", {
            color: "#fff",
            backgroundColor: "#000",
            duration: 1.2,
            ease: "power2.inOut",
          });
        }

        return !prevShowCanvas;
      });
    };

    const headingElement = headingref.current;
    headingElement.addEventListener("click", handleClick);

    // Clean up event listener on unmount
    return () => headingElement.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    const moveCursor = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <span ref={growingSpan} className='growing block fixed rounded-full top-[-20px] left-[-20px] w-5 h-5'></span>
      <div className="w-full relative min-h-screen">
        {showCanvas && 
        data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
        <div className='w-full relative z-[1] h-screen '>
          <nav className="top-0 left-0 w-full flex justify-between items-center px-20 py-4 z-50">
            <div className="text-2xl font-bold">
              thirtysixstudios.
            </div>
            <ul className="flex gap-8">
              {['Home', 'About', 'Work', 'Contact'].map((link, index) => (
                <li key={index} className="cursor-pointer hover:opacity-70 transition-opacity">
                  {link}
                </li>
              ))}
            </ul>
          </nav>
          <div className="textcontainer px-[20%]">
            <div className='text w-[40%]'>
                <h3 className='text-4xl leading-[1.1]'>
                  At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
                </h3>
                <p className='text-md w-[80%] mt-10 font-normal'>
                  We’re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.
                </p>
                <p className='text-md mt-10 font-normal'>
                  Scroll
                </p>
            </div>
          </div>
          <div className='w-full absolute bottom-0'>
            <h1 
            ref={headingref}
            className='text-[17rem] font-normal pl-5'>
              Thirtysixstudios.
            </h1>
          </div>
        </div>
      </div>
      {/* second section */}
        <div className="w-full relative h-screen  mt-32 px-10">
        {showCanvas &&
          // eslint-disable-next-line react/jsx-key
          data[1].map((canvasdets) => <Canvas details={canvasdets} />)}
        <h1 className="text-4xl tracking-tighter">about the brand</h1>
        <p className="text-xl leading-[1.8] w-[80%] mt-10 font-light">
          we are a team of designers, developers, and strategists who are
          passionate about creating digital experiences that are both beautiful
          and functional, we are a team of designers, developers, and
          strategists who are passionate about creating digital experiences that
          are both beautiful and functional.
        </p>
        <img src="" alt=""/>
      </div>
    </>
  );
}

export default App;
