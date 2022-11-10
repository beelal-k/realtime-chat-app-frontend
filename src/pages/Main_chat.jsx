import React from 'react'
import '../scss/Main_chat.scss'
import Friend_bar from '../components/Friend_bar';
import Member_bar from '../components/Member_bar';

const Main_chat = () => {
    return (
        <>
            <div className='main-chat flex-row'>
                <Friend_bar />
                <main></main>
                <Member_bar />
            </div>
        </>

    )

}

export default Main_chat