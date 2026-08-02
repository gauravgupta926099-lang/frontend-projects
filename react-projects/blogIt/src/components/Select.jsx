import React,{useid} from "react"

function Select({
    label,
    className="",
    options,
    ...props
},ref){
const id=useid()
return(<div className="w-full">
   { label&&(<label className="" htmlFor={id}></label>)}
   <select id={id} ref={ref} {...props} className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}>
    {options?.map((option)=>{
        return(<option key={option}>{option}</option>)
    })}
        
   </select>
</div>)

}
