import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>This is About Page</h2>
        <UserContext.Consumer>
          {({ loggedIn }) => <h2 className="font-serif">{loggedIn}</h2>}
        </UserContext.Consumer>
        <UserClass name={"First Child"} />
      </div>
    );
  }
}

export default About;
