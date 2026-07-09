import { useState } from 'react'
import backgroundImage from './assets/backgroundImage.png'
import './App.css'
import InputBox from "./components/InputBox"
import useCurrencyInfo from "./hooks/useCurrencyInfo.js"

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);
  const swap = () => {
    let temp = from;
    setFrom(to);
    setTo(temp);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  } 
  return (
    <div className="w-full h-screen flex flex-wrap bg-cover bg-no-repeat justify-center items-center p-6" style={{ backgroundImage: `url(${backgroundImage})` }}>
     <div className="w-full max-w-md mx-auto border border-gray-200 rounded-lg p-5 backdrop-blur-xs bg-white/40">
     <form onSubmit={(e)=>{e.preventDefault()}}>
      <div className="w-full mb-1">
        <InputBox label="From" amount={amount} onAmountChange={setAmount} selectCurrency={from} amountDisable={false} currencyDisable={false} onCurrencyChange={setFrom} currencyOptions={options}/>

      </div>
      <div className="relative w-full h-0.5">
        <button className="absolute left-1/2 -translate-1/2 border-2 border-black bg-blue-900 rounded text-white  px-2 py-0.5" onClick={()=>{swap()}}>Swap</button>
      </div>
      <div className="w-full mt-1 mb-4 ">
        <InputBox label="To" amount={convertedAmount} onAmountChange={()=>{ setConvertedAmount()}} selectCurrency={to} amountDisable={true} currencyDisable={false} onCurrencyChange={setTo} currencyOptions={options}/>
      </div>
      <div>
        <button type="submit" className="w-full bg-blue-950 text-white rounded-2xl px-4 py-3 "onClick={()=>{convert()}} >Convert</button>
      </div>
     </form>
     </div>
    </div>
  )
}

export default App
