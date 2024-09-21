import React from 'react'
import ProfileCard from './components/ProfileCard'
import {profileData} from './constants/const.js'
const App = () => {
  return (
    <div className='flex flex-wrap flex-grow'>
      {profileData.map((item)=>{
        return(<ProfileCard key={item.name} data={item}/>)
      })}
    </div>

  )
}

export default App