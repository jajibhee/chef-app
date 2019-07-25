import React from 'react'
import ProfileList from './ProfileList';

const Profile = ({ users }) => {
  return (
    <div>
      {users.map(user =>
        <ProfileList user={user} />)}
    </div>
  )
}

export default Profile
