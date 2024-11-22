import './index.css'
import Canvas from './Canvas'
import data from './data'
import LocomotiveScroll from 'locomotive-scroll';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  }, []);

  return (
    <>
      <div className="w-full relative min-h-screen">
        {/* {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))} */}
        <div className='w-full h-screen text-white'>
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
            <h1 className='text-[17rem] font-normal tracking-tight text-white pl-5'>
              Thirtysixstudios.
            </h1>
          </div>
        </div>
      </div>
      <div className='w-full h-screen mt-32'>
        <h1>
          What is thirtysixstudios.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nihil, hic repudiandae quam aspernatur aut saepe dolor dolores, corrupti nam, architecto delectus placeat blanditiis eius eum numquam magnam in illo minus adipisci quia reiciendis perferendis. Molestiae, dolores iusto architecto ea veniam blanditiis, consequatur tempora, officiis iste voluptatem exercitationem quae sint molestias! Nulla maxime, ex laudantium tempora excepturi, enim praesentium explicabo a illum ad eaque aliquid sed alias qui magni impedit. Sunt, fugit, optio debitis recusandae ipsa corporis velit porro totam maxime labore consequuntur accusamus quaerat, officia et suscipit possimus explicabo neque numquam? Nobis dignissimos iure impedit, et distinctio voluptas debitis?
        </p>
      </div>
    </>
  );
}

export default App;
