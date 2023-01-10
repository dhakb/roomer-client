import {io} from "socket.io-client"

const socket = io("https://chatter-server-d9jzp.ondigitalocean.app/roomer-server2", {autoConnect: false})

export default  socket