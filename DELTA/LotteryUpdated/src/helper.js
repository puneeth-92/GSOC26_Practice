export  function Sum(ticket){
    let sum=0;
    for(let i=0;i<ticket.length;i++){
        sum+=ticket[i];
    }
    return sum===15;
}

export  function genTicket(n){
    let ticket=[];
    for(let i=0;i<n;i++){
        let num=Math.floor(Math.random()*10);
        ticket.push(num);
    }
    return ticket;
}