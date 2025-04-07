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
    messages: MessagesObject,
    databaseLink: string
}

function ChatPage({ messages, databaseLink }: ChatboxProps) {
    return (
        <>

            <ChatWindow messages={messages} databaseLink={databaseLink} />

        </>
    )
}

export default ChatPage