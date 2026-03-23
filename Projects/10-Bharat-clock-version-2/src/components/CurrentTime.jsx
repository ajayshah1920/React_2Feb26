import { useState, useEffect } from 'react'

let CurrentTime = () =>{
    //let time = new Date();
    let [time, setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);

        return ()=> {
            clearInterval(intervalId);
            console.log("Cancelled the Interval");
        }
    }, []);
    return <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>

}

export default CurrentTime;