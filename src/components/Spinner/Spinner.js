import React from "react"
import { Waveform } from '@uiball/loaders'
import "./Spinner.css"

export default function Spinner() {
  return(
    <div id="spinner">
      {/* {<Waveform  color="#FF9102" />} */}

      {<Waveform 
      size={150}
      lineWeight={7}
      speed={1} 
      color="#FF9102" 
      />}
    </div>
  )
}