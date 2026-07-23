import { useState, useCallback, useEffect,useRef} from 'react'


function App() {
  const [length, setLength] = useState(25);
  const [numbers, setNumbersAllowed] = useState(false);
  const [characters, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const ref=useRef();
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers) str += "123456789";
    if (characters) str += "!@#$%^&*()_{}:?><";
    for (let i = 0; i < length; i++) {
      let c = Math.floor(Math.random() * (str.length));
      pass = pass + str.charAt(c);
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);
  useEffect(() => { passwordGenerator() }, [passwordGenerator])
  return (
    <>
      <h1 style={{ fontFamily: "Brush Script MT" }} className="text-6xl text-white text-center">Password generator</h1>
      <div className="w-full mt-20 flex justify-center "><div className="w-auto flex justify-center flex-col p-10 h-auto rounded-xl bg-slate-600 ">
        <div className="flex"> <input ref={ref} className="bg-white p-2 text-black h-10 rounded" value={password} readOnly type="text" ></input>
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-800 h-10 w-auto p-2 rounded -2xl ml-2 truncate text-white" onClick={()=>{
            window.navigator.clipboard.writeText(ref.current.value);
          }}>Copy</button>
        </div>
        <div>
          <input type="range" className="mt-8" min={10} max={50} onChange={(e) => { setLength(e.target.value) }}></input>
          <label className="text-white font-bold m-7">length is {length}</label>
        </div>
        <div >
          <input type="checkbox" onChange={() => {
            setNumbersAllowed(!numbers);
            
          }} defaultChecked={numbers} className="mt-8" ></input>
          <label for="checkbox " className="text-white mx-8"> allow numbers</label>
        </div>
        <div >
          <input type="checkbox" onChange={() => {
            setCharactersAllowed(!characters);
            
          }} defaultChecked={numbers} className="mt-8" ></input>
          <label for="checkbox " className="text-cyan-600 mx-8"> allow special characters</label>
        </div>
      </div></div>
    </>
  )
}

export default App
