export const site = {
  name: "Gravity Digital",
  slogan: "Visión Técnica, apoyo informático donde sea",
  description:
    "Capacitación tecnológica, asesoramiento informático, automatización de procesos y soporte remoto para personas y organizaciones.",
  contact: {
    whatsapp: {
      href: "https://wa.me/5493704259982",
      label: "+54 9 370 425-9982",
    },
    email: {
      href: "mailto:gravity-digital-contacto@gmail.com",
      label: "gravity-digital-contacto@gmail.com",
    },
    instagram: {
      href: "https://instagram.com/gravity-digital",
      label: "@gravity-digital",
    },
    meetingOptions: "Zoom, Google Meet o la plataforma que prefieras.",
  },
  coverage:
    "Atención inicial en Formosa. Trabajamos principalmente a distancia y coordinamos visitas presenciales cuando corresponde.",
  navigation: [
    { href: "#servicios", label: "Servicios" },
    { href: "#comparaciones", label: "Qué cambia" },
    { href: "#proceso", label: "Cómo trabajamos" },
    { href: "#preguntas", label: "Preguntas frecuentes" },
  ],
  advisoryScope: [
    "Celulares",
    "Computadoras y componentes",
    "Routers y switches",
    "Racks y servidores",
    "Almacenamiento en la nube",
    "Automatización",
    "Inteligencia artificial generativa",
  ],
} as const;

export const services = [
  {
    id: "servicio-capacitacion",
    category: "Aprender",
    title: "Tecnología que puedes aprovechar de verdad.",
    description:
      "Capacitación práctica, a tu ritmo y desde tu punto de partida. Aprende a usar inteligencia artificial y herramientas digitales en situaciones reales.",
    examples: ["ChatGPT", "Claude", "Gemini", "n8n"],
  },
  {
    id: "servicio-asesoramiento",
    category: "Elegir",
    title: "Compra lo que necesitas. Ni más, ni menos.",
    description:
      "Te ayudamos a evaluar tecnología para personas y organizaciones: desde un celular o una computadora hasta redes, servidores, nube, automatización e inteligencia artificial.",
    examples: ["Computadoras", "Celulares", "Componentes", "Redes"],
  },
  {
    id: "servicio-automatizacion",
    category: "Conectar",
    title: "Deja que las herramientas hagan su parte.",
    description:
      "Diseñamos flujos para conectar aplicaciones, ordenar información y reducir pasos repetitivos. Te explicamos cómo funciona cada uno.",
    examples: ["n8n", "Workflows", "Integraciones", "Procesos"],
  },
  {
    id: "servicio-soporte",
    category: "Resolver",
    title: "Apoyo técnico, sin importar dónde estés.",
    description:
      "Cuando te quede cómodo, usamos software de asistencia remota para conectarnos desde cualquier lugar, diagnosticar el problema y resolverlo contigo.",
    examples: ["Diagnóstico", "Configuración", "Software", "Asistencia remota"],
  },
] as const;

export const faqs = [
  {
    question: "¿Trabajan con particulares y empresas?",
    answer:
      "Sí. Adaptamos cada servicio a personas, profesionales, equipos de trabajo y PyMEs.",
  },
  {
    question: "¿Las capacitaciones son personalizadas?",
    answer:
      "Sí. Ajustamos los contenidos al nivel, las herramientas y los objetivos de cada persona o equipo.",
  },
  {
    question: "¿Qué pueden evaluar antes de una compra tecnológica?",
    answer:
      "Asesoramos sobre celulares, computadoras y componentes, redes (routers y switches), racks, servidores, almacenamiento en la nube, automatización e inteligencia artificial generativa.",
  },
  {
    question: "¿Pueden automatizar procesos de mi negocio?",
    answer:
      "Analizamos el proceso y proponemos alternativas de automatización que tengan sentido para tu forma de trabajar.",
  },
  {
    question: "¿Los servicios se realizan de forma remota?",
    answer:
      "Principalmente sí. Las intervenciones presenciales se pueden coordinar cuando el tipo de trabajo lo requiere.",
  },
  {
    question: "¿Cómo puedo solicitar un presupuesto?",
    answer:
      "Escríbenos por WhatsApp, correo electrónico o Instagram. Si hace falta conversar, coordinamos una llamada por Zoom, Google Meet o la plataforma que prefieras.",
  },
] as const;

export const workSteps = [
  {
    title: "Nos cuentas qué necesitas",
    description: "Escuchamos la situación y el resultado que buscas.",
  },
  {
    title: "Analizamos tu contexto",
    description: "Revisamos tus herramientas, objetivos y prioridades.",
  },
  {
    title: "Proponemos un camino",
    description: "Definimos el alcance y preparamos un presupuesto.",
  },
  {
    title: "Implementamos juntos",
    description: "Realizamos el trabajo y te explicamos cada decisión.",
  },
  {
    title: "Entregamos y orientamos",
    description: "Dejamos la solución lista y compartimos las pautas de uso.",
  },
] as const;
