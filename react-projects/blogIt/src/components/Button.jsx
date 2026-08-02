import React from "react"
export default function({
    children,
    type="button",
    bgColor="bg-blue-600",
    testColor="text-white",
    className="",
    ...props
}){
return(<input type={type} className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</input>)
}