import React, { useState } from 'react'


export default function Textforms(props) {
 
    const[Text,setText] = useState('');
 
    const handleupclick = ()=>{
    //    console.log("Uppercase was clicked " + Text)
        let newText= Text.toUpperCase()
        setText(newText)
        props.showalert("Text is converted into uppercase", "success")
    }
    const handleloclick = ()=>{
      //    console.log("Lowercase was clicked " + Text)
          let newText= Text.toLowerCase()
          setText(newText)
          props.showalert("Text is converted into Lowercase", "success")
      }
      const handleclearclick = ()=>{
        //    console.log("cleartext was clicked " + Text)
            let newText= ("")
            setText(newText)
            props.showalert("Text is cleared. Please enter new text.", "success")
        }
    
    const handleOnChange =(event)=>{
   // console.log("on Change")
    setText(event.target.value)
                              }

    const handleCopy = () =>{
      var Text = document.getElementById("myBox")
      Text.select()
      navigator.clipboard.writeText(Text.value)
      props.showalert("Text is copied", "success")
    }                              

 return (
<> 
<div className = "container my-3" style={{color : props.mode=== 'dark'? 'white' : 'black' }}>
<h2> {props.heading}</h2>
    <div className="form-group">
    <textarea className="form-control" value={Text} style={{backgroundColor:props.mode=== 'dark'? '#464647' : 'white' , color : props.mode=== 'dark'? 'white' : 'black' }} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
<button className = "btn btn-danger mx-2" onClick = {handleupclick} >Convert to Uppercase</button>
<button className = "btn btn-danger mx-2" onClick = {handleloclick} >Convert to Lowercase</button>
<button className = "btn btn-danger mx-2" onClick = {handleclearclick} >Clear Text</button>
<button className = "btn btn-danger mx-2" onClick = {handleCopy} >Copy Text</button>
</div>
<div className = "container" style={{color : props.mode=== 'dark'? 'white' : 'black' }}>
<h2>Your Text Summary</h2>
<p>{Text.split(" ").length-1} words and {Text.length} characters</p>
<p>{0.008 * Text.split(" ").length} minutes to read this.</p>
<p>Preview</p>
<p>{Text}</p>
</div>

</>
  )
  
}