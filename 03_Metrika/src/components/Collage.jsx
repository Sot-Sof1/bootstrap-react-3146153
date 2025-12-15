import "../styleheets/collage.css"

export const Collage = () => {
  return (
    <>
      <div class="container text-white fon">
        <div class="row align-items-center">
          <div class="col">
            <div className='display'>
              <div className="bg-verdeagua">
                <img className='imagen-1' src="./public/libro.png" alt="" />
                <p className='texto-1'>About Us</p>
              </div>
              <div className='bg-verde'>
                <img className='imagen-2' src="./public/archivos.png" alt="" />
                <p className='texto-2'>Our Team</p>
              </div>
            </div>
            <div className='caja-sola bg-rojo'>
              <img className='imagen-3' src="./public/descarga.png" alt="" />
              <p className='texto-3'>Resume</p>
            </div>
          </div>
          <div class="col caja-grande bg-azul">
            <img className='collage-fotos' src="./public/Collage.png" alt="" />
            <h1>Our Works</h1>
          </div>
          <div class="col">
            <div className='caja-sola-2 bg-rosado'>
              <img className='imagen-4' src="./public/mapa.png" alt="" />
              <p className='texto-4'>Contacts</p>
            </div>
            <div className='display'>
              <div className='bg-bronce'>
                <img className='imagen-5' src="./public/lapiz.png" alt="" />
                <p className='texto-5'>Blog</p>
              </div>
              <div className='bg-naranja'>
                <img className='imagen-6' src="./public/sobre.png" alt="" />
                <p className='texto-6'>Freedback</p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}
