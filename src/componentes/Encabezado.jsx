import React, { Component } from 'react';
import styled from 'styled-components';
import { Image } from 'react-bootstrap';
import Barrabuscar from './Barrabuscar';

export default class Encabezado extends Component {
    render() {
        const Encabezado = styled.div`       
       
        border-radius: 10px;
        padding:30px;   
        height: 20px;  
        
        
        
    `
    const Carrito= styled.button`
          width: 40px; 
          margin-left: 80%;   
    `   

        return (
            <div>
            <Encabezado>
                <Image src="https://res.cloudinary.com/brayanimagenes/image/upload/v1637718048/Sprint2/Ilustraci%C3%B3n_sin_t%C3%ADtulo_66_1_2x_e76ldd.png" rounded width="150px" style={{ textAlign: "center" }} />
                <Carrito >
                    <img src="https://res.cloudinary.com/brayanimagenes/image/upload/v1637718282/Sprint2/shopping-cart_jdbofg.png"></img></Carrito>               
            </Encabezado>
            <Barrabuscar/>
            </div>
        )
    }
}
