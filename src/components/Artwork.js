import React from 'react'

const Artwork = ({ art, likes, comment }) => {
  return (
    <div>
      {art}
      {likes}
      {comment}
    </div>
  )
}

export default Artwork
