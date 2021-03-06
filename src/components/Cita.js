
const Cita = ({cita, eliminarCita}) => {
    return (
        <div className="cita">
            <p>Nombre: <span>{cita.mascota}</span></p>
            <p>Propietario: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Síntomas: <span>{cita.sintomas}</span></p>
            <button
             className="u-full-width button eliminar"
             onClick={ () => eliminarCita(cita.id)}
            >Eliminar &times;</button>
        </div>
    )
}

export default Cita;