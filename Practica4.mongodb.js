use("escuela")

db.alumnos.updateOne(
    {_id:ObjectId("691dfbc6b622723a579ede55")},
    {$set: {Nombre: "Makii"}}
)
db.alumnos.updateOne(
    {_id:ObjectId("691dfbc6b622723a579ede56")},
    {$set: {Nombre: "Richie"}}
)
db.profesores.updateOne(
    {_id:ObjectId("691dfe25a9f6a70ed96ad13d")},
    {$set: {Nombre: "Uriel"}}
)
db.profesores.updateOne(
    {_id:ObjectId("691dfe25a9f6a70ed96ad13e")},
    {$set: {Nombre: "Henry"}}
)
db.cursos.updateOne(
    {_id:ObjectId("691e035cb52cbed7edd46bb2")},
    {$set: {Nombre: "Lectura y Analisis"}}
)
db.cursos.updateOne(
    {_id:ObjectId("691e035cb52cbed7edd46bb3")},
    {$set: {Nombre: "Reseña de Textos"}}
)
db.grupos.updateOne(
    {_id:ObjectId("691e035cb52cbed7edd46bbe")},
    {$set: {Grado: 4}}
)
db.grupos.updateOne(
    {_id:ObjectId("691e035cb52cbed7edd46bc0")},
    {$set: {Grado: 5}}
)
db.administrativos.updateOne(
    {_id:ObjectId("691e035cb52cbed7edd46bc4")},
    {$set: {Nombre: "Rogelio"}}
)
db.administrativos.updateOne(
    {_id:ObjectId("691e035cb52cbed7edd46bc5")},
    {$set: {Nombre: "Hugo"}}
)
db.alumnos.find();