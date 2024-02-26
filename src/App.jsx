import Form from "./components/Form"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
import { useState } from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  const eliminarPaciente = (id) => {
    const pacientesState = pacientes.filter(pacienteState => pacienteState.id !== id)
    setPacientes(pacientesState)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pacientes = {pacientes}
          setPacientes = { setPacientes }
          paciente = { paciente }
          setPaciente = {setPaciente}
        />
        <ListadoPacientes 
          pacientes = {pacientes}
          setPaciente = {setPaciente}
          eliminarPaciente = { eliminarPaciente }
        />
      </div>
    </div>
  )
}

export default App
