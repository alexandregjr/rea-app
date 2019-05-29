import React, {Component} from 'react'
import style from '../styles/NavbarStyle'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        const links = this.props.topics.map((topic, index) =>         
            <Link 
                to={'/topic/' + topic.title.replace(/ /g, '-').toLowerCase()}
                style={style.a} 
                key={index} 
            >
                {topic.title}
            </Link>
        )

        return(
            <ul style={style.ul}>
                {links}
            </ul>
        )
    }
}

export default Navbar