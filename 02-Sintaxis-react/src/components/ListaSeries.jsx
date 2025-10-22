export function SeriesCards({imagen, titulo, descripcion}) {

    return (
        <>
            <h1>{titulo}</h1>
            <p>{descripcion}</p>
            <img src={imagen} alt="" />
        </>
    )

}