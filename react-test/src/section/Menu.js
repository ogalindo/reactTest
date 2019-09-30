import React, {Component} from 'react';

function seleccionarOpcion(opcion) {
    this.state.view = opcion;
    console.log(this.state.view);
}

export default class Menu extends Component {
    constructor () {
        super()
        this.state = {
            view: 1
        }
    }
    render () {
        return (
            <div>
                <ul>
                    <li><a href="#" >Movies</a></li>
                    <li><a href="#" >Series</a></li>
                    <li><a href="#" >Favoritos</a></li>
                </ul>
            </div>
        );
    }
}