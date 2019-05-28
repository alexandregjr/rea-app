import React, {Component} from 'react'
import style from '../styles/FooterStyle'

class Footer extends Component {
    render() {
        return (
            <footer style={style.footer}>
                <p>Desenvolvido por <b>Alexandre Jr, Daniel Barretto, Eduardo Pirro e Laura Genari</b></p>
                <p>Organização e Arquitetura de Computadores - <b>Profa. Sarita</b></p>
            </footer>
        )
    }
}

export default Footer