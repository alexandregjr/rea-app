import React, {useState} from 'react'
import contrast from '../contrast.png'
import font from '../fontSize.png'
import mais from '../mais.png'
import menos from '../menos.png'


export default function Menu ({click, toggleTheme, theme, onClose, increaseFontSize, decreaseFontSize }) {

  const [display, setDisplay] = useState('none');

  return (
    <>
      {click && <div style={{ width: "100vw", height: "100vh", position: "fixed", left: 0, top: 0, backgroundColor: "black", opacity: "0.6", zIndex: 9 }} onClick={onClose}></div>}
      <div className="menu" style={{ display: click ? "block" : "none" }}>
        <h1 style={{marginTop: "15px", marginLeft:"calc(3rem + 15px)", paddingTop:"5px"}}>Menu</h1>
        <hr/>
        <div style={{display:'inline-flex', padding:"15px"}} onClick={()=>{setDisplay(display === "block" ? "none" : "block")}}>
          <button className="nullButton"> 
            <img alt="icone com duas letras T, uma pequena e outra grande, indicando modificações no tamanho da fonte" src={font} style={{height: "2.25rem", width:"2.25rem"}}/>
            <h3>Fonte</h3>
          </button>
        </div>    
        <div style={{paddingLeft: "calc(2.25rem + 15px)", display: display}}>
          <div style={{display:'inline-flex'}} onClick={increaseFontSize}>
            <button className="nullButton" style={{fontSize: "0.8em"}}>
              <img alt="icone de mais, indicando aumento da fonte" src={mais} style={{height: "1.5rem", width:"1.5rem"}} />
              <h4>Aumentar</h4>
            </button>
          </div>
          <br/>
          <div style={{display:'inline-flex'}} onClick={decreaseFontSize}>
            <button className="nullButton" style={{fontSize: "0.8em"}}>
              <img alt="icone de menos, indicando diminuição da fonte" src={menos} style={{height: "1.5rem", width:"1.5rem"}} />
              <h4>Diminuir</h4>
            </button>
          </div>
        </div>
        <hr/>    
        <div style={{display:'inline-flex', padding:"15px"}} onClick={toggleTheme}>  
          <button className="nullButton">
            <img alt="icone circular, com metade clara e metade escura, indicando contraste" src={contrast} style={{height: "2.25rem", width:"2.25rem"}}/>
            <h3 style={{padding:"5px 0 0px 15px"}}> {theme === "default" ? "Alto" : "Baixo"} contraste </h3>
          </button>
        </div>
        <hr/>  
      </div>
    </>
  )
}