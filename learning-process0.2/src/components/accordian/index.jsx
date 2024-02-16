import { useState } from "react";
import data from "./data";
import "./style.css";

// Creating the main project component
export default function Accordian(){
    // hook for detect the selected option
    const [selected, setSelected] = useState(null);
    // hook for detect the clicking the multi selection button
    const [enableMultiSelection, setEnableMultiSelection] =useState(false);
    // hook for storing the id's of the selected data
    const [multiSelection, setMultiSelection] = useState([]);

    // function to handle the single selection
    function handleSingleSelection(getCurrentId){
        // setting the current data 'id' value to the -> usestate hook
        setSelected(getCurrentId === selected ? null : getCurrentId);// this ternary operation will perform if the data is already selected then it will unselect the data
    }

    // function to handle the multi selection
    function handleMultiSelection(getCurrentId){
        // to copy the multi selected data
        let cpyMultiSelection = [...multiSelection];
        const findIndexOfCurrentId = cpyMultiSelection.indexOf(getCurrentId);

        // console.log(findIndexOfCurrentId);
        if (findIndexOfCurrentId === -1) {
            // add the selected data into the list (open the selected data)
            cpyMultiSelection.push(getCurrentId);
        } else {
            // if the selected data is already in the list (close the selected data)
            cpyMultiSelection.splice(findIndexOfCurrentId, 1);
        }
        setMultiSelection(cpyMultiSelection);
    }
    

    // console.log(selected, multiSelection);
    return (
        <div className="container">
            {/* button to enable the multiple selection option */}
            <button onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>
                Enable MultiSelection
            </button>
            <div className="accordian">
                {/* checking the availability of the data */}
                {
                    // used the Ternary operator for checking
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">

                                {/* Based on the enabling the multi select button,
                                    while clicking the title part the 'id' of the 
                                    selected data will be send to the respected selection function */}
                                <div 
                                    onClick={enableMultiSelection 
                                        ? ()=>handleMultiSelection(dataItem.id) 
                                        : ()=>handleSingleSelection(dataItem.id)} 
                                className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {/* displaying the answer for the selected data
                                    by rendering it in a another div 
                                    
                                    if the multiselection option is enabled then the if '?' condition will work 
                                    else the else ':' condition will work
                                */}
                                {enableMultiSelection
                                    ? multiSelection.indexOf(dataItem.id) !== -1 && (
                                        <div className="acc-content ">{dataItem.answer}</div>
                                    ) : selected === dataItem.id && (
                                        <div className="acc-content ">{dataItem.answer}</div>
                                    )
                                }
                                {/* {selected === dataItem.id ||
                                multiple.indexOf(dataItem.id) !== -1 ? (
                                  <div className="content">{dataItem.answer}</div>
                                ) : null} */}

                            </div>
                        ))
                    ) : (
                        <div>No data available</div>
                    )
                }
            </div>
        </div>
    );
}