import React, {useState} from 'react'

export default function Textform(props) {

    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase","success");

    }

    const handleCleartext = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Cleared !!","success");

    }

    const handleRemoveSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success");

    }
    const handleOnChange = (event) => {

        setText(event.target.value);

    }

    const [text, setText] = useState("Enter your text here");
    let n_words = 0;
    let n_char = 0;
    if (text === " "){ 
       n_words = 0;
        //n_char = 0
    }
    else{
        let Words = text.split(/[ ]+/);
        let newtext = Words.join(" ");
        if (text.charAt(text.length-1) === " "){
            Words = newtext.split(" ");
            n_words = (Words.length) - 1;
            n_char = (newtext.length) - 1;

        

        }
         else
         n_words = Words.length;
         n_char = newtext.length;
        
       // n_words = text.split(" ").length;
   }
  
  
    return (
        <>
             <div className='container my-2' style={{color: props.mode ==='dark'?'white':'black'}}>
              
                <div className="mb-3">
                 <label htmlFor="My-Box" className="form-label"><h2>{props.heading}</h2></label>
                 <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}} id="My-Box" rows="8"></textarea>
                </div>
                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary m-1" onClick={handleCleartext}>Clear text</button>
                <button className="btn btn-primary m-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>

            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2>Your text Summary</h2>
                <p><b>{n_words}</b> Words ,<b> {n_char}</b> Characters and <b>{0.008 * n_words} </b>Minutes to read</p>
            
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
            
        </>
  )
}
