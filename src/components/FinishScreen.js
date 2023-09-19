import React from 'react'

export default function FinishScreen({ maxPossible, points, highscore, dispatch }) {

    const percentage = Math.ceil(points / maxPossible * 100);
    let emoji

    if (percentage === 100) emoji = '🥳'
    if (percentage >= 80 && percentage < 100) emoji = '😎'
    if (percentage >= 50 && percentage < 80) emoji = '😎'
    if (percentage >= 0 && percentage < 50) emoji = '😎'


    return (
        <>
            <p className='result'>
                You scored <strong> {points}</strong> out of {`${maxPossible}  
                (${percentage}%)`} {emoji}
            </p>
            <p className="highscore"> (Highscore: {highscore} points) </p>
            <button className='btn btn-ui' onClick={() => dispatch({ type: 'restart', })}>Restart</button>
        </>
    )
}
