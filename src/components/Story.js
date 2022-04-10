import React from 'react'

const Story = ({story}) => {
  return (
    <div className='story-box'>{story.description}</div>
  )
}

export default Story