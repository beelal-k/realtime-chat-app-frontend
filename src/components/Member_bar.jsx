import React from 'react'
import '../scss/Member_bar.scss'
// import friendsIcon from '../images/friendsIcon.svg';
// import newConvoIcon from '../images/newConvo.svg';

const Member_bar = () => {
    return (
        <>
            <section className='main-chat-member-bar flex-col'>
                <h6>ONLINE USERS</h6>
                <div className='members-bar-members-list flex-col'>

                    <div className='flex-row members-bar-member-template'>
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>

                    <div className='flex-row members-bar-member-template'>
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>
                    <div className='flex-row members-bar-member-template'>
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>
                    <div className='flex-row members-bar-member-template'>
                        <div className='members-bar-member-image'></div>
                        <p>Tina Lopez</p>
                    </div>

                </div>
                <h6>OFFLINE USERS</h6>
            </section>

        </>

    )
}

export default Member_bar