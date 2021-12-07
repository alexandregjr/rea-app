import React, { useState } from 'react'
import Navbar from './Navbar'
import contentData from '../contentData'
import menu from '../menu.png'
import Menu from './Menu';

function Header(props) {
    const titles = contentData.map((topic) => (
        {title: topic.title}
    ))
    const [click, setClick] = useState(false);
    const [pos, setPosition] = useState("absolute")

    return(
        <header>
            <div style = {{position: pos, zIndex:'1', padding:"15px 0 0 15px"}} accesskey="0" onClick={()=>{setClick(!click); setPosition(pos == "absolute" ? "fixed" : "absolute")}}>
                <img src={menu} style={{ height: "3rem", width:"3rem"}}/>                    
                <small>[0]</small>
            </div>

            <Menu click={click}/>
            <div className={'content'}>
                <h1>{Array.from("AGPJEPLGAJTMS").sort().join('')} <span>Estudos</span></h1>
                <Navbar topics={titles}/>
            </div>
        </header>
    )
}

export default Header