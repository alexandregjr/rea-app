import React from 'react'
import Navbar from './Navbar'
import style from '../styles/HeaderStyle'
import contentData from '../contentData'

function Header(props) {
    const titles = contentData.map((topic) => (
        {title: topic.title}
    ))

    return(
        <header style={style.header}>
            <h1 style={style.title}>HTC</h1>
            <Navbar topics={titles}/>
        </header>
    )
}

export default Header