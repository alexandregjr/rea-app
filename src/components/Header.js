import React, {Component} from 'react'
import Navbar from './Navbar'
import style from '../styles/HeaderStyle'

class Header extends Component {
    render() {
        return(
            <header style={style.header}>
                <h1 style={style.title}>HTC</h1>
                <Navbar titles={this.props.titles}/>
            </header>
        )
    }
}

export default Header