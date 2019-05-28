import React, {Component} from 'react'
import Subject from './Subject'
import Exercise from './Exercise'

class Content extends Component {
    render() {
        const content = this.props.subjects.map(subj =>
            <div key={subj.title}>
                <Subject info={subj} id={this.props.id} />
                <Exercise info={subj} id={this.props.id} />
            </div>
        )
        
        return(
            <main>
                <h2>Content</h2>
                {content}
            </main>
        )
    }
}

export default Content