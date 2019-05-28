import React, {Component} from 'react'
import style from '../styles/NavbarStyle'
import {Link} from 'react-router-dom'

class Navbar extends Component {
    render() {
        const links = this.props.titles.map(subj => 
            <Link key={subj.title} style={style.a} to={'/' + subj.title.replace(/ /g, '-').toLowerCase()}>
                {subj.title}
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