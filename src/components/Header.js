import React from 'react'
import Navbar from './Navbar'
import contentData from '../contentData'

function Header(props) {
    const titles = contentData.map((topic) => (
        {title: topic.title}
    ))

    return(
        <header>
            <div className={'content'}>
                <h1>ADEL Estudos</h1>
                <Navbar topics={titles}/>
            </div>
        </header>
    )
}

export default Header