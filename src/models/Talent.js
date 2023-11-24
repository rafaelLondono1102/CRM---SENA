import { Schema, model } from "mongoose"

const sexEnum = ["","Masculino", "Femenino"]
const economicStatusEnum = ["","1", "2", "3", "4", "5", "6"]
const ageEnum = ["","10 - 20", "21 - 30", "31 - 40", "41 - 50", "51 - 60", "61 - 70", "71 - 80"]
const scholarshipEnum = ["","Primaria", "Bachiller Académico", "Técnico", "Tecnólogo", "Profesional", "Especialización", "Maestría", "Doctorado", "Post doctorado"]
const technologyLineEnum = ["","Biotecnología y Nanotecnología", "Ingenieria y diseño", "Electrónica y telecomunicaciones", "Tecnologías virtuales"]
const technologySubLineEnum = ["Biotecnología industrial", "Microbiología agrícola y pecuaria", "Biotecnología vegetal", "Medio ambiente",
    "Nuevos materiales", "Energías verde y biocombustibles", "Agroindustria alimentaria", "Agroindustria no alimentaria",
    "Productos y procesos", "Diseño de conceptos y detalles", "Análisis y simulación", "Ingeniería inversa", "Mecanizado",
    "Diseño estrátegico", "Biomecánica", "Materiales", "Tecnificación de procesos agrícolas", "Aplicación de energías renovables",
    "Sistemas de aprovechamiento de recursos hídricos", "automatización e instrumentación", "Sistemas embebidos", "Agroelectrónica",
    "Infraestructura, redes, antenas", "Diseño electrónico", "Telemática", "Internet de las cosas (IoT)", "Robótica", "Aplicaciones móviles",
    "Inteligencia artificial y big data", "Realidad virtual y simulación", "Realidad aumentada", "Diseño y desarrollo de videojuegos",
    "Ingeniería de software", "Desarrollo de contenidos multimedias", "Blockchain", "Ciberseguridad"]


const TalentSchema = Schema({

    name: { type: String },
    gender: { type: String, enum: sexEnum },
    economicStatus: { type: String, enum: economicStatusEnum },
    age: { type: String, enum: ageEnum },
    email: { type: String },
    phone: { type: String },
    state: { type: String },
    city: { type: String },
    scholarship: { type: String, enum: scholarshipEnum },
    profession: { type: String },
    inscriptionIdea: { type: String },
    technologyLine: { type: String, enum: technologyLineEnum },
    technologySubLine: { type: String, enum: technologySubLineEnum },
    webSite: { type: String },
    oficialSocialNetwork : {type : String},
    socialNetworkName: { type: String },
    linkedin: { type: String },
    observations: { type: String }
})

export default model("TalenCollection", TalentSchema)
