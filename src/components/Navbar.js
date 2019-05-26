import React, {Component} from 'react'

class Navbar extends Component {
    render() {
        const styleUl = {
            display: 'flex',
            listStyle: 'none',
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        const styleA = {
            padding: '15px',
            textAlign: 'center',
            color: 'white',
            textDecoration: 'none'
        }

        return(
            <ul style={styleUl}>
                <a href='#home' style={styleA}><li>Home</li></a>
                <a href='#subj1' style={styleA}><li>Subj1</li></a>
                <a href='#subj2' style={styleA}><li>Subj2</li></a>
                <a href='#subj3' style={styleA}><li>Subj3</li></a>
            </ul>
        )
    }
}

export default Navbar