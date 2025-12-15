export const Tienda = () => {
    return (
        <>
            <section className="py-5 text-center" style={{ height: '180vh' }}>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center mb-4">
                        <div className="col-2 col-md-1 d-flex justify-content-end">
                            <img src="../public/ala-buho-izquierda.png" alt="alas izquierda" style={{ width: "60px" }} />
                        </div>
                        <div className="col-8 col-md-6">
                            <p className="fw-semibold mb-0">¡Muy pronto podrás llevar contigo parte de nuestras historias!</p>
                            <p className='fw-semibold mt-5'>¡Lo que viene!</p>
                        </div>
                        <div className="col-2 col-md-1 d-flex justify-content-start">
                            <img src="../public/ala-buho.png" alt="alas derecha" style={{ width: "60px" }} />
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <div className="row g-4 justify-content-center">
                        <div className="col-12 col-md-4">
                            <div className="position-relative">
                                <img src="../public/sudadera.png" alt="" className="img-fluid w-100" style={{ opacity: 0.6 }} />
                                <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ color: "white" }}>
                                    <p className="m-0">Buzo negro con estampado de búho</p>
                                    <p className="m-0 fw-bold">34.000 COP</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="position-relative">
                                <img src="../public/camisa-alas.png" alt="" className="img-fluid w-100" />
                                <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ color: "white" }}>
                                    <p className="m-0">Camisa blanca con estampado de alas</p>
                                    <p className="m-0 fw-bold">34.000 COP</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="position-relative">
                                <img src="../public/camisa-ojos.png" alt="" className="img-fluid w-100" style={{ opacity: 0.6 }} />
                                <div className="position-absolute bottom-0 start-0 w-100 p-2" style={{ color: "white" }}>
                                    <p className="m-0">Camisa blanca con estampado</p>
                                    <p className="m-0 fw-bold">34.000 COP</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                <section className="py-5 mt-5">
                    <div className="container">
                        <div className="row justify-content-center align-items-start g-5">
                            <div className="col-12 col-md-6 text-center">
                                <p className="fw-semibold ">¿Quieres enterarte cuando lancemos nuestra primera colección?</p>
                                <div className="position-relative d-flex justify-content-center">
                                    <form className="bg-black text-white p-4 rounded" style={{ width: "100%", maxWidth: "400px" }}>
                                        <fieldset>
                                            <div className="mb-3 text-start">
                                                <label htmlFor="nombre" className="form-label">Nombre:</label>
                                                <input type="text" id="nombre" className="form-control" placeholder="Tu nombre"/>
                                            </div>
                                            <div className="mb-3 text-start">
                                                <label htmlFor="correo" className="form-label">Correo:</label>
                                                <input type="email" id="correo" className="form-control" placeholder="Tu correo" />
                                            </div>
                                            <button type="submit" className="btn btn-secondary mt-2 w-50">
                                                Enviar
                                            </button>
                                        </fieldset>
                                    </form>
                                    <img src="../public/H roja.png" alt="decoración" className="position-absolute"
                                        style={{ left: "-6.5vh", top: "32.5vh", width: '20%' }} />
                                </div>
                            </div>
                            <div className="col-12 col-md-6 text-center">
                                <p className="fw-semibold mb-4">¿Qué te gustaría encontrar en la tienda?</p>
                                <div className="position-relative d-flex justify-content-center">
                                    <img src="../public/H roja.png" alt=" " className="position-absolute" style={{ right: "-42px", top: "190px", width: '20%' }} />
                                    <form className="bg-black text-white p-4 rounded" style={{ width: "100%", maxWidth: "400px" }}>
                                        <fieldset>
                                            <div className="mb-3 text-start">
                                                <textarea className="form-control" rows="4" placeholder="Escribe tu sugerencia..."></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-secondary mt-2 w-75">
                                                Enviar sugerencia
                                            </button>

                                        </fieldset>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>

        </>
    )
}