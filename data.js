const ACADEMY_DATA = {
  whatsapp: "51921021960",
  disciplinas: [
    { nombre: "MMA (Artes Marciales Mixtas)", categoria: "todas", desc: "Combate integral de pie y suelo: golpeo, derribos y sumisiones." },
    { nombre: "Boxeo", categoria: "striking", desc: "Técnica de puños, desplazamientos, defensa y condicionamiento físico." },
    { nombre: "Kickboxing / K1", categoria: "striking", desc: "Combinaciones explosivas de puños, patadas y rodillas." },
    { nombre: "Muay Thai", categoria: "striking", desc: "El arte de las ocho extremidades: puños, codos, rodillas y patadas." },
    { nombre: "Jiu-Jitsu", categoria: "grappling", desc: "Control en el suelo, palancas, estrangulaciones y defensa desde abajo." },
    { nombre: "Judo", categoria: "grappling", desc: "Proyecciones, derribos, equilibrio y control cuerpo a cuerpo." },
    { nombre: "Taekwondo", categoria: "striking", desc: "Agilidad, velocidad y pateo técnico de alto alcance." },
    { nombre: "Defensa Personal (Hombres y Mujeres)", categoria: "especial", desc: "Técnicas prácticas para situaciones reales y seguridad personal." },
    { nombre: "MMA Especial Mujeres", categoria: "especial", desc: "Entrenamiento enfocado en fuerza, confianza y defensa personal femenina.", destacado: true },
    { nombre: "Clases Personalizadas (1 a 1)", categoria: "especial", desc: "Entrenamiento privado adaptado a tus metas, horario y ritmo.", destacado: true }
  ],
  horarios: [
    { turno: "Tarde – Turno 1", hora: "3:00 PM - 4:00 PM", grupo: "Todos los niveles / Mixto" },
    { turno: "Tarde – Turno 2", hora: "4:00 PM - 5:00 PM", grupo: "Todos los niveles / Mixto" },
    { turno: "Noche – Turno 1", hora: "9:00 PM - 10:00 PM", grupo: "General / Defensa Personal" },
    { turno: "Noche – Avanzados", hora: "9:00 PM - 10:30 PM", grupo: "MMA Avanzados (Lunes a Viernes)" },
    { turno: "Noche – Turno 2", hora: "10:00 PM - 11:00 PM", grupo: "Entrenamiento Nocturno" },
    { turno: "Personalizado", hora: "Horario a coordinar", grupo: "Sesión privada con el Coach" }
  ],
  planes: [
    {
      titulo: "Mensualidad Promoción",
      precio: "S/ 120 / mes",
      detalle: "Acceso a entrenamientos grupales de lunes a viernes en tu turno elegido."
    },
    {
      titulo: "Promoción Mujeres 2 Meses",
      precio: "S/ 140 x 2 meses",
      detalle: "Programa especial MMA y Defensa Personal para mujeres.",
      destacado: true
    },
    {
      titulo: "Clases Personalizadas",
      precio: "A coordinar",
      detalle: "Entrenamiento individualizado (técnica, físico o preparación de pelea).",
      destacado: true
    }
  ]
};