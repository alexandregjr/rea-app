import React from 'react'
import Subject from './Subject'

function Content(props) {
        let { id } = props.match.params
        if (!id) id = 1

        return(
            <main>
                <div className={'content'}>
                    <Subject from={(id - 1)} />
                </div>
            </main>
        )
}

export default Content