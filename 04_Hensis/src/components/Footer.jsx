export const Footer = () => {
    return (
        <>
        <footer className="bg-black text-white py-4 d-flex justify-content-center align-items-center" style={{ height: '45vh' }}>
            <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
                <div className="mb-3 mb-md-0">
                    <img src="../public/logo.png" alt="Logo Hensis" style={{ height: '80px' }} />
                </div>
                <div className="text-center flex-grow-1 mx-4">
                    <nav>
                        <ul className="list-unstyled d-flex justify-content-center gap-4 mb-1">
                            <li><a href="#nuestra-marca" className="text-white text-decoration-underline">Nuestra marca</a></li>
                           {/*  <li><a href="#quienes-somos" className="text-white text-decoration-underline">Quiénes somos</a></li> */}
                            <li><a href="#comic" className="text-white text-decoration-underline">Comic</a></li>
                            <li><a href="#tienda" className="text-white text-decoration-underline">Tienda</a></li>
                        </ul>
                    </nav>
                    <hr className="border-danger" />
                    <p className="text-muted" style={{ fontSize: '0.75rem' }}>
                        Legal · Centro de seguridad y privacidad · Política de Privacidad · Cookies · Información sobre los anuncios · Accesibilidad
                    </p>
                </div>
                <div className="d-flex flex-column align-items-center gap-3">
                    <span>Redes</span>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>  
            </div>
        </footer>
        <div className="bg-secondary text-center"> @2025 </div>
        </>
    )
}