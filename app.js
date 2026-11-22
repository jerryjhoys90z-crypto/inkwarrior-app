document.addEventListener("DOMContentLoaded", () => {
  const disciplinasList = document.getElementById("disciplinas-list");
  const horariosList = document.getElementById("horarios-list");
  const planesList = document.getElementById("planes-list");

  const planSelect = document.getElementById("plan-select");
  const disciplinaSelect = document.getElementById("disciplina-select");
  const horarioSelect = document.getElementById("horario-select");

  // Renderizar disciplinas
  function renderDisciplinas(filtro = "todas") {
    disciplinasList.innerHTML = "";
    const filtradas = filtro === "todas"
      ? ACADEMY_DATA.disciplinas
      : ACADEMY_DATA.disciplinas.filter(d => d.categoria === filtro);

    filtradas.forEach(d => {
      const card = document.createElement("div");
      card.className = `card ${d.destacado ? "pink" : ""}`;
      card.innerHTML = `<h4>${d.nombre}</h4><p>${d.desc}</p>`;
      disciplinasList.appendChild(card);
    });
  }

  // Filtros
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderDisciplinas(btn.dataset.filter);
    });
  });

  // Renderizar horarios y llenar select
  ACADEMY_DATA.horarios.forEach(h => {
    const item = document.createElement("div");
    item.className = "schedule-item";
    item.innerHTML = `
      <div>
        <strong>${h.turno}</strong>
        <div style="font-size:0.82rem;color:#a8a8b3">${h.grupo}</div>
      </div>
      <span class="schedule-time">${h.hora}</span>
    `;
    horariosList.appendChild(item);

    const opt = document.createElement("option");
    opt.value = `${h.turno} (${h.hora})`;
    opt.textContent = `${h.turno} — ${h.hora}`;
    horarioSelect.appendChild(opt);
  });

  // Renderizar planes y llenar select
  ACADEMY_DATA.planes.forEach(p => {
    const card = document.createElement("div");
    card.className = `card ${p.destacado ? "pink" : ""}`;
    card.innerHTML = `
      <h4>${p.titulo}</h4>
      <div class="price">${p.precio}</div>
      <p>${p.detalle}</p>
    `;
    planesList.appendChild(card);

    const opt = document.createElement("option");
    opt.value = `${p.titulo} (${p.precio})`;
    opt.textContent = `${p.titulo} — ${p.precio}`;
    planSelect.appendChild(opt);
  });

  // Llenar select de disciplinas
  ACADEMY_DATA.disciplinas.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.nombre;
    opt.textContent = d.nombre;
    disciplinaSelect.appendChild(opt);
  });

  renderDisciplinas();

  // Envío a WhatsApp
  document.getElementById("booking-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const plan = planSelect.value;
    const disciplina = disciplinaSelect.value;
    const horario = horarioSelect.value;
    const nivel = document.getElementById("nivel").value;

    const mensaje = `Hola Coach Jerri Jhoy, quiero reservar en *Inkwarrior Academy*:\n\n` +
      `• *Nombre:* ${nombre}\n` +
      `• *Plan:* ${plan}\n` +
      `• *Disciplina:* ${disciplina}\n` +
      `• *Turno:* ${horario}\n` +
      `• *Nivel:* ${nivel}`;

    const url = `https://wa.me/${ACADEMY_DATA.whatsapp}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});