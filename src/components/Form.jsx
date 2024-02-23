import { useState, useEffect } from "react"
import Error from "./Error"

const Form = ({ pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email,setEmail] = useState('')
  const [alta,setAlta] = useState('')
  const [sintomas,setSintomas] = useState('')
  
  const [error, setError] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setError([nombre,propietario,email,alta,sintomas].includes(''))
    if (!error) {

      const objetoPaciente = {
        nombre,
        propietario,
        email,
        alta,
        sintomas
      }
      setPacientes([...pacientes, objetoPaciente])

      setNombre('')
      setPropietario('')
      setEmail('')
      setAlta('')
      setSintomas('')
    }
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y  {' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
      >
        {error && <Error mensaje='Todos los campos son obligatorios'/>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block text-gray-700 font-bold uppercase">Nombre Mascota</label>
          <input 
            id="mascota"
            type="text" 
            placeholder="Nombre de la mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={nombre}
            onChange={ (e)=>setNombre(e.target.value) }
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block text-gray-700 font-bold uppercase">Nombre Propietario</label>
          <input 
            id="propietario"
            type="text" 
            placeholder="Nombre de Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={propietario}
            onChange={ (e)=>setPropietario(e.target.value) }            
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 font-bold uppercase">E-mail Propietario</label>
          <input 
            id="email"
            type="email" 
            placeholder="Email contacto de Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={email}
            onChange={ (e)=>setEmail(e.target.value) }  
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 font-bold uppercase">Alta</label>
          <input 
            id="alta"
            type="date" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={alta}
            onChange={ (e)=>setAlta(e.target.value) }  
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 font-bold uppercase">Síntomas</label>
          <textarea 
            placeholder="Describe los Síntomas" 
            id="sintomas" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={sintomas}
            onChange={ (e)=>setSintomas(e.target.value) }                
          />
        </div>
        
        <input type="submit" value="agregar paciente" 
        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" />
      </form>
    </div>
  )
}

export default Form
