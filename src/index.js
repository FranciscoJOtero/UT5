import React from "react"; 
import { render } from "react-dom"; 
import { Router, Link } from "@reach/router";

const Aplicacion = () => (

    <div>
        <h1> Manejo de rutas en React </h1>
        <nav>
            <Link to="/"> Inicio </Link>
            <br/>
            <Link to = "AcercaDe"> Acerca De... </Link>
        </nav>

        <Router>
            <Inicio path ="/"/>
            <AcercaDe path="/AcercaDe"/>
        </Router>

    </div>

)

const Inicio = () => (

    <div>
        <h2> Estas en Inicio </h2>
    </div>

)

const AcercaDe = () => (

    <div>
        <h2> Estas en Acerca De </h2>
    </div>

)

render(<Aplicacion/>, document.getElementById('root'));