import React from 'react'

const Action = ({story, handleChoice}) => {
  return (
    <div className='action-box'>
      {story.choices.map((choice) => {
        return(
          <div className='action-line' onClick={() => handleChoice(choice.id)}>{choice.description}</div>
        )
      })}
    </div>
  )
}

export default Action;