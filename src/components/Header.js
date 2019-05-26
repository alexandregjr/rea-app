import React, {Component} from 'react'
import Navbar from './Navbar'

class Header extends Component {
    render() {
        const styleTitle = {
            textAlign: 'center',
            margin: '0'
        }
        
        const styleHeader = {
            backgroundColor: 'black',
            color: 'white'
        }

        return(
            <header style={styleHeader}>
                <h1 style={styleTitle}>HTC</h1>
                <Navbar />
            </header>
        )
    }
}

export default Header