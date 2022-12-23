import React, {useState} from 'react';
import UseValidate from "../../hooks/UseValidate";

import "./JoinRoom.styles.scss"

const JoinRoom = ({setRoomData}) => {
    const [roomName, setRoomName] = useState("")
    const [username, setUsername] = useState("")
    const {valueChangeHandler, validateValue, value} = UseValidate()


    const onJoinRoomHandler = () => {
        const isValid = validateValue()
        if (roomName && isValid ) {
            setRoomData({isRunning: true, roomName, username: value})
        } else {
            alert("<= 16 && only alphabetic && _ chars are allowed")
        }
    }

    const onJoinRoomInputKeyDown = (e) => {
        if (e.key === "Enter") {
            onJoinRoomHandler()
        }
    }

    return (
        <div className="join-room-container">
            <label>
                <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)}
                       onKeyDown={onJoinRoomInputKeyDown}
                       placeholder="Enter room name.."/>
            </label>
            <input type="text" value={value} onChange={valueChangeHandler}
                   onKeyDown={onJoinRoomInputKeyDown} placeholder="enter as a <username>"/>
            <button onClick={onJoinRoomHandler}>Join</button>
        </div>
    );
};

export default JoinRoom;