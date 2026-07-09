import React,{useId} from "react"

function Input({ className = "", label = "From" 
,amount=0,onAmountChange,
onCurrencyChange,currencyOptions=[],
selectCurrency="usd",
amountDisable=false,
currencyDisable=false
}) {
let amountId=useId();


    return (
        <div className={`bg-white text-sm p-3 flex rounded-2xl ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountId} className="text-gray-600 mb-2 inline-block">{label}</label>
                <input type="number" id={amountId} placeHolder="Amount"disabled={amountDisable} value={amount}className=" p-1.5 w-full outline-none bg-transparent rounded" onChange={(e)=>{onAmountChange &&onAmountChange(Number(e.target.value))}}></input>

            </div>
            <div className="w-1/2 flex flex-wrap text-right px-2 justify-end">
                <p  className="text-gray-600 w-full">Currency Type</p>
                <select value={selectCurrency} onChange={(e)=>{onCurrencyChange&&onCurrencyChange((e.target.value))}} disabled={currencyDisable} className="text-gray-600 cursor-pointer outline-none p-1 bg-gray-100 rounded-lg mb-2">
                   {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                   ))}
                </select>    
               </div>

        </div>
    )
}

export default Input;
