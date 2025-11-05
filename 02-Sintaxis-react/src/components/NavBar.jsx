import React from 'react'
import "../stylesheets/NavBar.css"

export const NavBar = () => {
    return (
        <div className='seccion-principal'>

            <div className='espacio'></div>

            <div className="contenedor-nav">
                <div className="Navegador">
                    <img src="./public/logo.png" alt="" />
                    <h2>Extensions</h2>
                </div>
                <button className="btn-mode">☀</button>
            </div>

        </div>
    )
}
