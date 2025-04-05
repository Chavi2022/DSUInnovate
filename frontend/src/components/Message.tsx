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
                    <img src={pfp1} className="pfp" />
                    <div className="textContainer">
                        <p className="messageText">{text}</p>
                    </div>
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
                        <div className="textIconContainer">
                            <div className="textContainer">
                                <p className="messageText">{text}</p>
                            </div>
                            <div className="audioPlayerContainer">
                                <span className="material-icons ">play_arrow</span>
                                <span style={{
                                    marginLeft: 15
                                }}>Play Audio</span>
                            </div>
                        </div>
                    </div>
                </>
            </>
        )
}

export default Message