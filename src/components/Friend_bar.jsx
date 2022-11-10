import React from 'react'
import '../scss/Friend_bar.scss'
import friendsIcon from '../images/friendsIcon.svg';
import newConvoIcon from '../images/newConvo.svg';

const Friend_bar = () => {
  return (
    <>
      <section className='main-chat-friend-bar flex-col'>

        <input type='text' placeholder='Search conversations' className='inputs' />
        <div className='main-chat-top-btns flex-row'>
          <button classsName=''><img src={friendsIcon} /></button>
          <button><img src={newConvoIcon} /></button>
        </div>

      </section>
    </>

  )
}

export default Friend_bar