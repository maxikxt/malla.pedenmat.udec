const ramos = [
  // Semestre 1
  { id: "edu", nombre: "Educación, Sociedad y Desarrollo Humano", semestre: 1, creditos: 3, eje: "eje-general", requisitos: [] },
  { id: "tic", nombre: "Tecnologías de la Información en el Aula", semestre: 1, creditos: 2, eje: "eje-general", requisitos: [] },
  { id: "algtrig", nombre: "Álgebra y Trigonometría", semestre: 1, creditos: 10, eje: "eje-disciplinar", requisitos: [] },
  { id: "razmat", nombre: "Introducción al Razonamiento Matemático", semestre: 1, creditos: 3, eje: "eje-disciplinar", requisitos: [] },
  { id: "geo1", nombre: "Geometría I", semestre: 1, creditos: 4, eje: "eje-disciplinar", requisitos: [] },

  // Semestre 2
  { id: "profdoc", nombre: "La Profesión Docente", semestre: 2, creditos: 3, eje: "eje-general", requisitos: ["edu"] },
  { id: "alpha", nombre: "Alfabetización Académica en Pedagogía", semestre: 2, creditos: 3, eje: "eje-general", requisitos: [] },
  { id: "calcdif", nombre: "Cálculo Diferencial e Integral", semestre: 2, creditos: 8, eje: "eje-disciplinar", requisitos: ["algtrig"] },
  { id: "alglin", nombre: "Álgebra Lineal", semestre: 2, creditos: 4, eje: "eje-disciplinar", requisitos: ["algtrig"] },
  { id: "softmat", nombre: "Software Matemático", semestre: 2, creditos: 3, eje: "eje-general", requisitos: ["tic"] },

  // Semestre 3
  { id: "inclusion", nombre: "Inclusión y Exclusión Social en Educación", semestre: 3, creditos: 3, eje: "eje-general", requisitos: ["profdoc", "alpha"] },
  { id: "elect1", nombre: "Electivo Educativo 1", semestre: 3, creditos: 3, eje: "eje-electivo", requisitos: [] },
  { id: "elect2", nombre: "Electivo Educativo 2", semestre: 3, creditos: 3, eje: "eje-electivo", requisitos: [] },
  { id: "calcvar", nombre: "Cálculo en Varias Variables", semestre: 3, creditos: 5, eje: "eje-disciplinar", requisitos: ["calcdif"] },
  { id: "discreta", nombre: "Matemática Discreta", semestre: 3, creditos: 4, eje: "eje-disciplinar", requisitos: ["algtrig"] },
  { id: "sistemas", nombre: "Enseñanza y Aprendizaje de los Sistemas Numéricos", semestre: 3, creditos: 4, eje: "eje-didactica", requisitos: ["algtrig"] },

  // Semestre 4
  { id: "psicoedu", nombre: "Psicología Educativa", semestre: 4, creditos: 3, eje: "eje-general", requisitos: ["inclusion"] },
  { id: "elect3", nombre: "Electivo Educativo 3", semestre: 4, creditos: 3, eje: "eje-electivo", requisitos: [] },
  { id: "comp1", nombre: "Complementario 1", semestre: 4, creditos: 2, eje: "eje-complementario", requisitos: [] },
  { id: "geo2", nombre: "Geometría II", semestre: 4, creditos: 4, eje: "eje-disciplinar", requisitos: ["geo1"] },
  { id: "estruct", nombre: "Estructuras Algebraicas", semestre: 4, creditos: 4, eje: "eje-disciplinar", requisitos: ["discreta"] },
  { id: "resol1", nombre: "Resolución de Problemas I", semestre: 4, creditos: 4, eje: "eje-disciplinar", requisitos: ["razmat"] },
  { id: "multi", nombre: "Multimedios e Hipermedios en Educación Matemática", semestre: 4, creditos: 3, eje: "eje-didactica", requisitos: ["softmat"] },

  // Semestre 5
  { id: "curric", nombre: "Teorías y Diseños Curriculares", semestre: 5, creditos: 3, eje: "eje-general", requisitos: ["psicoedu"] },
  { id: "eval", nombre: "Evaluación para el Aprendizaje", semestre: 5, creditos: 3, eje: "eje-general", requisitos: ["psicoedu"] },
  { id: "prainic", nombre: "Práctica Inicial: Gestión de los Procesos Curriculares y Evaluativos", semestre: 5, creditos: 3, eje: "eje-general", requisitos: ["psicoedu"] },
  { id: "estad", nombre: "Estadística", semestre: 5, creditos: 4, eje: "eje-disciplinar", requisitos: ["calcdif"] },
  { id: "edumat1", nombre: "Educación Matemática I", semestre: 5, creditos: 4, eje: "eje-didactica", requisitos: ["resol1"] },
  { id: "geoense", nombre: "Enseñanza y Aprendizaje de la Geometría para la Enseñanza Media", semestre: 5, creditos: 4, eje: "eje-didactica", requisitos: ["geo1"] }
];
// Semestre 6
ramos.push(
  { id: "orient", nombre: "Orientación Educacional", semestre: 6, creditos: 3, eje: "eje-general", requisitos: ["eval", "prainic"] },
  { id: "liderazgo", nombre: "Análisis Organizacional y Liderazgo Educativo", semestre: 6, creditos: 2, eje: "eje-general", requisitos: ["psicoedu"] },
  { id: "elect4", nombre: "Electivo Educativo 4", semestre: 6, creditos: 3, eje: "eje-electivo", requisitos: [] },
  { id: "prainter1", nombre: "Práctica Intermedia I: Orientación para la Formación Integral", semestre: 6, creditos: 3, eje: "eje-general", requisitos: ["curric", "eval", "prainic"] },
  { id: "muestreo", nombre: "Inferencia Estadística y Muestreo", semestre: 6, creditos: 4, eje: "eje-disciplinar", requisitos: ["estad"] },
  { id: "electmat1", nombre: "Electivo Matemático 1", semestre: 6, creditos: 4, eje: "eje-electivo", requisitos: [] },
  { id: "algfunc", nombre: "Enseñanza y Aprendizaje del Álgebra y las Funciones", semestre: 6, creditos: 4, eje: "eje-didactica", requisitos: ["estruct"] }
);

