import React, {Component} from 'react'

class Exercise extends Component {
    render() {
        return (
            <div>
                <h4>Exercise</h4>
                <p>sample exercise {this.props.info.title}</p>
            </div>
        )
    }
}

export default Exercise