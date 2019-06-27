import React from 'react'
import Subject from './Subject'
import contentData from '../contentData'

function Content(props) {
        let { id } = props.match.params

        if (!id) id = 1
        if (isNaN(parseInt(id))) id = 1
        if (!isNaN(parseInt(id))) id = parseInt(id)
        if (id > contentData.length) id = 1

        return(
            <main>
                <div className={'content'}>
                    <Subject from={(id - 1)} />
                </div>
            </main>
        )
}

export default Content