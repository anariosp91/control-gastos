import Gasto from "./Gasto"

const ListadoGastos = ({
    gastos, 
    gastoEditar, 
    setGastoEditar, 
    eliminarGasto,
    filtro,
    gastosFiltrados
}) => {
  return (
    <div className='listado-gastos contenedor'>
      
      {
        filtro? (
          <>
            <h2>{gastosFiltrados.length? 'Gastos': 'En esta categoría no hay gastos'}</h2>
            {gastosFiltrados.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
            />
            ))}
          </>
          
        ): (
          <>
            <h2>{gastos.length? 'Gastos': 'No hay gastos'}</h2>
            {gastos.map(gasto => (
            <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                eliminarGasto={eliminarGasto}
            />
            ))}
          </>
          
        )
      }
    </div>
  )
}

export default ListadoGastos
