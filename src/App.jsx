import './index.css'
import Canvas from './Canvas'
import data from './data'

function App() {
  return (
    <>
      <div className='relative w-full min-h-screen bg-black text-white'>
        {/* data is an array of arrays, each array is a row of canvases */}
        {data.map((item, index) => (
          <div key={index}>
            {item.map((canvasdets, index) => (
              <Canvas key={index} details={canvasdets} />
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App