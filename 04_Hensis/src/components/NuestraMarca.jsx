export const NuestraMarca = () => {
    return (
         <>
            <div className="contenedor-principal">
                <div className="container bg-black text-white mt-5 p-4 rounded" style={{ width: '80%' }}>
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
                            <h1 className="fw-bold" style={{ fontSize: '10vh' }}>HENSIS:</h1>
                            <p>La sabiduría que nace de la introspección.</p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center">
                            <img src="../public/Logo.png" alt=" " className="img-fluid"style={{ maxWidth: '60%' }}/>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 text-center " style={{ width: '70%' }}>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 d-flex ">
                            <div>
                            <p>Hensis es una Marca creativa que explora lo introspectivo a través de narrativas visuales. Creamos desde el alma para quienes buscan historias que transforman.</p>
                            </div>
                            <div>
                                 <img src="../public/ala-buho.png" alt="" className="img-fluid mt-3" style={{width:'25%'}}/>
                            </div> 
                        </div>
                    </div>
                    <div className="row justify-content-center mt-4">
                        <div className="col-12 col-lg-4 text-center">
                            <h3 className="fw-bold">¿Por qué nació Hensis?</h3>
                        </div>
                        <div className="col-12 col-lg-6">
                            <p className="text-center">Nacimos del deseo de contar historias distintas. De crear mundos que no solo se ven, sino que se sienten.</p>
                        </div>
                    </div>
                </div>
                <div className="container mt-5" style={{ width: '80%', height: '60vh' }}>
                    <div class="container text-center mb-4">
                        <div class="row align-items-center">
                            <div class="col" >
                                <img src="../public/imagotipo.png" alt="" style={{ width: '85%', opacity: '0.5' }} />
                            </div>
                            <div class="col">
                                <img src="../public/tipografias.png" alt="" style={{ width: '105%' }} />
                            </div>
                            <div class="col">
                                <img src="../public/colorimetria.png" alt="" style={{ width: '85%', opacity: '0.5' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-5">
                        <div className="col-12">
                            <p className="mb-3">¿Quieres conocer a fondo nuestra identidad?</p>
                            <button className="btn btn-info p-2" style={{ textDecoration: 'underline' }}>[Ver Manual de Marca PDF]</button>
                        </div>
                    </div>
                </div>
                <div className="container my-5">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 text-center text-lg-start mb-5 mb-lg-0">
                            <h2 className="fw-bold">Nuestro Primer Paso: El cómic</h2>
                            <p className="mt-5">
                                Nuestro primer universo narrativo es un cómic<br />
                                distópico que lleva nuestra filosofía al límite.
                            </p>
                            <p className="mt-5">
                                ¿Quieres colaborar, difundir o simplemente conectar con nuestra visión?
                            </p>
                            <div className="d-flex justify-content-center justify-content-lg-start">
                                <button className="btn btn-info mt-4" style={{textDecoration:'underline'}}>[Contáctanos]</button>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="row g-3">
                                <div className="col-6">
                                    <img src="../public/img1.png" className="img-fluid rounded" alt="" />
                                </div>
                                <div className="col-6">
                                    <img src="../public/img2.png" className="img-fluid rounded" alt="" />
                                </div>
                                <div className="col-6">
                                    <img src="../public/img3.png" className="img-fluid rounded" alt="" />
                                </div>
                                <div className="col-6">
                                    <img src="../public/img4.png" className="img-fluid rounded" alt="" />
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <button className="btn btn-info"style={{textDecoration: 'underline'}}>Cómic</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}