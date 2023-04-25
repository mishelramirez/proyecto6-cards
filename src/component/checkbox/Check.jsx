import react from "react"
import style from "../../component/checkbox/stylecheck.css"
import { useState } from "react";



function Check(props) { 
    const {handlChecked} = props 


    const handleCheckbox = () => {
        const valueCheckbox = window.document.querySelector("#switch").checked
        console.log(valueCheckbox)
       handlChecked (valueCheckbox)

    }


    return (
        <div className="container-check">
            <p className="anual"> Annually   </p>
            <label class="switch">
                <input onClick={handleCheckbox} id="switch"  type="checkbox"/>
                    <span class="slider round"></span>
            </label>
            <p className="mes">Monthly</p>

        </div>
    );
}
export default Check;
