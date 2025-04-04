import { useState, useEffect } from 'react'
import "../css/ChatWindow.css"
import Navbar from './Navbar'
import Message from './Message';
import logo from "../assets/images/logo.png"
import ChatInput from './ChatInput';

type MessagesObject = {
    [key: string]: {
        text: string,
        isSender: boolean
    };
};
interface ChatWindowProps {
    messages: MessagesObject
}


function ChatWindow({ messages: initialMessages }: ChatWindowProps) {
    const [messages, setMessages] = useState<MessagesObject>(initialMessages);
    // Adding comment so I can commit again.

    function hasValidMessage(messages: MessagesObject): boolean {
        return (
            Object.keys(messages).length > 0

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

    function handleNewMessage(newText: string) {
        const newMessageKey = `message${Object.keys(messages).length + 1}`;
        const newMessage = { text: newText, isSender: true };

        setMessages(prev => ({
            ...prev,
            [newMessageKey]: newMessage
        }));
    }

    return (
        <>
            <div className='chatWindow'>
                <Navbar />
                <div className="chatHistory">
                    {hasValidMessage(messages) ? loadChatHistory(messages) : loadNewChat()}
                </div>
                <ChatInput onSend={handleNewMessage} />
            </div >

        </>
    )
}

export default ChatWindow