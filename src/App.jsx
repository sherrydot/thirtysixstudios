import './index.css'
import Canvas from './Canvas'
import data from './data'


function App() {
  return (
    <div className="w-full">
      <div className="w-full min-h-screen">
        {data[0].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <div className="w-full min-h-screen">
        {data[1].map((canvasdets, index) => (
          <Canvas key={index} details={canvasdets} />
        ))}
      </div>
      <p>njkbkk</p>
    </div>
  );
}

export default App;
