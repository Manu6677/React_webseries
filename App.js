import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
console.log(heading);

/**
  JSX -HTML-like or XML-like syntax and this is how we create h1 tag inside JSX(it is not a javascript or xml inside javasccript) JSX developed by facebook enginner
    -> what ever we write in JSX it is not pure Javascript, javascript engine does not understand it
      
    (1) JSX ========> React.createElement ==========> React Element js object =======> HTMLElement(render)
       -Parcel which uses Babel to transpiled JSX into React.createElement before reach js engine
           -Root.render do not understand JSX hence it transpiled into React.createELement before

 */
const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>;
console.log(jsxHeading);

// React FUnctional component is just a javascript function which return JSX Element or React Element

const ComponentComposition = () => (
  <h2>
    This is a Component Compostion example (Means you include one component into
    other)
  </h2>
);

// Suppose the there is some Malicious API which we are calling in the program
//  -> and excuting inside JSX but JSX first sanitize it then run it to prevent the Cross Site scripting attack

const HeadingComponent = () => (
  <div id="conatiner">
    {/* Since functional component is javascript function at the end of day*/}
    {ComponentComposition()}
    <ComponentComposition />
    <h1>NAmaste React Functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);

/**
  => What makes React code faster and readable ? 
      ans) Your Code is Readable because you are writting JSX, JSX is not React
 
  -React is JavaScript At end of Day
  -Functional Component is a javaScript function who return JSX At end of Day
  -JSX is React.createElement At end of Day
  -React.createElement is Object At end of Day
 */
