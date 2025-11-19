import "../styleheets/collage.css"


export const Collage = () => {
  return (
    <>
      <div className="contenedor">
        <div className="contenedor-1" style={{width: "100%"}}>
          <div className="cuadro1  bg-primary" style={{width: "80px", height: "80px"}}> About Us </div>
          <div className="cuadro2  bg-success" style={{width: "80px", height: "80px"}}> About Us </div>
          <div className="cuadro3  bg-danger" style={{width: "80px", height: "80px"}}> About Us </div>
        </div>
        <div className="contenedor-2"></div>
        <div className="contenedor-3"></div>
      </div>
    </>
  )
}
