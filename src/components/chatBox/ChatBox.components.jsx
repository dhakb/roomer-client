import React, {useEffect, useState} from 'react';
import {v4 as uuidv4} from "uuid"
import socket from "../../feature/socket";

import Message from "../message/Message.component";
import "./ChatBox.styles.scss"
const nicknm_colors = ["#6684e1", "#b854d4", "#cfb017", "#61828e", "#787866", "#7d7d7d"]

const getRandInRange = (max) => {
    return Math.floor(Math.random() * max)
}
const ChatBox = ({roomName, username, collectInstance}) => {
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState([])
    const [joinedUsers, setJoinedUsers] = useState([])
    const [color, setColor] = useState("")
    const [lorem, setLorem] = useState("")

    useEffect(() => {
        socket.emit("join", roomName)
    }, [])

    useEffect(() => {
        socket.emit("joined-room", {roomName, username, hsl: nicknm_colors[getRandInRange(nicknm_colors.length - 1)]})
    }, [])

    useEffect(() => {
        socket.on("user-joined", (username) => {
            setMessages((prevState) => [{username: "*", message: `${username} joined!`, status: "connected"}, ...prevState])
        })
    }, [])

    useEffect(() => {
        socket.on("getJoinedUsers", (users) => {
            setJoinedUsers(users)
        })
    }, [])

    useEffect(() => {
        socket.on("receiveMessage", (message) => {
            setMessages((prev) => [message, ...prev])
        })
    }, [])


    useEffect(() => {
        socket.on("getDisconnectedUser", ({username}) => {
            setMessages((prevState) => [{username: "*", message: `${username} disconnected!`, status: "disconnected"}, ...prevState])
        })
    }, [])


    useEffect(() => {
        setColor(nicknm_colors[getRandInRange(nicknm_colors.length - 1)])
    }, [username])

    useEffect(() => {
        socket.on("handshake", (instance) => {
            collectInstance(instance)
            setLorem(instance)
        })
    },[messages])

    const sendMessageHandler = () => {
        if (!message) return

        setMessages([{other: false, message, username, hsl: color}, ...messages])
        socket.emit("sendMessage", {message, roomName, username, color})
        setMessage("")
    }

    const onMessageInputKeyDown = (e) => {
        if (e.key === "Enter") {
            sendMessageHandler()
        }
    }

    return (
        <div className="chat-box-container">
            <div className="chat-box-top">

                <div className="message-input-container">
                    <input type="text" className="message-input" value={message}
                           onChange={(e) => setMessage(e.target.value)} onKeyDown={onMessageInputKeyDown}/>
                    <button onClick={sendMessageHandler} className="message-button"></button>
                </div>

                <div className="connected-users-list-wrapper">
                    <div className="on-connection-message-title">
                        <p>*</p>
                        <p>onConnection:~$</p>
                    </div>
                    <div className="connected-users-list">
                        {
                            joinedUsers.map((user) => (
                                <span key={uuidv4()}>@{user.username};</span>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="messages-list-container">
                {
                    messages.map((message) => (
                        <Message message={message} key={uuidv4()}/>
                    ))
                }
            </div>
        </div>
    );
};

export default ChatBox;