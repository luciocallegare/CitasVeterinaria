import Form from "./components/Form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"

function App() {

  const [pacientes, setPacientes] = useState([])


  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pacientes = {pacientes}
          setPacientes = { setPacientes }
        />
        <ListadoPacientes 
          pacientes = {pacientes}
        />
      </div>
    </div>
  )
}

export default App