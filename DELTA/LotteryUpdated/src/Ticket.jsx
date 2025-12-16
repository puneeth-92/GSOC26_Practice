import TicketNum from "./TicketNum";
import "./Ticket.css";
export default function Ticket({ticket}){
    return(
        <div style={{textAlign:"center"}} className="ticket">
            {ticket.map((num,idx)=>(
                <TicketNum num={num} key={idx}/>
            ))}
        </div>
    )
}