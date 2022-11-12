import React, { useEffect, useState, useRef } from 'react'
import '../scss/Main_chat.scss'
import Friend_bar from '../components/Friend_bar';
import Member_bar from '../components/Member_bar';
import addMemberIcon from '../images/addMember.svg'
import addAttachment from '../images/addAttachment.svg'
import emojiIcon from '../images/emojiIcon.svg'
import socketIO from 'socket.io-client'

const Main_chat = () => {

    const [text, setText] = useState();

    const socket = socketIO;

    const enterHandler = useRef();
    let sendInputField;

    useEffect(() => {
        socket.connect('http://localhost:8080')
        
        sendInputField = enterHandler.current;
        
    }, [])
    
    
    sendInputField.addEventListener('keydown', (e) => {
        console.log(e.target.value)
    })
    
    
    
    const send_message = () => {

        // console.log(text)
        // socket.emit('message', text)
    }

    return (
        <>
            <div className='main-chat flex-row'>
                <Friend_bar />
                <main className='main-chat-center flex-col'>
                    <div className='chat-title flex-row'>
                        <h4>Tina's Group Chat</h4>
                        <img src={addMemberIcon} />
                    </div>
                    <div className='main-chat-page'>
                        <div className='flex-row main-chat-message'>
                            <div className='chat-profile-image'></div>
                            <div className='flex-col chat-message-text'>
                                <p className='chat-sender-name'>Tina Lopez</p>
                                <p>This is a message from tina lopez.</p>
                            </div>
                        </div>

                        <div className='flex-row main-chat-message'>
                            <div className='chat-profile-image'></div>
                            <div className='flex-col chat-message-text'>
                                <p className='chat-sender-name'>Tina Lopez</p>
                                <p>This is another message from tina lopez.</p>
                            </div>
                        </div>

                        <div className='flex-row main-chat-message'>
                            <div className='chat-profile-image'></div>
                            <div className='flex-col chat-message-text'>
                                <p className='chat-sender-name'>Tina Lopez</p>
                                <p>This is yet another message from tina lopez.</p>
                            </div>
                        </div>
                        <div className='flex-row main-chat-message'>
                            <div className='chat-profile-image'></div>
                            <div className='flex-col chat-message-text'>
                                <p className='chat-sender-name'>Tina Lopez</p>
                                <p>This is yet another message from tina lopez.</p>
                            </div>
                        </div>
                        <div className='flex-row main-chat-message'>
                            <div className='chat-profile-image'></div>
                            <div className='flex-col chat-message-text'>
                                <p className='chat-sender-name'>Tina Lopez</p>
                                <p>This is yet another message from tina lopez.</p>
                            </div>
                        </div>
                    </div>
                    <div className='chat-input-box flex-row'>
                        <img src={addAttachment} />
                        <input type='text' placeholder='Send a message' id='sendMessageInput' ref={enterHandler} onChange={(e) => setText(e.target.value)} />
                        <img src={emojiIcon} />

                    </div>

                </main>
                <Member_bar />
            </div>
        </>

    )

}

export default Main_chat