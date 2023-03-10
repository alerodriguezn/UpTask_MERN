import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const PreviewProyecto = ({ proyecto }) => {
  const { auth } = useAuth()
  const { nombre, _id, cliente, creador } = proyecto
  return (
    <div className="border-b p-5 flex justify-between flex-col md:flex-row">
      <div className="flex items-center gap-2">
        <p className="flex-1">
          {nombre}
          <span className="text-sm text-white uppercase bg-yellow-600 rounded-lg p-3 py-1 ml-2 font-bold">{' '}
            {cliente}</span>
        </p>
        {auth._id !== creador && (
          <p className="p-2 text-xs rounded-lg text-white bg-green-500 font-bold uppercase">Colaborador</p>
        )}

      </div>
      <Link
        to={`${_id}`}
        className="text-gray-600 hover:text-gray-800 uppercase text-sm font-bold "
      >Ver Proyecto</Link>

    </div>
  )
}

export default PreviewProyecto