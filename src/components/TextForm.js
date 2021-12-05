import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpperClick = ()=>{
        // console.log("button clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange = (event) =>{
        // console.log("on change");
        setText(event.target.value);

    }

    const [text, setText] = useState("Enter text here.");
    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myText" rows="8"></textarea>
            </div>
            <button className="btn btn-primary"  onClick = {handleUpperClick} >Convert to uppercase</button>
        </div>
        <div className="container">
            
        </div>
        </>
    )
}
