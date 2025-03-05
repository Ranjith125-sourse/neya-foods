import { createContext } from "react";


const UserContext = createContext({
    loggedInUser : "Guest",
    phoneNo: "xxxxxxxxxx"
})

export default UserContext;