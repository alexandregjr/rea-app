import React, {Component} from 'react'
import Subject from './Topic'

class Content extends Component {
    render() {
        const content = this.props.topics.map((topic, index) =>
            <Subject key={index} info={topic} id={this.props.id} />
        )
        
        return(
            <main>
                {content}
            </main>
        )
    }
}

export default Content