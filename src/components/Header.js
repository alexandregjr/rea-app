import React from 'react'
import Navbar from './Navbar'
import contentData from '../contentData'

function Header({ selector }) {
    const titles = contentData.map((topic) => (
        {title: topic.title}
    ))

    
    return(
        <header>
            <div className={'content'}>
                <h1>{Array.from("AGPJEPLGAJTMS").sort().join('')} <span >Estudos</span></h1>
                <Navbar topics={titles}/>
                <div className="accessibility">
                    <button onClick={selector}><img src="https://www.sendiass4bcp.org/siteelements/images/icons/highcontrast.png" alt="Figura de uma luz, indicando alteração de Modo de Contraste" width="40"/></button>
                </div>
            </div>
        </header>
    )
}

export default Header