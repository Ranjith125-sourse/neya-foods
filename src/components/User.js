import { useEffect, useState } from "react";


const User = (props) =>{
    const [count] = useState(0);
    const [count2] = useState(1);

    useEffect(()=>{
        // console.log("useEffect")
        // const timer = setInterval(()=>{
        //     console.log("namaste from functional component");
        // }, 1000)

        return() => {
            // clearInterval(timer);
            // console.log("useEffect return");
        }
    },[]);
    // console.log("render");

    return(
        <div className="user-card">
            <h1
            >Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h3>Name: {props.name}</h3>
            <h3>Location: {props.Location}</h3>
            <h3>Contact: {props.contact}</h3>
        </div>
    )
}

export default User;