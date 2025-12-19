import React from "react";
import Navbar from "./components/navbar";
import Sliders from "./components/Sliders";
import VITlinks from "./components/VITlinks";
import Footer from "../pages/components/Footer";

function Home(){
    return (
    <>
    <Sliders/>
    <VITlinks/>
    <Footer/>
    </>);
}
export default Home