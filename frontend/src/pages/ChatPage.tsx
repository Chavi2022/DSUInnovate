import { useState, useEffect } from 'react'
import '../css/App.css'
import Navbar from '../components/Navbar'
import ChatWindow from '../components/ChatWindow'

type MessagesObject = {
    [key: string]: {
        text: string,
        isSender: boolean
    };
};
interface ChatboxProps {
    messages: MessagesObject
}

function ChatPage({ messages }: ChatboxProps) {
    return (
        <>

            <ChatWindow messages={messages} />

        </>
    )
}

export default ChatPage