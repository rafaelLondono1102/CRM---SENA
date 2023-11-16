import { Schema, model } from "mongoose"

const economicSectorEnum = ["","Primario", "Secundario", "Terciario"]
const typeEnum = ["","Mixta", "Privada", "Pública"]
const sizeEnum = ["","Micro", "Pequeña", "Mediana", "Grande"]
const technologyLineEnum = ["","Biotecnología y Nanotecnología", "Ingenieria y diseño", "Electrónica y telecomunicaciones", "Tecnologías virtuales"]
const technologySubLineEnum = ["","Biotecnología industrial", "Microbiología agrícola y pecuaria", "Biotecnología vegetal", "Medio ambiente",
    "Nuevos materiales", "Energías verde y biocombustibles", "Agroindustria alimentaria", "Agroindustria no alimentaria",
    "Productos y procesos", "Diseño de conceptos y detalles", "Análisis y simulación", "Ingeniería inversa", "Mecanizado",
    "Diseño estrátegico", "Biomecánica", "Materiales", "Tecnificación de procesos agrícolas", "Aplicación de energías renovables",
    "Sistemas de aprovechamiento de recursos hídricos", "automatización e instrumentación", "Sistemas embebidos", "Agroelectrónica",
    "Infraestructura, redes, antenas", "Diseño electrónico", "Telemática", "Internet de las cosas (IoT)", "Robótica", "Aplicaciones móviles",
    "Inteligencia artificial y big data", "Realidad virtual y simulación", "Realidad aumentada", "Diseño y desarrollo de videojuegos",
    "Ingeniería de software", "Desarrollo de contenidos multimedias", "Blockchain", "Ciberseguridad"]

const OrganizationSchema = Schema({

    name: { type: String  },
    economicSector: { type: String, enum: economicSectorEnum  },
    type: { type: String, enum: typeEnum  },
    size: { type: String, enum: sizeEnum, },
    email: { type: String },
    phone: { type: String  },
    state: { type: String },
    city: { type: String  },
    inscriptionIdea: { type: String  },
    technologyLine: { type: String, enum: technologyLineEnum  },
    technologySubLine: { type: String, enum: technologySubLineEnum  },
    webSite: { type: String  },
    socialNetworkName: { type: String },
    socialNetworkUserName: { type: String  },
    observations: { type: String  }
})

export default model("OrganizationCollection", OrganizationSchema)
