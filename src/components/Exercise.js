import React, {Component} from 'react'

class Exercise extends Component {
    render() {
        return (
            <div>
                <h3>Exercise</h3>
                <p>sample exercise {this.props.info.title}</p>
            </div>
        )
    }
}

export default Exercise