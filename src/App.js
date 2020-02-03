import React, { Component } from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'
/*import personajes from './personajes.json'*/
import Formulario from './Formulario'

class App extends Component {

    /*state = {
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
    } */

    /*state = { personajes }*/

    state = { personajes: [] }

    /*Para manejar los datos del formulario*/ 

    manejarEnvio = personaje => { 

        this.setState({personajes: [...this.state.personajes, personaje]}); 
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
                <h2> Añadir nuevo personaje </h2>
                <Formulario manejarEnvio = { this.manejarEnvio }/>
            </div>

        )

    }

}

export default App