import React from 'react'
import style from '../styles/NavbarStyle'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const links = props.topics.map((topic, index) =>         
        <Link to={'/topic/' + (index + 1)} style={style.a} key={index}>
            {topic.title}
        </Link>
    )

    return(
        <ul style={style.ul}>
            {links}
        </ul>
    )
    
}

export default Navbar