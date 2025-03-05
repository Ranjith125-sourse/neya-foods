import UserClass from "./UserClass";
import { Component, UserContext, } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div className="m-7 p-5 ">
        <h1 className="text-3xl mb-7 font-bold text-center text-violet-400 font-mono underline decoration-green-500">About us</h1>
        <UserClass
          name={"First"}
          Location={"Haryana"}
          contact={"Rankesh@gmail.com"}
        />
        {/* <div>
        LoggedIn User : 
          <UserContext.Consumer>
            {({loggedInUser}) => (
              <h1>{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div> */}
      </div>
    );
  }
}

export default About;
