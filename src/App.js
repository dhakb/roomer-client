import {useEffect, useState} from "react";
import socket from "./feature/socket";
import ChatBox from "./components/chatBox/ChatBox.components";
import RoomInputForm from "./components/RoomInputForm/RoomInputForm.component";
import TypeAnimation from "./components/InstanceMapAnime/InstanceMapAnimation.component";

import "./App.styles.scss"

function App() {
    const [roomData, setRoomData] = useState({roomName: "", username: "", isRunning: false})
    const [instanceMap, setInstanceMap] = useState("")

    useEffect(() => {
        socket.connect()
    }, [])

    return (
        <div className="top-level">
            {
                // instanceMap && <TypeAnimation instanceMap={instanceMap}/>
            }
            {
                !roomData.isRunning ? <RoomInputForm setRoomData={setRoomData}/> :
                    <ChatBox roomName={roomData.roomName} username={roomData.username}
                             collectInstance={setInstanceMap}/>
            }
        </div>
    );
}

export default App;
