import React from 'react'
import { useState } from 'react'
export default function Componente() {

const[text, setText] = useState()
const[updated, setUpdated] = useState()
const textOnChange = (event) =>    {
        setText(event.target.value)
    }
const buttonOnClick = () => {
    setUpdated(text)
}
    return (
        <div>
            <input type="text" value ={text} onChange={textOnChange}/>
            <button onClick={buttonOnClick}>Search</button>
            <p>texto  input: {text}</p>
            <p>texto actualizado{updated}</p>

        </div>
    )
}
