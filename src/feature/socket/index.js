import {io} from "socket.io-client"

const socket = io("https://roomer-server-7exp2.ondigitalocean.app/", {autoConnect: false})

export default  socket