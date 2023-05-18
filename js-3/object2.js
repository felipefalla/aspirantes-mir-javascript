let persona = {
    nombre: "Felipe Falla",
    edad: 26,
    ciudad: "Guamo - Tolima",
    profesion: "Ingeniero Civil"
}

console.log(persona);

function presentacion(persona) {
    return (persona.nombre) + ", " + (persona.edad) + ", " + (persona.ciudad);
}

const mensaje = presentacion(persona);
console.log(mensaje);

persona.hobbies = [ "Disfrutar de la naturaleza", "pescar", "ejercitarme" ]
console.log(persona.hobbies);

for(let i = 0; i <persona.hobbies.length; i ++ ) {
    console.log(persona.hobbies[i]);
}






