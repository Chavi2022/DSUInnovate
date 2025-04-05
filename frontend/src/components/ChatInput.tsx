import React, { useState } from "react";
import "../css/ChatWindow.css";
import "../css/ChatInput.css"

// Define the prop types for ChatInput
interface ChatInputProps {
    onSend: (message: string) => void; // Function that takes a string and returns void
}

function ChatInput({ onSend }: ChatInputProps) {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim()) {
            onSend(message);
            setMessage(""); // Clear the input after sending
        }
    };

    return (
        <div className="chatInputContainer">
            <input
                type="text"
                className="chatInputField"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button className="chatSendButton" onClick={handleSendMessage}>
                <span className="material-icons">send</span>
            </button>
        </div>
    );
};

export default ChatInput;
