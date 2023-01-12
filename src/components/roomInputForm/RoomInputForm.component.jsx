import React, {useState} from 'react';
import UseValidateUsername from '../../hooks/UseValidateUsername';

import "./RoomInputForm.styles.scss"

const RoomInputForm = ({setRoomData}) => {
    const [roomName, setRoomName] = useState("")
    // const [username, setUsername] = useState("")
    const {usernameValueChangeHandler, validateUsername, value} = UseValidateUsername()


    const onJoinRoomHandler = () => {
        const isValid = validateUsername()
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
            <input type="text" value={value} onChange={usernameValueChangeHandler}
                   onKeyDown={onJoinRoomInputKeyDown} placeholder="enter as a <username>"/>
            <button onClick={onJoinRoomHandler}>Join</button>
        </div>
    );
};

export default RoomInputForm;