
import Cat from './cats.js'
import Dog from './dog.js'
import ReactDom from 'react-dom'
import React from 'react'

ReactDom.render(
        <div>
            <Cat />
            <Dog />
        </div>, document.getElementById('app')
    )

// console.log(cats);
// console.log('sdfadfas')
// console.log('123')
