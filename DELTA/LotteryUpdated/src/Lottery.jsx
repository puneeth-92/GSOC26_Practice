import { useState ,useEffect} from "react"
import {genTicket} from "./helper"
import Ticket from "./Ticket"
import Button from "./Button"
export default function Lottery({n,winningFunc}){
    let [ticket,setTicket]=useState(()=>genTicket(n));
    let [bgColor, setBgColor] = useState("");

    function handleSub(){
        let ticket=genTicket(n);
        setTicket(ticket);
    } 

    const isWin = winningFunc(ticket);

    useEffect(() => {
        setBgColor(isWin ? "green" : "red");
    }, [ticket]);

    useEffect(() => {
        if (!bgColor) return;

        document.body.style.backgroundColor = bgColor;

        const timer = setTimeout(() => {
            document.body.style.backgroundColor = "";
            setBgColor("");
        }, 100);

        return () => clearTimeout(timer);
    }, [bgColor]);
  
    
    return(
        <div>
            <h1>Lottery</h1>
            <Ticket ticket={ticket}/><br />
            <Button action={handleSub}/>
            <h2 style={{width: "300px",textAlign: "center",minHeight: "1.5em"}}>{isWin?"Congratulations You won":"Better Luck next time"}</h2>
        </div>
    )
}