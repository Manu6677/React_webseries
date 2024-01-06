import { createContext } from "react";

const UserContext = createContext({
  loggedIn: "Default user",
});

export default UserContext;
