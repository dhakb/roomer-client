import React, {useState, useEffect} from 'react';
import socket from "../../feature/socket";

import Message from "../message/Message.component";
import "./ChatBox.styles.scss"

const ChatBox = () => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])

    useEffect(() => {
        socket.on("getMessage", (message) => {
            console.log(message)
            setMessages((prev) => [...prev, message])
        })
    }, [])


    // useEffect(() => {
    //     socket.on("test", (data) => {
    //         console.log(data)
    //     })
    // }, [])

    const sendMessageHandler = () => {
        setMessages([...messages, {other: false, message}])
        // socket("undefined").emit("sendMessage", message)
        socket.emit("sendMessage", message)
        setMessage("")
    }

    return (
        <div className="chat-box-container">
            <div className="message-input-container">
                <input type="text" className="message-input" value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button onClick={sendMessageHandler} className="message-button">Send</button>
            </div>

            <div className="messages-list-container">
                {
                    messages.map((message) => (
                        <Message message={message} key={Math.random()}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChatBox;