import React from "react";
import './root.css'
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/header";
import NewsLetter from "./components/NewsLetter/newsletter";
import Card from "./components/card/card";
import Footer from "./components/footer/footer";
import Footer_bottom from "./components/footer/foot";

function Root() {
    return (
        <div>
            <Navbar />
            <Header />
            <Card />
            <NewsLetter />
            <Footer/>
            <Footer_bottom/>
        </div>
    )
}

export default Root