import {useEffect, useState} from "react";
import socket from "./feature/socket";
import ChatBox from "./components/chatBox/ChatBox.components";

const styles = {
    display: "flex",
    justifyContent: "center",
}
function App() {
    const [userName] = useState(`user_${Math.random().toFixed(6)}`)

    useEffect(() => {
        // socket(userName).connect()
        socket.connect()
    }, [userName])


  return (
    <div style={styles}>
      <ChatBox/>
    </div>
  );
}

export default App;
