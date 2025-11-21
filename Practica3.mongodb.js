use("escuela");

db.alumnos.deleteOne({Nombre: "Ethan"});
db.alumnos.deleteOne({Nombre: "Omar"});
db.profesores.deleteOne({Nombre: "Marco"});
db.profesores.deleteOne({Nombre: "Romina"});
db.cursos.deleteOne({Nombre: "Aprendiendo A Derivar"});
db.cursos.deleteOne({Nombre: "Contando Contigo"});
db.grupos.deleteOne({Grado: 1});
db.grupos.deleteOne({Grupo: "B"});
db.administrativos.deleteOne({Nombre: "Edgar"});
db.administrativos.deleteOne({Nombre: "Iris"});

db.alumnos.find();
