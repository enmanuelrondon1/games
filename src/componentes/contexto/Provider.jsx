import { useState } from "react"
import { Contexto } from "./Contexto"

export const Provider = ({children}) => {
  const [laCorrecta, setLaCorrecta] = useState('')

  const escribirCorrecto = (guardar ="") => {
    setLaCorrecta(guardar)
  }
  return (
    <>
    <Contexto.Provider value={{
      escribirCorrecto,
      laCorrecta
    }}>
      {children}
    </Contexto.Provider>
    </>
  )
}