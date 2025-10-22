//Vamos a importar los estilo y el componente InfoCard
import { InfoCard } from "./components/InfoCard"
import { UserCard } from "./components/UserCard"
import { SeriesCards } from "./components/ListaSeries"
import "./App.css"

export function App() {

  return (

    <div>
      <h1>App</h1>
      <InfoCard />
      <UserCard
        image="https://rickandmortyapi.com/api/character/avatar/302.jpeg"
        userName="Ruben"
      />

      <UserCard
        image="https://rickandmortyapi.com/api/character/avatar/710.jpeg"
        userName="Steve"
      />

      <UserCard
        image="https://rickandmortyapi.com/api/character/avatar/514.jpeg"
        userName="Public Opinion Judge"
      />

      <UserCard
        image="https://rickandmortyapi.com/api/character/avatar/151.jpeg"
        userName="Gwendolyn"
      />

      <SeriesCards
        titulo="Arcane"
        descripcion="Arcane es una serie animada que explora la creciente tensión entre las ciudades de Piltover y Zaun. La trama se centra en las hermanas Vi y Powder (Jinx) y su lucha en bandos opuestos debido a las diferencias socioeconómicas, tecnológicas y el uso de una nueva magia científica llamada Hextech. La serie se basa en el popular videojuego League of Legends. "
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQksE5heD4SzX6kjeqNkzwG_KktYB-wm5nByg&s"
      />

      <SeriesCards
        titulo="Olympo"
        descripcion="La serie Olympo trata sobre un grupo de jóvenes atletas de élite en un centro de alto rendimiento que compiten por la gloria deportiva, pero se enfrentan a la presión, el secreto y la ambición extrema que los lleva a tomar riesgos peligrosos. La trama combina drama, deporte y misterio, mostrando el lado más oscuro de la obsesión por ser el mejor, especialmente después de que un incidente pone en evidencia hasta dónde están dispuestos a llegar sus compañeros.  "
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVQZjugxUDAswtm6rbvndd2J9BfGBoKX9ew&s"
      />

      <SeriesCards
        titulo="SadMan"
        descripcion="La serie Sandman de Netflix es una adaptación de la novela gráfica de Neil Gaiman que sigue a Sueño, también conocido como Morfeo, el rey del reino de los sueños. Después de ser capturado en un ritual oculto y estar encarcelado durante más de un siglo, Morfeo (interpretado por Tom Sturridge) escapa para recuperar sus objetos de poder (su arena, rubí y yelmo) y restaurar su reino, emprende un viaje por diferentes mundos. La serie explora la fantasía oscura, el drama psicológico y las historias humanas mientras Morfeo repara el caos que su ausencia provocó en el mundo de los sueños.  "
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFAEExHeootcW4fe7lvZca-7oweYHnlkPT7uqBrZyapw&s"
      />

    </div>

  )

}