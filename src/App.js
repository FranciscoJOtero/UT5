import React, { Component } from 'react'
import Tabla from './Tabla'

class App extends Component {

    render() {

        return (

            <div className="App">
                <h1> tabla creada mediante un componente de clase que no utiliza componentes simples </h1>
                <Tabla/>
            </div>

        )

    }

}

export default App