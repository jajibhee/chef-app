import React from 'react'
import Account from '../Account';
import Insights from '../Insights';
import Artwork from '../Artwork';
import settings from './icons/settings.svg'


const ProfileItem = ({ item, cook, arts }) => {
  return (
    <div className="profile-item">
      <img className="settings-icon" src={settings} alt="" />
      <Account img={item.avatar} name={cook.name} caption={item.caption} />
      <Insights shots={item.shots} follow={item.follows} fans={item.fans} likes={item.likes} />
      <Artwork art={arts.art} likes={arts.likes} comment={arts.comment} />
    </div>
  )
}

export default ProfileItem


