import "../stylesheets/ExtensionCard.css"


export const ExtensionCard = () => {
  return (
    <>
      <div className="contenedor">
        <div className="contenedor-2">
          <img src="./public/logo-devlens.svg" alt="" />
          <div className="contenedor-textos">
            <h2>DevLens</h2>
            <p>Quickly inspect page layouts and visualize element boundaries.</p>
          </div>
        </div>

         <div className="contenedor-btn">
          <button>Remove</button>
         </div>
      </div>
    </>
  )
}
