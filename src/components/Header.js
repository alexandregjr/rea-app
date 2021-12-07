import React, { useState } from 'react';
import Navbar from './Navbar';
import contentData from '../contentData';
import Menu from './Menu';

const accImg = "https://upload.wikimedia.org/wikipedia/commons/d/db/Alternative_Handicapped_Accessible_sign.svg"


function Header({ selector, theme }) {
    const titles = contentData.map((topic) => (
        {title: topic.title}
    ))
    const [click, setClick] = useState(false);
    const [pos, setPosition] = useState("absolute");

    return(
        <header>
            <ul className="acc-navbar">
                <li>
                    <a href="#content" accessKey="1" >Explicação[1]</a>
                </li>
                <li>
                    <a href="#exercise" accessKey="2" >Exercício[2]</a>
                </li>
                <li>
                    <a href="#footer" accessKey="3" >Rodapé[3]</a>
                </li>
            </ul>
            <div style = {{position: pos, zIndex: 20, padding:"15px 0 0 15px"}} onClick={()=>{setClick(!click); setPosition(pos === "absolute" ? "fixed" : "absolute")}}>
                <img src={accImg} style={{ height: "3rem", width:"3rem"}}/>
            </div>

            <Menu click={click} toggleTheme={selector} theme={theme} onClose={() => { setClick(false); setPosition("absolute"); }} />
            <div className={'content'}>
                <h1>{Array.from("AGPJEPLGAJTMS").sort().join('')} <span>Estudos</span></h1>
                <Navbar topics={titles}/>
                {/* <div className="accessibility">
                    <button onClick={selector}><img src="https://www.sendiass4bcp.org/siteelements/images/icons/highcontrast.png" alt="Figura de uma luz, indicando alteração de Modo de Contraste" width="40"/></button>
                </div> */}
            </div>
        </header>
    )
}

export default Header