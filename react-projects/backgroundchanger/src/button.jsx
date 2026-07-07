import React from 'react'

function Button({ color = "black", onClick }) {

    let p = `rounded-xl text-black pl-4 pr-4 flex items-center justify-center `;
    return (<button className={p} onClick={onClick} style={{ backgroundColor: color }}>{color}</button>)
}
export default Button;