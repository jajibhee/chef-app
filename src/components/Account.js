import React from 'react'

const Account = ({ img, name, caption }) => {
  return (
    <div className="account">
      <img src={img} alt="" srcset="" />
      {name}
      {caption}

    </div>
  )
}

export default Account
