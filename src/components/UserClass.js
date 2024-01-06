import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    console.log(this.props.name + "Child constructor");

    // It will create whole big object and other states is written inside it
    this.state = {
      userInfo: {
        name: "dummy",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/manu6677");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log(this.props.name + "Child component did mount");

    // this.timer = setInterval(() => {
    //   console.log("Namaste React");
    // }, 1000);
  }

  componentDidUpdate() {
    console.log("update component");
  }

  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log("component will unmount");
  }

  render() {
    console.log(this.props.name + "Child render");

    const { name, location, public_repos, avatar_url } = this.state.userInfo;

    return (
      <div className="user-cardclass">
        <img src={avatar_url} alt="noImg" />
        <h2>Name: {name} (class)</h2>
        <h3>Repo: {public_repos} (class)</h3>
      </div>
    );
  }
}
export default UserClass;

/**
 * --Mounting--
 * Constructer (dummy)
 * render (dummy)
 *         <HTML dummy UI> (DOM is updated with dummy data)
 * Component Did Mount
 *      <API Call>
 *      <this.setState> (API's Data b/c state varibale is updated)
 *
 *  --Updating--(Reconciliation process)
 *  render (With new Data of API's)
 *         <HTML API DATA> (DOM is updated with API data)
 * Component will update called
 *
 * --Unmounting--
 *
 *
 */
