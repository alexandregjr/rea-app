import React, { useState } from 'react'
import Navbar from './Navbar'
import contentData from '../contentData'
import menu from '../menu.png'
import Menu from './Menu';

function Header({ selector }) {
    const titles = contentData.map((topic) => (
        {title: topic.title}
    ))
    const [click, setClick] = useState(false);
    return(
        <header>
            <img src={menu} style={{zIndex:'1', height: "3rem", width:"3rem", padding:"15px 0 0 15px" }} onClick={()=>{setClick(!click)}} />                    
            <Menu click={click}/>
            <div className={'content'}>
                <h1>{Array.from("AGPJEPLGAJTMS").sort().join('')} <span>Estudos</span></h1>
                <Navbar topics={titles}/>
                <div className="accessibility">
                    <button onClick={selector}><img src="https://www.sendiass4bcp.org/siteelements/images/icons/highcontrast.png" alt="Figura de uma luz, indicando alteração de Modo de Contraste" width="40"/></button>
                </div>
            </div>
        </header>
    )
}

export default Header