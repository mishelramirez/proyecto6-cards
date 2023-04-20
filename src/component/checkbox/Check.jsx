import react from "react"
import style from "../../component/checkbox/stylecheck.css"

function Check() {
    return (
        <div className="container-check">
            <p className="anual"> Annually   </p>
            <input type="checkbox" className="check" id="switch" />
            <label htmlFor="switch" className="lbl"></label>
            <p className="mes">Monthly</p>
        </div>
    );
}
export default Check;