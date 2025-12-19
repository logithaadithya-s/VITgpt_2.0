import Img from "../../src/assets/vitgpt123.png"
import "../styles/Slider.css"

function Sliders(){
    return (
    <div className="mainimg">
        <div className="maininnerimg">
            <h1 className="maintext">Turn Doubts to Dust, with questions well-bust</h1>
            <p className="subtext">Upload your notes & PYQs to VITGPT and help students learn smarter! </p>
            <div className="mainnavbutton">
                <button className="quote-btn">Upload</button>
            </div>
        </div>
        <div className="mobile_img">
            <img src={Img} className="quotesimg" alt="VITGPT AI"/>
        </div>
    </div>
    );
}
export default Sliders;