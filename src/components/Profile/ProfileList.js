import React from 'react'
import ProfileItem from "./ProfileItem";

const ProfileList = ({ user }) => {
  return (
    <div>
      <ProfileItem item={user} cook={user.chef} arts={user.artwork} />
    </div>
  )
}

export default ProfileList
