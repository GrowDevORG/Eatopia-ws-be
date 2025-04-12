import {WebSocket} from "ws"

export class User {
    public id : string
    public ws : WebSocket
    public roomId : string

    constructor(id : string, ws : WebSocket, roomId : string) {
        this.id = id
        this.roomId = roomId
        this.ws = ws
    }

    
}