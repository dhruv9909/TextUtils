import React, { useState } from 'react'


export default function Textforms(props) {
 
    const[Text,setText] = useState('');
 
    const handleupclick = ()=>{
    //console.log("Uppercase was clicked " + Text)
    let newText= Text.toUpperCase()
    setText(newText)
    props.showalert("Text is converted into uppercase", "success")
    }

    const handleloclick = ()=>{
    //console.log("Lowercase was clicked " + Text)
    let newText= Text.toLowerCase()
    setText(newText)
    props.showalert("Text is converted into Lowercase", "success")
    }
    const handleclearclick = ()=>{
    //console.log("cleartext was clicked " + Text)
    let newText= ("")
    setText(newText)
    props.showalert("Text is cleared. Please enter new text.", "success")
    }
    
    const handleOnChange =(event)=>{
    // console.log("on Change")
    setText(event.target.value)
    }

    const handleCopy = () =>{
    navigator.clipboard.writeText(Text)
    props.showalert("Text is copied", "success")
    }                              

 return (
          <> 
          <div className = "container my-3" style={{color : props.mode=== 'dark'? 'white' : 'black' }}>
          <h2 className='mb-3'> {props.heading}</h2>
              <div className="form-group">
              <textarea className="form-control" value={Text} style={{backgroundColor:props.mode=== 'dark'? '#464647' : 'white' , color : props.mode=== 'dark'? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
          <button disabled={Text.length===0} className = "btn btn-danger mx-2 my-1" onClick = {handleupclick} >Convert to Uppercase</button>
          <button disabled={Text.length===0} className = "btn btn-danger mx-2 my-1" onClick = {handleloclick} >Convert to Lowercase</button>
          <button disabled={Text.length===0} className = "btn btn-danger mx-2 my-1" onClick = {handleclearclick} >Clear Text</button>
          <button disabled={Text.length===0} className = "btn btn-danger mx-2 my-1" onClick = {handleCopy} >Copy Text</button>
          </div>
          <div className = "container" style={{color : props.mode=== 'dark'? 'white' : 'black' }}>
          <h2>Your Text Summary</h2>
          <p>{Text.split(/\s+/).filter((element)=>{return element!==""}).length} words and {Text.length} characters</p>
          <p>{0.008 * Text.split(" ").filter((element)=>{return element!==""}).length} minutes to read this.</p>
          <h2>Preview</h2>
          <p>{Text.length>0?Text:"Nothing to preview"}</p>
          </div>

          </>
        )
  
}