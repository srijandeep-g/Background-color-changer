import { useState } from 'react';

function App() {
  const [color, setColor] = useState("black");
  const changeColor = (e) => { 
    const color2 = e.currentTarget.style.backgroundColor;
    setColor(color2);
  }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white">
          <div className="flex flex-wrap justify-center gap-3 bg-white p-2 rounded-full">
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#FF0000" }} onClick={changeColor}>Red</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#FFFF00" }} onClick={changeColor}>Yellow</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#0000FF" }} onClick={changeColor}>Blue</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#FF7F00" }} onClick={changeColor}>Orange</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#00FF00" }} onClick={changeColor}>Green</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#FF00FF" }} onClick={changeColor}>Magenta</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#00FFFF" }} onClick={changeColor}>Cyan</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#007FFF" }} onClick={changeColor}>Azure</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#FF007F" }} onClick={changeColor}>Rose</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#7F00FF" }} onClick={changeColor}>Violet</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#7FFF00" }} onClick={changeColor}>Chartreuse</button>
            <button className="outline-none rounded-full text-black p-3" style={{ backgroundColor: "#00FF7F" }} onClick={changeColor}>Spring Green</button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
