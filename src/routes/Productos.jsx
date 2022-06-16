import React from 'react'
import "../css/productos.css"
 import BuscadorProductos from '../components/productos/BuscadorProductos'
 import GrillaProductos from '../components/productos/GrillaProductos'
const Productos = () => {
    return(
        <main>
            <BuscadorProductos></BuscadorProductos>
            <GrillaProductos></GrillaProductos>
        </main>
    )
}

export default Productos