import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import About from "./Components/seperateClassCom";

//just to show we can create like this
function SampleCom() {
  return (
    <sample>
      this components is a components that created inside the index.js file
    </sample>
  );
}
 
// creating props for the classComponent 
const aboutfamily = "happy and important place to live";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SampleCom />
    <App />  
    <About aboutfamily = {aboutfamily} /> 
    {/*sending the prop to the class component just like an attribute*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
