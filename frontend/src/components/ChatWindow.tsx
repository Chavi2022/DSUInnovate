import { useState, useEffect } from 'react'
import "../css/ChatWindow.css"
import Navbar from './Navbar'
import Message from './Message';
import logo from "../assets/images/logo.png"

type MessagesObject = {
    [key: string]: {
        text: string,
        isSender: boolean
    };
};
interface ChatWindowProps {
    messages: MessagesObject
}

function hasValidMessage(messages: MessagesObject): boolean {
    console.log(Object.keys(messages).length)
    return (
        Object.keys(messages).length === 0
    )

}

function loadChatHistory(messages: MessagesObject) {
    return (
        Object.keys(messages).map((messageKey) => {
            const message = messages[messageKey]
            return (
                <>
                    <Message text={message.text} isSender={message.isSender} />
                </>
            )
        }))
}

function loadNewChat() {
    return (
        <>
            <img src={logo} className='newChatImage' />
            <p className='welcomeMessage'>
                Hello, how can I help you today?
            </p>
        </>
    )
}
function ChatWindow({ messages }: ChatWindowProps) {

    return (
        <>
            <div className='chatWindow'>
                <Navbar />
                {(hasValidMessage(messages)) ? loadNewChat() : loadChatHistory(messages)}
            </div >

        </>
    )
}

export default ChatWindow