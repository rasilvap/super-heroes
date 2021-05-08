import React from 'react'
import './Home.styles.css'
import Text from '../../components/atoms/Text'

function Home() {
  return (
    <div>
      <div className="box-main">
        <div className="box-text-main">
          <Text variant="title" color="white">
            Super heroes
          </Text>
        </div>

        <div className="box-text-body">
          <Text variant="title" color="white">
            Ver personajes
          </Text>
        </div>

        <div className="box-logo-body">
          <img
            className="img-logo"
            alt="logo"
            src="https://res.cloudinary.com/plac-web/image/upload/v1620492689/marvel/Marvel_Logo.svg.png"
          />
        </div>
      </div>

      <img
        alt="Main"
        src="https://res.cloudinary.com/plac-web/image/upload/v1619888975/marvel/main.jpg"
        className="bg-main-image"
      />
    </div>
  )
}

export default Home
