import React from 'react'
import Exercise from './Exercise'
import contentData from '../contentData'

function Subject(props) {
    const data = contentData[(props.from)];
    const subtopics = data.subtopics.map((topic, index) => (
        <div className={'subtopic'} key={index}>
            <h3 id={topic.title}><a href={`#${topic.title}`}>{topic.title}</a></h3>
            {topic.content}
        </div>
    ))
    
    return (
        <div>
            <h2 id={data.title}><a href={`#${data.title}`}>{data.title}</a></h2>
            {subtopics}
            <Exercise subjectId={(props.from)} />
        </div>
    )
}

export default Subject