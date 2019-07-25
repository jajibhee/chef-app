import React from 'react';
import './App.scss'
import Profile from './components/Profile/Profile'

let users = [
  {
    id: 0,
    caption: "I cook Bheelicious meals",
    avatar: "",
    chef: {
      handle: "jajibhee",
      name: "Jaji Bhee"
    },
    shots: 2,
    follows: 1100,
    fans: 2000,
    artwork: {
      art: '',
      title: 'Sharing the process of homemade basket',
      time: '11pm',
      likes: '',
      comment: 2
    },
    likes: 500,
    retweets: 1212,
    fans: 1134
  },
  {
    id: 1,
    caption: "No Sam, no Samsrolls",
    avatar: "",
    chef: {
      handle: "samskins",
      name: "Sam Akintunde"
    },
    shots: 12,
    follows: 111,
    fans: 343,
    artwork: {
      art: '',
      title: 'Sharing the process of homemade basket',
      time: '11pm',
      likes: '',
      comment: 2
    },
    likes: 35,
    retweets: 32,
    fans: 33
  },
  {
    id: 2,
    caption: "I love developing full stack meals",
    avatar: "",
    chef: {
      handle: "oadex",
      name: "Oseni Adekunle"
    },
    shots: 22,
    follows: 234,
    fans: 243,
    artwork: {
      art: '',
      title: 'Sharing the process of homemade basket',
      time: '11pm',
      likes: '',
      comment: 2
    },
    likes: 235,
    retweets: 232,
    fans: 235
  },

];

function App() {
  return (
    <div>
      <Profile users={users} />
    </div>
  )


}

export default App;