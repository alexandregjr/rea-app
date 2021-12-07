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
    return(
        <header>
            <div className={'content'}>
                <div style={{display:"inline-flex"}}>
                    <img src={menu} style={{zIndex:'1', height: "3rem", width:"3rem", paddingTop:"0.75rem" }} onClick={()=>{setClick(!click)}} />
                    <Menu click={click}/>
                    <h1>{Array.from("AGPJEPLGAJTMS").sort().join('')} <span>Estudos</span></h1>
                </div>
                <Navbar topics={titles} click={click} />
            </div>
        </header>
    )
}

export default Header