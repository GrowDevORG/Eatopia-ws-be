import {WebSocket} from "ws"
import { User } from "./User"

export class Restaurant {
    public id : string
    public ws : WebSocket
    private rooms : Map<string, User>

    constructor(id : string, ws : WebSocket) {
        this.id = id
        this.ws = ws
        this.rooms = new Map();
    }

    addUser(user : User, roomId : string) {
        if (!this.rooms.get(roomId)) {
            this.rooms.set(roomId,user);
        }
    }
    
    
}