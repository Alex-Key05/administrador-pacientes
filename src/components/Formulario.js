import { useState } from 'react';
import shortid from 'shortid';

const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha: '',
        hora: '',
        sintomas: '',
    });

    const [error, setError] = useState(false);

    const actualizarState = e => {
        setCita({...cita, [e.target.name]: e.target.value});
    }

    const { mascota, propietario, fecha, hora, sintomas, } = cita;
  
    const submitForm = e => {
        
        e.preventDefault();

        if( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '' ) {
            setError(true);
            return;
        }
        setError(false);

        cita.id = shortid();
        
        crearCita(cita);

        setCita({
            mascota: '',
            propietario: '',
            fecha: '',
            hora: '',
            sintomas: '',
        });
    }

    return (
        <>
         <h2>Desde formulario</h2>
         <form
            onSubmit={submitForm}
         >
             { error  ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
             <label>Nombre mascota</label>
             <input
                type="text"
                name="mascota"
                className="u-full-width"
                onChange={actualizarState}
                value={mascota}
                placeholder="Escribe el nombre de la mascota"
             />

            <label>Nombre propietario</label>
             <input
                type="text"
                name="propietario"
                className="u-full-width"
                onChange={actualizarState}
                value={propietario}
                placeholder="Escribe el nombre del propietario"
             />

            <label>Fecha</label>
             <input
                type="date"
                name="fecha"
                className="u-full-width"
                onChange={actualizarState}
                value={fecha}
             />

            <label>Hora</label>
             <input
                type="time"
                name="hora"
                className="u-full-width"
                onChange={actualizarState}
                value={hora}
             />

            <label>Síntomas</label>
             <textarea
                name="sintomas"
                className="u-full-width"
                onChange={actualizarState}
                value={sintomas}
             ></textarea>

            <button
                type="submit"
                className="button-primary u-full-width"
            >Agregar Cita</button>             
         </form>
        </>
    )
}

export default Formulario;