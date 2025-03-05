import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
        avatar_url: "https://avatar_url.com",
        bio: "demo",
      },
    };

    // console.log(" child constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ranjith125-sourse");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    // console.log("child component did mount");
    // this.timer = setInterval(() => {
    //   console.log("Namaste from set interval");
    // }, 1000);
  }

  componentWillUnmount() {
    // console.log("component will unmount");
    // clearInterval(this.timer);
  }

  render() {
    // console.log("child render");
    const { name, location, avatar_url, bio } = this.state.userInfo;

    return (
      <div className="user-card p-5 flex-column justify-items-center">
        <div className="h-60 w-50">
          <img className="rounded-xl h-full w-full object-cover" src={avatar_url} />
        </div>
        <div className="text-center mt-7">
          <h3>Name : {name}</h3>
          <h3>Location : {location}</h3>
          <h3>Bio: {bio}</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
