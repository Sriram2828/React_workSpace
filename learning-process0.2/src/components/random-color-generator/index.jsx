import { useState } from "react";
import "./style.css";

// Creating the Random colour generator project component
export default function RandomColorGenerator(){
    // hook to identify the type of color indication
    const [typeOfColor,setTypeOfColor] = useState("hex");
    // hook to update the generate the color 
    const [color,setColor] = useState("#000000");

    // function to generate the random color
    function randomColorPicker(length){
        return Math.floor(Math.random()*length);
    }
    // function to generate the random hex color
    function handelRandomHexColor(){
        // all hexa digits
        const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        // the hex color pattern will starts with the '#' example[#345623]
        let hexColor = "#";

        // loop to generate a random hexa combination, the max length should be 6
        for(let i = 0; i < 6; i++){
            // using the random color picker function generate a random color
            hexColor += hex[randomColorPicker(hex.length)];
        }
        // store the generated random color in the setcolor usestate hook
        setColor(hexColor);
    }

    // function to generate the random RGB color
    function handelRandomRGBColor(){
        // the 256 is the max limit of the rgb color pattern "length"
        const r = randomColorPicker(256);
        const g = randomColorPicker(256);
        const b = randomColorPicker(256);

        // store the generated random color in the setcolor usestate hook
        setColor(`rgb(${r},${g},${b})`);
    }

    // design of the user interface
    return (
        <div className="wrapper" style={{background: color}}>
            {/* Buttons for changing the options */}
            <div className="btns">
                <button onClick={() => setTypeOfColor("hex")}>Hex Color</button>
                <button onClick={() => setTypeOfColor("rgb")}>RGB Color</button>
                <button onClick={typeOfColor === "hex" ? handelRandomHexColor : handelRandomRGBColor}>
                    Generate Random Color
                </button>
            </div>
            {/* div to display the details */}
            <div className="content">
                <h3>{typeOfColor === "rgb" ? "RGB Color" : "Hex Color"}</h3>
                <h2>{color}</h2>
            </div>
        </div>
    ) 
}