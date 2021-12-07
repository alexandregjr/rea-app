import React from 'react'
import Question from './Question'
import contentData from '../contentData'


function Exercise(props) {
    let exercises = contentData[(props.subjectId)].exercise
    const questions = exercises.map((questionData, id) => (
        <Question subjectId={props.subjectId} questionId={id} key={id} />
    ))

    return (
        <div className={'exercise'} id="exercise">
            <h2>Exercícios</h2>
            {questions}
        </div>
    )
}

export default Exercise