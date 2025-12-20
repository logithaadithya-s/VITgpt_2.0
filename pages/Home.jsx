import React from "react";
import Navbar from "./components/navbar";
import Sliders from "./components/Sliders";
import VITlinks from "./components/VITlinks";
import Footer from "../pages/components/Footer";
import Carosal from "./components/Carosal";

function Home(){
    return (
    <>
    <Sliders/>
    <Carosal/>
    <VITlinks/>
    <Footer/>
    </>);
}
export default Home