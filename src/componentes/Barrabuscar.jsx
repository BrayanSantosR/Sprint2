import React, { Component } from 'react'
import styled from 'styled-components';
import { Image } from 'react-bootstrap';

export default class Barrabuscar extends Component {
    render() {
        const Alineacion=styled.div`
                    
        padding: 5px;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 10px;
        `
        const BtnBuscar=styled.button`
        height: 35px;
        width:40px;
        margin-left: 25%;
        `
        const BarraBuscar=styled.input`
        width:50%;
        height: 30px;
        
        `
        const ContenedorBarra=styled.div`
         width:100%;             
        padding: 10px;
        display: flex;        
        align-items: center; 
        flex-direction: row;      
        `

        return (
            <Alineacion>
                <h1>Nada como una Guajolota para empezar el dia</h1>
               <ContenedorBarra>
                   <BtnBuscar id="buscar"><img src="https://res.cloudinary.com/brayanimagenes/image/upload/v1637718403/Sprint2/Vector_ndukdl.png"></img></BtnBuscar><BarraBuscar id="buscado" placeholder="Sabor de guajalota,bebida o tamal"></BarraBuscar>
                </ContenedorBarra>
            </Alineacion>
        )
    }
}
