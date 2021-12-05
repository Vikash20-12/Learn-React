import React, { useState } from 'react'

export default function TextForm(props) {

    const handleUpperClick = () => {
        // console.log("button clicked " + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowerClick = () => {
        // console.log("button clicked " + text);
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
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
                <button className="btn btn-primary mx-2" onClick={handleUpperClick} >Convert to Uppercase</button>
                <button className="btn btn-secondary mx-2" onClick={handleLowerClick} >Convert to Lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Text Summary</h2>
                <p className="my-2">{text.split(" ").length} words and {text.length} characters.</p>
                <p>Average time to read this is {0.008 * text.split(" ").length} minutes.</p>
            </div>
            <div className="container">
                <h2 className="my-3">Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
