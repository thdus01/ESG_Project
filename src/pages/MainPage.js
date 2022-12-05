import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/basic/Footer";
import Header from "../components/basic/Header";
import Nav from "../components/basic/Nav";

function MainPage() {
    return(
        <>
        <Header />
        <Nav />
        <Banner />
        <Footer />
        </>
    );
}

export default MainPage;