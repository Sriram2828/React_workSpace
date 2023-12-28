import Members from "./seperateCom2";
function Family() {
  //probs in react
  const Character = {
    father: "kind and protective",
    mother: "lovely and joyfull",
    son: "playfull and kind",
    daughter: "lovely and productive",
  }; //created an object to use in the separateCom2 as a prop "properties"
  return (
    <div>
      <h2>Good and happy family</h2>
      {/*sending the prop to the component just like an attribute*/}
      <Members behavior={Character} />{" "}
    </div>
  );
}
export default Family;
// this component is imported to the maincomponent App.js
