import React from 'react'
import Exercise from './Exercise'

function Subject(props) {
    const subtopics = props.info.subtopics.map((topic, index) => (
        <div key={index}>
            <h4>{topic.title}</h4>
            <p>{topic.content}</p>
        </div>
    ))
    
    return (
        <div>
            <h3>{props.info.title}</h3>
            {subtopics}
            <Exercise info={props.info} />
        </div>
    )
}

export default Subject