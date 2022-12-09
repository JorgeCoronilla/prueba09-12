import React from 'react'

export const Form = () => {
 
  
   

    const conseguirDatos = e => {
        e.preventDefault();
        let datos = e.target;
        let peliNueva = {
            titulo: datos.titulo.value,
            genero: datos.genero.value,
            director: datos.director.value
        }
        let Metadatos = {
          method: 'POST',
          body: JSON.stringify(peliNueva),
          mode: "cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-type": "application/json",
          },
        };
    
        fetch("/api/pelis", Metadatos)
        .then((res) => console.log(res))
    }
    
   
     
   
  
  return (
    <div>
         <h1>Formulario</h1>

<h2>App react - Pelis</h2>
<p>Añade tus pelis a la DB con el formulario</p>
<form onSubmit={conseguirDatos}>
    <input type="text" placeholder='Titulo' name="titulo" />
    <input type="text" placeholder='genero'name="genero" />
    <input type="text" placeholder='director'name="director" />
    <input type="submit" value='enviar' name="enviar"/>
</form>
    </div>
  )
}
