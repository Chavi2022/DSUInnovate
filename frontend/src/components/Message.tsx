import "../css/Message.css"
import pfp1 from "../assets/images/pfp.png"
import logo from "../assets/images/logo.png"
type MessageProps = {
    text: string;
    isSender: boolean;
};

function Message({ text, isSender }: MessageProps) {
    if (isSender) {

        return (
            <>
                <div className='messageContainer outgoingMessage'>
                    <div className="textContainer">
                        <p className="messageText">{text}</p>
                    </div>
                    <img src={pfp1} className="pfp" />
                </div>
            </>
        )
    }
    else
        return (
            <>
                <>
                    <div className='messageContainer incomingMessage'>
                        <img src={logo} className="pfp" />
                        <div className="textContainer">
                            <p className="messageText">{text}</p>
                        </div>

                    </div>
                </>
            </>
        )
}

export default Message