import { Link } from "react-router-dom";
import Menu from "./Menu";
import React from "react";
import Carousel from "./Carousel"
function Home() {
    return <>
        <Menu />
        <Carousel/>
        Pagina de inicio
    </>;
}

export default Home;