import React, { useEffect, useState } from "react";
import Cita from "./components/Cita";
import Formulario from "./components/Formulario";

const App = () => {

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  
  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  useEffect( () => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita) => {
    guardarCitas([...citas, cita]);
  };

  const eliminarCita = id => {
    const citasActuales = citas.filter( cita => cita.id !== id);
    guardarCitas(citasActuales);
  }

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
             crearCita={crearCita}
            />
          </div>

          <div className="one-half column">
            <h2>Desde cita</h2>
            { citas.map(cita => (
              <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
              />
            )) }
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
