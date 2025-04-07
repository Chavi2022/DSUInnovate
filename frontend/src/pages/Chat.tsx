import '../css/App.css'
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

function Chat({ messages, databaseLink }: ChatboxProps) {
    return (
        <>

            <ChatWindow messages={messages} databaseLink={databaseLink} />

        </>
    )
}

export default Chat