import "../stylesheets/ExtensionCard.css"


export const ExtensionCard = ({cardTitle, cardImage, cardDescription}) => {
  return (
    <>
      <div className="contenedor">
        <div className="contenedor-2">
          <img src={cardImage} alt="" />
          <div className="contenedor-textos">
            <h2>{cardTitle}</h2>
            <p>{cardDescription}</p>
          </div>
        </div>

         <div className="contenedor-btn">
          <button>Remove</button>
         </div>
      </div>
    </>
  )
}
