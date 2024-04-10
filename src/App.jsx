import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { ClimateChange } from './climateChange'
import { Deforestation } from './deforestation'
import { Pollution } from './pollution'
import { ResourceDepletion } from './resourceDepletion'
import { HabitatLoss } from './habitatLoss'
import BiodiversityLoss from './biodiversityLoss'
import EnvironmentalRacism from './environmentalRacism'
import OceanAcidification from './oceanAcidification'
import Overfishing from './overfishing'
import PlasticPollution from './plasticPollution'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pollution />
    </>
  )
}

export default App
