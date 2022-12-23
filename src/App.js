import {useEffect, useState} from "react";
import socket from "./feature/socket";
import ChatBox from "./components/chatBox/ChatBox.components";
import JoinRoom from "./components/joinRoom/JoinRoom.component";

import "./App.styles.scss"

function App() {
    const [roomData, setRoomData] = useState({roomName: "", isRunning: false})
    const [instanceMap, setInstanceMap] = useState("")

    useEffect(() => {
        socket.connect()
    }, [])


    return (
        <div className="top-level">
            {
                // instanceMap && <TypeAnimationComponent instanceMap={instanceMap}/>
            }
            {
                !roomData.isRunning ? <JoinRoom setRoomData={setRoomData}/> :
                    <ChatBox roomName={roomData.roomName} username={roomData.username}
                             collectInstance={setInstanceMap}/>
            }
        </div>
    );
}

export default App;
