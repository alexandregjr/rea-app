import React, {Component} from 'react'

class Subject extends Component {
    render() {
        const id = this.props.info.title.replace(/ /g, '-').toLowerCase();
        return (
            this.props.id === id &&
            <div>
                <h3>{this.props.info.title}</h3>
                <p>{this.props.info.value}</p>
            </div>
        )
    }
}

export default Subject