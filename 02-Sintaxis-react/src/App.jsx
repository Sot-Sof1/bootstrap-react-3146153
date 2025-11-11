import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'
import { LoginForm } from './components/LoginForm'
import { ProductCard } from './components/ProductCard'

export const App = () => {
  return (
    <>
      <NavBar />

      <div className='contenedorCards'>


        <ExtensionCard
          cardTitle="DevLens"
          cardImage="./public/logo-devlens.svg"
          cardDescription="Quickly inspect page layouts and visualize element boundaries."
        />

        <ExtensionCard
          cardTitle="StyleSpy"
          cardImage="./public/imagen2.svg"
          cardDescription="Instantly analyze and copy CSS from any webpage element."
        />

        <ExtensionCard
          cardTitle="SpeedBoost"
          cardImage="./public/imagen3.svg"
          cardDescription="Optimizes browser resource usage to accelerate page loading."
        />

        <ExtensionCard
          cardTitle="JSONWizard"
          cardImage="./public/imagen4.svg"
          cardDescription="Formats, validates, and prettifies JSON responses."
        />

        <ExtensionCard
          cardTitle="TabMasterPro"
          cardImage="./public/imagen5.svg"
          cardDescription="Organizes browser tabs into groups and sessions."
        />

        <ExtensionCard
          cardTitle="ViewportBuddy"
          cardImage="./public/imagen6.svg"
          cardDescription="Simulates various screen resolutions directly within."
        />

        <ExtensionCard
          cardTitle="Markup Notes"
          cardImage="./public/imagen7.svg"
          cardDescription="Enables annotation and notes directly onto webpages."
        />

        <ExtensionCard
          cardTitle="GridGuides"
          cardImage="./public/imagen8.svg"
          cardDescription="Overlay customizable grids and alignment guides."
        />

        <ExtensionCard
          cardTitle="Palette Picker"
          cardImage="./public/imagen9.svg"
          cardDescription="Instantly extracts color palettes from any webpage."
        />

      </div>


      <LoginForm />

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <ProductCard />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mt-4 mt-md-0">
            <ProductCard />
          </div>
          <div className="col-12 col-md-12 col-lg-4 mt-4 mt-lg-0">
            <ProductCard />
          </div>
        </div>
      </div>

    </>
  )
}
