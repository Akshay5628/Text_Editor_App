import React,{useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>
    {
        // alert("You have clicked Uppercase button.")
        let newText=text.toUpperCase();
        setText(newText);
    }

    const handleLowClick =()=>
    {
        // alert("You have clicked Lowercase button.")
        let newText=text.toLowerCase();
        setText(newText);
    }

    
    const handleClrClick =()=>
    {
        // alert("You have clicked Lowercase button.")
        let newText=('');
        setText(newText);
    }

    const handleExtraSpace =()=>{
        let newText=text.split(/ +/);
        setText(newText.join(" "));
    }

    const handleOnChange =(event)=>
    {
        setText(event.target.value)
    }


    const[text, setText]=useState('');
  return (
    <>
        <div className="container"style={{color: props.mode==='dark'?'white':'#244368'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#244368'}} id="MyTextBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleUpClick}>Convert Text into UpperCase</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleLowClick}>Convert Text into LowerCase</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleClrClick}>Clear</button>
            <button className="btn btn-primary btn-sm mx-2" onClick={handleExtraSpace}>Remove extra space</button>

        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#244368'}}>
        <h2><li>Your text summary</li></h2>
        <p>{text.split(" ").length-1} Words and {text.length} characters</p>
        <h2><li>Preview of text</li></h2>
        <p>{text.length>0?text:"Enter something in above textbox to preview here."}</p>
        </div>
    </>
  )
}
