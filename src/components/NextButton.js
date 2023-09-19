import React from 'react'

export default function NextButton({ dispatch, answer, index, numQuestions }) {
    if (answer === null) return null

    const finished = index === numQuestions - 1    

    

    return (
        <button className='btn btn-ui'
            onClick={() => dispatch( finished ? {   type: 'finished' } : {   type: 'nextQuestion' })}
        > {finished ? 'Finish' : 'Next'} </button>
    )
}
