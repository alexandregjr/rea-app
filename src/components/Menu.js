import React, {useState} from 'react'
import contrast from '../contrast.png'
import font from '../fontSize.png'
import mais from '../mais.png'
import menos from '../menos.png'


export default function Menu ({click, toggleTheme, theme, onClose }) {

  const [display, setDisplay] = useState('none');

  return (
    <>
      {click && <div style={{ width: "100vw", height: "100vh", position: "fixed", left: 0, top: 0, backgroundColor: "black", opacity: "0.6", zIndex: 9 }} onClick={onClose}></div>}
      <div className="menu" style={{ display: click ? "block" : "none" }}>
        <h1 style={{marginTop: "15px", marginLeft:"calc(3rem + 15px)", paddingTop:"5px"}}>Menu</h1>
        <hr/>
        <div style={{display:'inline-flex', padding:"15px"}} onClick={()=>{setDisplay(display === "block" ? "none" : "block")}}>
          <img src={font} style={{height: "2.25rem", width:"2.25rem"}}/>
          <h3 style={{padding:"5px 0 0px 15px"}}> Fonte </h3>
        </div>    
        <div style={{paddingLeft: "calc(2.25rem + 15px)", display: display}}>
          <div style={{display:'inline-flex'}}>
            <img src={mais} style={{height: "1.5rem", width:"1.5rem"}}/>
            <h4>Aumentar</h4>
          </div>
          <br/>
          <div style={{display:'inline-flex'}}>
            <img src={menos} style={{height: "1.5rem", width:"1.5rem"}}/>
            <h4>Diminuir</h4>
          </div>
        </div>
        <hr/>    
        <div style={{display:'inline-flex', padding:"15px"}} onClick={toggleTheme}>
          <img src={contrast} style={{height: "2.25rem", width:"2.25rem"}}/>
          <h3 style={{padding:"5px 0 0px 15px"}}> {theme === "default" ? "Alto" : "Baixo"} contraste </h3>
        </div>
        <hr/>  
      </div>
    </>
  )
}