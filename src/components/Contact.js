import { useContext } from "react";
import UserContext from "../utils/UserContext.js";

const Contact = () =>{
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="m-20 text-center">
            <h1 className="text-4xl font-mono font-bold text-yellow-400 underline decoration-green-500">Contact</h1>
            <h1 className="mt-7 text-2xl text-green-500"><span className="text-yellow-400 font-bold">Name :</span> {loggedInUser}</h1>
            <h1 className="mt-7 text-2xl text-green-500"><span className="text-yellow-400 font-bold">Phone no:</span>  7893428246</h1>
            <h1 className="mt-7 text-2xl text-green-500"><span className="text-yellow-400 font-bold">Email:</span>  kadaparanjith15@gmail.com</h1>
        </div>
    )
}

export default Contact;