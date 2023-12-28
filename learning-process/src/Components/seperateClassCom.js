import React from "react";

//create class as a component
class About extends React.Component {
  render() {
    //destructuring the props in a class component
    const {aboutfamily} = this.props 
    // const text =
    //    `Hi! I'm Ram this is my family, i love my family ,${aboutfamily}`;
    return (
      <div>
        <h2>About : Hi! I'm Ram this is my family, i love my family, {aboutfamily}</h2>
      </div>
    );
  }
}
export default About;
// this component is imported directly to the root index.js
