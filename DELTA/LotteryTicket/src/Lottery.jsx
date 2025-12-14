import { useState,useEffect } from "react";
export default function Lottery(){
    let [num,setNum]=useState(null);
    let [status,setStatus]=useState("BEST WISHES");
    let [bgColor, setBgColor] = useState("");

    useEffect(() => {
        if (!bgColor) return;

        document.body.style.backgroundColor = bgColor;

        const timer = setTimeout(() => {
            document.body.style.backgroundColor = "";
            setBgColor("");
        }, 100);
        return () => clearTimeout(timer);
    }, [bgColor]);

    function verifyTicket(){
        let sum=0;
        let q=num;
        while(q!=0){
            sum+=q%10;
            q=Math.floor(q/10);
        }
        if(sum===15){
            setStatus(()=>"Congratulations,You Won the Lottery");
            setBgColor(()=>"green");
        }else{
            setStatus(()=>"Better Luck Next Time!");
            setBgColor(()=>"red");
        }
        setTimeout(()=>{
            setBgColor(()=>"");
        },1000)
    }
    function generateNew(){
        let q=Math.round((Math.random()*999)+1);
        setNum(()=>q);
        setStatus(()=>"BEST WISHES");
    }
    return (

        <div>
            <h1>Lottery</h1>
            <h1>{status}</h1>
            {num!=null ?<><h3>Your Ticket : {num}</h3><button onClick={verifyTicket}>Verify Ticket</button><br /><br /></>:null}
            <button onClick={generateNew}>Generate New Ticket</button>
        </div>
    )
}