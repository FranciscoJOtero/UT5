import React, { Component } from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'

class App extends Component {

    state = {
        personajes: [
            {
                name: 'Payton Hobart',
            },
            {
                name: 'Wendy Carr',
            },
            {
                name: 'Mina',
            },
            {
                name: 'Jonathan Harker',
            },
            {
                name: 'Drácula',
            },
            {
                name: 'Once',
            },
            {
                name: 'Jim Hopper',
            }
        ]
    }

    /* Método para borrar personajes */

    borrarpersonaje = indice => {

        const { personajes } = this.state;

        this.setState({
            personajes: personajes.filter((personaje, i) => {

                return i !== indice;

            })
        });
    }

    render() {

        /* Para utilizar en state */

        const { personajes } = this.state

        const actoresactrices = [
            {
                nombre:'Joel',
                apellidos: 'Edgerton',
            },
            {
                nombre:'carmen',
                apellidos: 'Maura',
            },
            {
                nombre:'Luis',
                apellidos: 'Tosar',
            },
            {
                nombre:'Chloe',
                apellidos: 'Grace Moretz',
            },
        ]

        return (

            <div className="App">
                <h1> tabla creada mediante un componente de clase que no utiliza componentes simples </h1>
                <Tabla/>
                <h1> tabla creada mediante un componente de clase que utiliza componentes simples </h1>
                <TablaComponentesSimples/>
                <h2> Tabla creada mediante un componente de clase que utiliza paso de parámetros con props </h2>
                <TablaComponentesSimplesProps datosActoresActrices = {actoresactrices} />
                <h2>Tabla creada con un componente simple (con state y que permite eliminar elementos) que utiliza dos componentes simples</h2>
                <TablaComponentesSimplesState datosPersonaje= { personajes } borrarPersonaje = { this.borrarpersonaje } />
            </div>

        )

    }

}

export default App