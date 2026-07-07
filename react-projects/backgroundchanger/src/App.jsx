import { useState } from 'react'
import './App.css'
import Button from './button'
function App() {

    let [backgroundColor, setColor] = useState("black");
    return (<div className="h-dvh bg-black w-dvw" style={{ backgroundColor }}>
        <div className="w-dvw flex items-center rounded-xl justify-around p-2 bg-white">
            <Button color="red" onClick={() => setColor("red")} />
            <Button color="blue" onClick={() => setColor("blue")} />
            <Button color="green" onClick={() => setColor("green")} />
            <Button color="yellow" onClick={() => setColor("yellow")} />
            <Button color="pink" onClick={() => setColor("pink")} />
            <Button color="orange" onClick={() => setColor("orange")} />
            <Button color="cyan" onClick={() => setColor("cyan")} />
            <Button color="black" onClick={()=>setColor("black")}/>
        </div>
    </div>
    )
}

export default App
