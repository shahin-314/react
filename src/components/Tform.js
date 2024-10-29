import React,{useState} from 'react'


export default function Tform2(props) {

    const handleU = ()=>{
        // console.log("uppwercase"+text1);
        let newText= text1.toUpperCase();
        // setText("clicked on handleU")
        setText(newText)
        props.showAlert(" converted to upper case","success");
    }

    const handelL = ()=>{
        let newText= text1.toLowerCase();
        setText(newText)
        props.showAlert(" converted to lower case","success");
    }

    const handleCl = ()=>{
        let newText='';
        setText(newText)
        props.showAlert(" cleared","success");
    }

    const handleC = (event)=>{
        // console.log("change");
        setText(event.target.value);
    }

    const handleCopy =()=>{
        let text1=document.getElementById("myBox");
        text1.select();
        navigator.clipboard.writeText(text1);
        document.getSelection().removeAllRanges();
        props.showAlert(" text copied","success");
    }

    const handleSpace=()=>{
        let newText=text1.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" space removed","success");
    }

    const [text1, setText]= useState('');
  return (

    <>
        <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      
            <h1>{ props.heading}</h1>
            <div className="mb-3">
            {/* <label for="myBox" className="form-label">Email address</label> */}
            <textarea className="form-control" value={text1} onChange={handleC} style={{backgroundColor:props.mode==='dark'?'#36455b':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text1.length===0} className="btn btn-danger mx-1 my-1"onClick={handleU} >UPPERCASE</button>
            <button disabled={text1.length===0} className="btn btn-danger mx-1 my-1"onClick={handelL}>Lowercase</button>
            <button disabled={text1.length===0} className="btn btn-danger mx-1 my-1"onClick={handleCl}>cleartext</button>
            <button disabled={text1.length===0} className="btn btn-danger mx-1 my-1"onClick={handleCopy}>copytext</button>
            <button disabled={text1.length===0} className="btn btn-danger mx-1 my-1"onClick={handleSpace}>clear space</button>
        </div>

        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h1>your summary</h1>
            <p>{text1.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text1.length} characters</p>

            <p>{0.008 * text1.split(" ").filter((element)=>{return element.length!==0}).length}minutes read</p>

            <h2>preview</h2>
            <p>{text1.length>0?text1:"Nothing to preview"}</p>

        </div>

    </>
   )
}
