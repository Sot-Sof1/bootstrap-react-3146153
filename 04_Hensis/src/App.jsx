import './Styleheets/App.css'
import { Navbar } from './Components/NavBar'
import { Footer } from './components/Footer'
import { Tienda } from './components/Tienda'
import { NuestraMarca } from './Components/NuestraMarca'

export const App = () => {
    return( 
        <>
        <Navbar
        CambioImage="./public/Logo He.png"
        />
        <NuestraMarca/>
        <Footer/>
        <Navbar
        CambioImage="./public/Logo He.png"
        />
        <Tienda/>
        <Footer/>
        </>

    )
}