// Semestre 7
ramos.push(
  { id: "funddid", nombre: "Fundamentos y Principios Didácticos de la Especialidad", semestre: 7, creditos: 3, eje: "eje-didactica", requisitos: ["prainter1", "geoense", "edumat1", "estruct", "geo2", "multi", "sistemas"] },
  { id: "prainter2", nombre: "Práctica Intermedia II: Didáctica de la Especialidad", semestre: 7, creditos: 3, eje: "eje-general", requisitos: ["prainter1", "edumat1", "geoense", "estruct", "geo2", "multi", "sistemas"] },
  { id: "edumat2", nombre: "Educación Matemática II", semestre: 7, creditos: 4, eje: "eje-didactica", requisitos: ["edumat1"] },
  { id: "electmat2", nombre: "Electivo Matemático 2", semestre: 7, creditos: 4, eje: "eje-electivo", requisitos: [] },
  { id: "estadense", nombre: "Enseñanza y Aprendizaje de la Estadística y las Probabilidades para la Enseñanza Media", semestre: 7, creditos: 4, eje: "eje-didactica", requisitos: ["estad"] }
);

// Semestre 8
ramos.push(
  { id: "invest", nombre: "Métodos de la Investigación Educacional", semestre: 8, creditos: 3, eje: "eje-general", requisitos: ["funddid", "prainter2"] },
  { id: "disdid", nombre: "Diseño e Implementación Didáctica en la Especialidad", semestre: 8, creditos: 3, eje: "eje-didactica", requisitos: ["funddid", "prainter2"] },
  { id: "praavanz", nombre: "Práctica Avanzada: Diseños Didácticos de la Especialidad", semestre: 8, creditos: 3, eje: "eje-general", requisitos: ["funddid", "prainter2"] },
  { id: "resol2", nombre: "Resolución de Problemas II", semestre: 8, creditos: 4, eje: "eje-disciplinar", requisitos: ["edumat1"] },
  { id: "histmat", nombre: "Seminario Historia de la Matemática", semestre: 8, creditos: 4, eje: "eje-disciplinar", requisitos: ["estruct", "geo2", "calcdif"] },
  { id: "ticmat", nombre: "TIC en la Enseñanza y el Aprendizaje de la Matemática", semestre: 8, creditos: 3, eje: "eje-didactica", requisitos: ["multi"] }
);

// Semestre 9
ramos.push(
  { id: "praori", nombre: "Práctica Profesional en Orientación y Jefatura de Curso", semestre: 9, creditos: 6, eje: "eje-general", requisitos: ["praavanz", "disdid", "invest", "resol2", "histmat", "ticmat", "edumat2", "estadense"] },
  { id: "praesp", nombre: "Práctica Profesional de la Especialidad", semestre: 9, creditos: 14, eje: "eje-didactica", requisitos: ["praavanz", "disdid", "invest", "resol2", "histmat", "ticmat", "edumat2", "estadense"] }
);

// Trabajo de Titulación (anual)
ramos.push(
  { id: "titulo", nombre: "Trabajo de Titulación", semestre: 10, creditos: 6, eje: "eje-general", requisitos: ["praavanz"] }
);

// Funciones interactivas
function getCursados() {
  return JSON.parse(localStorage.getItem("cursados") || "[]");
}

function guardarCursados(cursados) {
  localStorage.setItem("cursados", JSON.stringify(cursados));
}

function puedeInscribir(ramo, cursados) {
  return ramo.requisitos.every(req => cursados.includes(req)) && !cursados.includes(ramo.id);
}

function renderMalla() {
  const container = document.getElementById("mallaContainer");
  container.innerHTML = "";
  const cursados = getCursados();

  for (let s = 1; s <= 10; s++) {
    const box = document.createElement("div");
    box.className = "semestre";
    const titulo = document.createElement("h2");
    titulo.textContent = `Semestre ${s}`;
    box.appendChild(titulo);
    
    ramos.filter(r => r.semestre === s).forEach(r => {
      const ramo = document.createElement("div");
      ramo.className = `ramo ${r.eje}`;
      ramo.textContent = r.nombre + ` (${r.creditos} cr)`;
      if (cursados.includes(r.id)) {
        ramo.classList.add("cursado");
      } else if (puedeInscribir(r, cursados)) {
        ramo.classList.add("inscribible");
      }
      ramo.onclick = () => {
        const nuevos = getCursados();
        const idx = nuevos.indexOf(r.id);
        if (idx >= 0) nuevos.splice(idx, 1);
        else nuevos.push(r.id);
        guardarCursados(nuevos);
        renderMalla();
      };
      box.appendChild(ramo);
    });

    container.appendChild(box);
  }
}

document.addEventListener("DOMContentLoaded", renderMalla);
