//import react, {useState} from "react";
import style from "../../component/checkbox/stylecheck.css";




function Check() {
    const handleCheckbox = () => {
        const valueCheckbox = window.document.querySelector("#switch").checked
        console.log(valueCheckbox)

    }

    return (
        <div className="container-check">
            <p className="anual"> Annually   </p>
            <label class="switch">
                <input onClick={handleCheckbox}  id="switch"  type="checkbox"/>
                    <span class="slider round"></span>
            </label>
            <p className="mes">Monthly</p>

        </div>
    );
}
export default Check;
