import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../basic/Footer";
import Header from "../basic/Header";
import Nav from "../basic/Nav";
import './Step1.css';
import StepperHooks from "./Stepper";

function Step1() {

    // StepperHooks => Stepper.js 파일 참조
    
    return(
        <>
        <Outlet />
        <Header />
        <Nav />
           <div>
               <StepperHooks />
           </div>
        <Footer />
        </>
    );
}

export default Step1;