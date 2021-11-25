import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        const Navegacion=styled.nav`
            
        margin-top: 100px;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: orange;
        width:50%;
        `
        
        return (
            <Navegacion className="container-fluid  top-0 justify-content-center">
            <Link to="/" className="nav-link">Guajolotas</Link>
            <Link to="/bebidas" className="nav-link">Bebidas</Link>
            <Link to="/tamales" className="nav-link">Tamales</Link>
        </Navegacion>
        )
    }
}
