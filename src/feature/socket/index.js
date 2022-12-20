import {io} from "socket.io-client"

// const socket = (username) => io("http://localhost:8900/", {autoConnect: false, query: {data: username}})
const socket = io("http://localhost:8900/", {autoConnect: false})

export default  socket