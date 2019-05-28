import React, {Component} from 'react'

class Exercise extends Component {
    render() {
        const id = this.props.info.title.replace(/ /g, '-').toLowerCase();
        return (
            this.props.id === id &&
            <div>
                <h4>Exercise</h4>
                <p>sample exercise {this.props.info.title}</p>
            </div>
        )
    }
}

export default Exercise