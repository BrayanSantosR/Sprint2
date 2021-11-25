import React, {useEffect, useState} from 'react';
import styled from 'styled-components';

const url="https://bebidassprin2.herokuapp.com/bebidas/"

export const Bebidas = ({lproductos}) => {
    const [productos, setproductos] = useState([])
    useEffect(() => {//me esta cargando al inicio lo que tiene getData al momento de cargar el dom
        getData();
      }, [])
      
      
        const getData = async() => {
          const respuesta = await fetch(url);
          const data = await respuesta.json()
           setproductos(data)//es la funcion que me modifica el estado, en este caso me le pasa la data de la api
        }
        const Tarjeta = styled.div`   
 display: flex;
    position: static;
    width: 330px;
    height: 100px;
    margin-top: 2%;
    margin-left: 2%;   
    background-color:green;
    padding: 2px; 
     
       
 `
 const Contenedor=styled.div`
 
    justify-content: center;
    align-items: center;       
    padding: 20px;
    position: absolute;
    width: 40%;    
    left: 35%;     
    background-color:silver;
    margin-bottom: 150px;
 `
 const H3=styled.h3`
  color:orange;
 `
 const Boton=styled.button`
 margin-top:0%;
 position: absolute; 
 height: 100px; 
 width: 325px;
 opacity: 0.5;`

    return (
        <Contenedor>
             {
                productos.map(data => (
                    data.categoria=="bebidas"?
                    <Tarjeta key={data.id}> 
                    <h4 key={data.id}></h4>
                    <Boton></Boton>
                        <img src={data.imagen} width="100"/>
                        <div>
                        <h4>{data.nombre}</h4>
                        <H3>${data.precio} MXN</H3>
                        </div>
                        
                    
                    </Tarjeta>
                    :<div></div>
                    
                   
                ))
                
            }
          
        </Contenedor>
    )
}

export default Bebidas;
