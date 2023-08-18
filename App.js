/*React element is nothing just a normal javascript object and props is attributes and children
   -> Render method takes that object and putting h1 tag and render it
*/

/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>Hello React</h1>
 *      <h1>Hello React 2</h1>
 *    </div>
 *    <div id="child2">
 *      <h1>Hello React3</h1>
 *      <h1>Hello React4</h1>
 *    </div>
 * </div>
 *
 */
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello React"),
    React.createElement("h1", {}, "Hello React2"),
  ]),
  [
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Hello React3"),
      React.createElement("h1", {}, "Hello React4"),
    ]),
  ],
]);
console.log(heading);

/*Now to create root in create where it can do all dom manipulation and rendring*/
const root = ReactDOM.createRoot(document.getElementById("root"));

/*while it is rendering on dom convert it self and putup to dom */
root.render(heading);
