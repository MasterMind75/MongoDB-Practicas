use("escuela");
//ALUMNOS
db.alumnos.insertMany([{
    Nombre: "Ethan",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Omar",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Alejandro",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Ricardo",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Misael",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Angel",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Sarai",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Abraham",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Alondra",
    Edad: 17,
    Especialidad: "Programacion"
},
{
    Nombre: "Juan",
    Edad: 17,
    Especialidad: "Programacion"
}])

//PROFESORES
db.profesores.insertMany([{
    Nombre: "Marco",
    Edad: 51,
    Materia: "Programacion"
},
{
    Nombre: "Romina",
    Edad: 21,
    Materia: "Español"
},
{
    Nombre: "Samuel",
    Edad: 24,
    Materia: "Ingles"
},
{
    Nombre: "Hector",
    Edad: 33,
    Materia: "Programacion"
},
{
    Nombre: "Minerva",
    Edad: 35,
    Materia: "Matematicas"
},
{
    Nombre: "Martha",
    Edad: 40,
    Materia: "Matematicas"
},
{
    Nombre: "Guadalupe",
    Edad: 23,
    Materia: "Civica y Etica"
},
{
    Nombre: "Carlos",
    Edad: 35,
    Materia: "Español"
},
{
    Nombre: "Guadalupe",
    Edad: 21,
    Materia: "Ingles"
},
{
    Nombre: "Raul",
    Edad: 26,
    Materia: "Civica y Etica"
}])

//CURSOS
db.cursos.insertMany([{
    Nombre: "Aprendiendo A Derivar",
    Materia: "Matematicas"
},
{
    Nombre: "Contando Contigo",
    Materia: "Matematicas"
},
{
    Nombre: "Lectura y Reseña",
    Materia: "Español"
},
{
    Nombre: "Analisis de Textos",
    Materia: "Español"
},
{
    Nombre: "Teaching Feeling",
    Materia: "Ingles"
},
{
    Nombre: "Units X-play",
    Materia: "Ingles"
},
{
    Nombre: "Formando el Futuro",
    Materia: "Civica y Etica"
},
{
    Nombre: "Jovenes por México",
    Materia: "Civica y Etica"
},
{
    Nombre: "Python",
    Materia: "Programacion"
},
{
    Nombre: "MondoDB",
    Materia: "Programacion"
}])

//GRUPOS
db.grupos.insertMany([{
    Grado: 1,
    Grupo: "A"
},
{
    Grado: 1,
    Grupo: "B"
},
{
    Grado: 1,
    Grupo: "C"
},
{
    Grado: 1,
    Grupo: "D"
},
{
    Grado: 2,
    Grupo: "A"
},
{
    Grado: 2,
    Grupo: "B"
},
{
    Grado: 2,
    Grupo: "C"
},
{
    Grado: 3,
    Grupo: "A"
},
{
    Grado: 3,
    Grupo: "B"
},
{
    Grado: 3,
    Grupo: "C"
}])

//ADMINISTRATIVOS
db.administrativos.insertMany([{
    Nombre: "Edgar",
    Cargo: "Orientacion"
},
{
    Nombre: "Iris",
    Cargo: "Subdirectora"
},
{
    Nombre: "Albert",
    Cargo: "Prefecto"
},
{
    Nombre: "Pablo",
    Cargo: "Enfermero"
},
{
    Nombre: "Miguel",
    Cargo: "Prefecto"
},
{
    Nombre: "Angel",
    Cargo: "Trabajo Social"
},
{
    Nombre: "Haziel",
    Cargo: "Secretario"
},
{
    Nombre: "David",
    Cargo: "Secretario"
},
{
    Nombre: "Emanuel",
    Cargo: "Prefecto"
},
{
    Nombre: "Ruslan",
    Cargo: "Director"
}])

db.alumnos.find();