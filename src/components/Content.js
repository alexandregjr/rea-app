import React from 'react'
import Subject from './Subject'
import contentData from '../contentData'

function Content(props) {
        let { id } = props.match.params
        if (!id) id = 1

        return(
            <main>
                <Subject info={contentData[(id - 1)]} />
            </main>
        )
}

export default Content