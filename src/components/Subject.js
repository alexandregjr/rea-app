import React from 'react'
import Exercise from './Exercise'
import contentData from '../contentData'

function Subject(props) {
    const data = contentData[(props.from)];
    const subtopics = data.subtopics.map((topic, index) => (
        <div className={'subtopic'} key={index}>
            <h3>{topic.title}</h3>
            {topic.content}
        </div>
    ))
    
    return (
        <div>
            <h2>{data.title}</h2>
            {subtopics}
            <Exercise subjectId={(props.from)} />
        </div>
    )
}

export default Subject