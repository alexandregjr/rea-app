import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const links = props.topics.map((topic, index) =>         
        <Link to={'/topic/' + (index + 1)} key={index}>
            {topic.title}
        </Link>
    )

    return(
        <ul>
            {links}
        </ul>
    )
    
}

export default Navbar