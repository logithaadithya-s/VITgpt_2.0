import React from "react";
import VITlogo from "../../src/assets/vitgptlogo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar({subjects}){
    return (
    <>
    <header className="vitgpt-header bg-black-1 w-[100%] h-[6rem]">
        <nav className="vitgpt-navbar flex flex-row rounded-full bg-blue-300 h-[5rem]">
            <img src={VITlogo} className="vitgpt-logo w-[10%] my-[1.5%] pl-[1rem]"/>
            <div>
                <input list="subject" placeholder="Select subject" className="subject-input "/>
                <datalist id="subject">
                    {subjects.map((element,index) =>{
                        return <option key={index} value={element.SubjectName}/>;
                    })}        
                </datalist>
            </div>
            <button className="upload-button border-[0.25rem] border-white rounded-full py-[1px] h-[2.9rem]">UPLOAD</button>
        </nav>
    </header>
    </>
    );
}
export default Navbar