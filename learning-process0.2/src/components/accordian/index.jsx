import { useState } from "react";
import data from "./data";
import "./style.css";

// Creating the main project component
export default function Accordian(){
    // usestate hook for detect the selected option
    const [selected, setSelected] = useState(null);

    // function to handle the single selection
    function handleSingleSelection(getCurrentId){
        // setting the current data 'id' value to the -> usestate hook
        setSelected(getCurrentId === selected ? null : getCurrentId);// this ternary operation will perform if the data is already selected then it will unselect the data
    }

    return(
        <div className="container">
            <div className="accordian">
                {/* checking the availability of the data */}
                {
                    // used the Ternary operator for checking
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item">

                                {/* While clicking the title part the 'id' of the selected data will be send to
                                    the single selection function */}
                                <div onClick={()=>handleSingleSelection(dataItem.id)} className="title">
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div>

                                {/* displaying the answer for the selected data
                                    by rendering it in a another div */}
                                {
                                    selected === dataItem.id ?(
                                        <div className="content">{dataItem.answer}</div>
                                    ) : (null)
                                }

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