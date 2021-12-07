import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
    const links = props.topics.map((topic, index) =>         
        <Link to={'/topic/' + (index + 1)} key={index} accesskey={index+1}>
            {topic.title} [{index+1}]
        </Link>
    )

    return(
        <ul role="group" id="pages">
            {links}
        </ul>
    )
    
}

export default Navbar