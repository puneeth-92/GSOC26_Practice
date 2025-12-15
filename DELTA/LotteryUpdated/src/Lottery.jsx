import { useState } from "react"
import {genTicket} from "./helper"
import Ticket from "./Ticket"
import Button from "./Button"
export default function Lottery({n,winningFunc}){
    let [ticket,setTicket]=useState(genTicket(n));
    let isWin=winningFunc(ticket);
    console.log(isWin);
    let [msg,setMsg]=useState("");
    return(
        <div>
            <h1>Lottery</h1>
            <Ticket ticket={ticket}/><br />
            <Button/>
            <h2>{msg}</h2>
        </div>
    )
}