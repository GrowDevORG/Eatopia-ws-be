import {WebSocket} from "ws"
import { User } from "./User"

export class Rider {
    public id : string
    public ws : WebSocket
    private user : User

    constructor(id : string, ws : WebSocket) {
        this.id = id
        this.ws = ws
    }

    assignUser (user : User) {
        this.user = user;
    }

    

}