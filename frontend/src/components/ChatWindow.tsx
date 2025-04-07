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
    messages: MessagesObject,
    databaseLink: string
}


function ChatWindow({ databaseLink, messages: initialMessages }: ChatWindowProps) {
    const [messages, setMessages] = useState<MessagesObject>(initialMessages);

    useEffect(() => { // UNTESTED
        const socket = new WebSocket(`$databaseLink`);
        socket.addEventListener("message", (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data && typeof data.text === "string") {
                    const newKey = `message${Object.keys(messages).length + 1}`;
                    setMessages((prev) => ({
                        ...prev,
                        [newKey]: {
                            text: data.text,
                            isSender: false
                        }
                    }));
                }
            } catch (err) {
                console.error("This is an invalid message", err);
            }
        });
        // Clean up on unmount
        return () => socket.close();
    }, []);

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