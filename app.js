// ═══════════════════════════════════════════════════
// DATOS — Artículos del blog
// ═══════════════════════════════════════════════════
const HOTMART_URL = "https://go.hotmart.com/P105354425M?dp=1";

const articulos = [
  {
    id: "respuestas-inutiles",
    titulo: "¿Por qué la IA te da respuestas inútiles?",
    resumen: "Si ChatGPT o Claude te han decepcionado, el problema no es la herramienta. Es cómo le estás hablando.",
    fecha: "Abril 2026",
    icono: "bot",
    tiempo: "2 min",
    contenido: `
      <p>Has abierto ChatGPT, le has escrito tu pregunta y la respuesta ha sido tan genérica que podría aplicar a cualquier persona en el planeta.</p>
      <p>Frustrante. Pero tiene una causa muy concreta.</p>

      <h2>La IA no adivina. Lee exactamente lo que le escribes.</h2>
      <p>Si le escribes "ayúdame con mi negocio", la IA no sabe qué negocio tienes, qué problema tienes ni qué resultado esperas. Responde en consecuencia: con algo vago, genérico e inútil.</p>
      <p>El problema no es la inteligencia artificial. El problema es la instrucción que le das. Esa instrucción se llama <strong>prompt</strong>.</p>

      <h2>Prompt malo vs. prompt bueno</h2>
      <div class="ejemplo-bloque malo">
        <span class="ejemplo-tag">❌ Prompt malo</span>
        <p>"Ayúdame con mi negocio."</p>
      </div>
      <div class="ejemplo-bloque bueno">
        <span class="ejemplo-tag">✅ Prompt bueno</span>
        <p>"Tengo una peluquería en Bucaramanga con 2 empleados. Quiero atraer clientes jóvenes entre 20 y 30 años. Dame 5 ideas de publicaciones para Instagram esta semana. Tono cercano y juvenil."</p>
      </div>
      <p>Mismo objetivo. Resultado completamente diferente.</p>

      <h2>La regla de oro</h2>
      <p>Entre más contexto le das a la IA, mejor respuesta te devuelve. No le hables como a un buscador. Háblale como a un asistente que acaba de empezar a trabajar contigo y necesita entender tu situación.</p>
      <p>Eso es todo. No necesitas saber programar. No necesitas pagar nada. Solo necesitas aprender a escribirle bien.</p>
    `
  },
  {
    id: "formula-4-partes",
    titulo: "La fórmula de 4 partes para hablarle bien a la IA",
    resumen: "Existe una estructura simple que convierte cualquier prompt mediocre en una instrucción que la IA entiende perfectamente.",
    fecha: "Abril 2026",
    icono: "target",
    tiempo: "2 min",
    contenido: `
      <p>No existe el prompt perfecto por intuición. Existe la estructura correcta que, una vez que la aprendes, transforma completamente los resultados que obtienes.</p>
      <p>Se llama la fórmula de 4 partes y puedes aplicarla a cualquier cosa que le pidas a la IA.</p>

      <h2>Las 4 partes</h2>
      <div class="formula-grid">
        <div class="formula-item">
          <span class="formula-num">1</span>
          <strong>Contexto</strong>
          <p>¿Quién eres y cuál es tu situación? <br><em>"Soy dueño de una tienda de ropa..."</em></p>
        </div>
        <div class="formula-item">
          <span class="formula-num">2</span>
          <strong>Tarea</strong>
          <p>¿Qué necesitas exactamente? <br><em>"...necesito 5 ideas de publicaciones..."</em></p>
        </div>
        <div class="formula-item">
          <span class="formula-num">3</span>
          <strong>Formato</strong>
          <p>¿Cómo quieres la respuesta? <br><em>"...en lista corta con emoji..."</em></p>
        </div>
        <div class="formula-item">
          <span class="formula-num">4</span>
          <strong>Tono</strong>
          <p>¿Cómo debe sonar? <br><em>"...tono amigable y juvenil."</em></p>
        </div>
      </div>

      <h2>El prompt completo</h2>
      <div class="ejemplo-bloque bueno">
        <span class="ejemplo-tag">✅ Prompt con la fórmula</span>
        <p>"Soy dueño de una tienda de ropa femenina en Medellín (CONTEXTO). Necesito 5 ideas de publicaciones para Instagram esta semana (TAREA). En formato de lista con emoji para cada punto (FORMATO). Tono amigable y juvenil, como si hablaras con clientas de 20 a 30 años (TONO)."</p>
      </div>

      <h2>¿Necesitas las 4 siempre?</h2>
      <p>No. Para preguntas simples, con 2 o 3 partes es suficiente. Pero cuando la tarea es importante o específica, usar las 4 partes hace la diferencia entre una respuesta promedio y una que puedes usar directamente.</p>
      <p>Guarda esta fórmula. Es la base de todo lo demás.</p>
    `
  },
  {
    id: "tokens-explicados",
    titulo: "Qué son los tokens y cómo no desperdiciarlos",
    resumen: "La IA te corta la respuesta a la mitad sin aviso. Esto es lo que está pasando y cómo evitarlo sin pagar nada.",
    fecha: "Abril 2026",
    icono: "zap",
    tiempo: "2 min",
    contenido: `
      <p>Estás en medio de una conversación útil con la IA y de repente para. La respuesta queda incompleta. Le preguntas algo más y te dice que esperes o que tu límite se acabó.</p>
      <p>¿Qué pasó? Te quedaste sin tokens.</p>

      <h2>¿Qué es un token?</h2>
      <p>Un token es básicamente un pedacito de texto. Puede ser una palabra completa, media palabra o un signo de puntuación. La IA procesa todo en tokens y los planes gratuitos tienen un límite diario.</p>
      <p>Piénsalo como una alcancía. Cada mensaje que envías y cada respuesta que recibes gasta monedas. Cuando se acaban, la IA para.</p>

      <h2>3 formas de hacer durar el doble tus tokens gratuitos</h2>
      <div class="tip-lista">
        <div class="tip-item">
          <span>✂️</span>
          <div>
            <strong>Sé directo desde el primer mensaje</strong>
            <p>No saludes a la IA. No le digas "espero que estés bien". Ve directo al punto. Cada palabra innecesaria consume tokens.</p>
          </div>
        </div>
        <div class="tip-item">
          <span>🎯</span>
          <div>
            <strong>Una tarea a la vez</strong>
            <p>En lugar de pedir 10 cosas en un solo mensaje, divide. Las respuestas serán más enfocadas y usarás el límite mejor.</p>
          </div>
        </div>
        <div class="tip-item">
          <span>📋</span>
          <div>
            <strong>Pide respuestas cortas</strong>
            <p>Agrega al final: "Responde en máximo 150 palabras" o "Dame solo los puntos clave." Obtienes lo esencial sin desperdicio.</p>
          </div>
        </div>
      </div>

      <h2>Truco extra: usa dos herramientas</h2>
      <p>Ten cuenta en ChatGPT y en Claude. Cuando una llega al límite del día, pasas a la otra. Así tienes IA disponible todo el día, completamente gratis.</p>
    `
  },
  {
    id: "errores-chatgpt",
    titulo: "5 errores que cometes al usar ChatGPT (y cómo evitarlos)",
    resumen: "No es que la IA sea mala. Es que nadie te explicó estos errores básicos que arruinan los resultados desde el primer mensaje.",
    fecha: "Abril 2026",
    icono: "triangle-alert",
    tiempo: "3 min",
    contenido: `
      <p>La mayoría de personas usa la IA de la misma manera incorrecta. No porque sean torpes, sino porque nadie se tomó el tiempo de explicar lo básico.</p>
      <p>Aquí están los 5 errores más comunes y cómo corregirlos hoy mismo.</p>

      <h2>Error 1: Creerle todo sin verificar</h2>
      <p>La IA puede inventar datos, fechas y fuentes que no existen, con total confianza. Esto se llama alucinación. Si la información va a usarse para una decisión importante, verifica siempre en la fuente original.</p>

      <h2>Error 2: Darse por vencido con la primera respuesta</h2>
      <p>Si la respuesta no sirve, no cierres el chat. Dile qué estuvo mal y pídele que mejore. <em>"Está bien pero suena muy formal. Reescríbelo más amigable."</em> Eso se llama iterar y es donde está la magia.</p>

      <h2>Error 3: Pedir demasiado en un solo mensaje</h2>
      <p>"Hazme el plan de negocio completo, el logo, el slogan y las proyecciones financieras." No funciona. Divide en pasos pequeños. Una tarea a la vez.</p>

      <h2>Error 4: No dar contexto</h2>
      <p>La IA no sabe quién eres. Si no le dices que tienes una tienda de postres en Cali, te va a responder como si fueras cualquier persona en el mundo. El contexto lo es todo.</p>

      <h2>Error 5: Compartir información confidencial</h2>
      <p>Nunca escribas contraseñas, datos bancarios o información privada de clientes en herramientas de IA gratuitas. Esa información puede ser usada para entrenar modelos futuros.</p>

      <p>Con evitar estos cinco errores ya estás por delante de la mayoría de personas que usan IA hoy.</p>
    `
  },
  {
    id: "herramientas-gratis",
    titulo: "Herramientas de IA gratis que deberías estar usando hoy",
    resumen: "No necesitas pagar para acceder a IA poderosa. Estas 4 herramientas tienen plan gratuito y cubren casi todo lo que necesitas.",
    fecha: "Abril 2026",
    icono: "wrench",
    tiempo: "2 min",
    contenido: `
      <p>Uno de los mitos más grandes sobre la IA es que hay que pagar para usarla bien. Falso. Estas cuatro herramientas tienen planes gratuitos muy completos que cubren la mayoría de necesidades del día a día.</p>

      <h2>Las 4 herramientas esenciales</h2>
      <div class="herramientas-grid">
        <div class="herramienta-card">
          <span class="herramienta-emoji">🤖</span>
          <strong>ChatGPT</strong>
          <p>El más popular. Ideal para tareas variadas: redactar, resumir, crear ideas, responder preguntas. Plan gratuito muy completo.</p>
          <a href="https://chat.openai.com" target="_blank" class="herramienta-link">chat.openai.com →</a>
        </div>
        <div class="herramienta-card">
          <span class="herramienta-emoji">🧠</span>
          <strong>Claude</strong>
          <a href="https://claude.ai" target="_blank" class="herramienta-link">claude.ai →</a>
          <p>Mejor para textos largos y análisis profundos. Respuestas más detalladas y con mejor redacción.</p>
        </div>
        <div class="herramienta-card">
          <span class="herramienta-emoji">🔍</span>
          <strong>Gemini</strong>
          <p>La IA de Google. Integrada con Gmail, Docs y Drive. Conectada a internet en tiempo real.</p>
          <a href="https://gemini.google.com" target="_blank" class="herramienta-link">gemini.google.com →</a>
        </div>
        <div class="herramienta-card">
          <span class="herramienta-emoji">💼</span>
          <strong>Copilot</strong>
          <p>La IA de Microsoft. Ya viene en Windows 11 y Office. Si usas Word o Excel, ya lo tienes disponible.</p>
          <a href="https://copilot.microsoft.com" target="_blank" class="herramienta-link">copilot.microsoft.com →</a>
        </div>
      </div>

      <h2>¿Cuál usar?</h2>
      <p>No tienes que elegir solo una. La estrategia más inteligente es tener cuenta en al menos dos. Cuando una llega a su límite diario, usas la otra. Así tienes IA disponible todo el día sin pagar nada.</p>
      <p>Empieza con ChatGPT y Claude. Son los más completos y los más fáciles de usar desde el celular o el computador.</p>
    `
  }
];


// ═══════════════════════════════════════════════════
// COMPONENTES REUTILIZABLES
// ═══════════════════════════════════════════════════

function ctaBanner() {
  return `
    <aside class="cta-banner">
      <div class="cta-banner__inner">
        <i data-lucide="book-open" class="cta-banner__icono"></i>
        <div class="cta-banner__text">
          <strong>¿Quieres dominar todo esto paso a paso?</strong>
          <p>La guía completa y actualizada — sin tecnicismos, con herramientas gratuitas y ejemplos reales.</p>
        </div>
        <a href="${HOTMART_URL}" target="_blank" class="btn btn--primary">
          Ver Guía Completa <i data-lucide="arrow-right"></i>
        </a>
      </div>
    </aside>
  `;
}

function tarjetaArticulo(art) {
  return `
    <article class="card" data-id="${art.id}">
      <div class="card__icono"><i data-lucide="${art.icono}"></i></div>
      <div class="card__body">
        <div class="card__meta">
          <span>${art.fecha}</span>
          <span>·</span>
          <span>${art.tiempo} lectura</span>
        </div>
        <h3 class="card__titulo">${art.titulo}</h3>
        <p class="card__resumen">${art.resumen}</p>
        <button class="btn btn--ghost" onclick="irA('articulo', '${art.id}')">
          Leer artículo <i data-lucide="arrow-right"></i>
        </button>
      </div>
    </article>
  `;
}


// ═══════════════════════════════════════════════════
// PÁGINAS
// ═══════════════════════════════════════════════════

function paginaInicio() {
  return `
    <!-- HERO -->
    <section class="hero">
      <div class="container hero__inner">
        <div class="hero__badge">🆓 Contenido 100% gratuito</div>
        <h1 class="hero__titulo">
          Aprende a usar la IA<br/>
          <span class="hero__accent">sin ser experto</span>
        </h1>
        <p class="hero__sub">
          Prompts, herramientas y guías prácticas para personas que quieren
          resultados reales sin saber de tecnología.
        </p>
        <div class="hero__btns">
          <button class="btn btn--primary" onclick="irA('blog')">Leer artículos gratis</button>
          <a href="${HOTMART_URL}" target="_blank" class="btn btn--outline">Ver Guía Completa <i data-lucide="arrow-right"></i></a>
        </div>
      </div>
    </section>

    <!-- ARTÍCULOS RECIENTES -->
    <section class="seccion">
      <div class="container">
        <h2 class="seccion__titulo">Últimos artículos</h2>
        <div class="cards-grid">
          ${articulos.map(tarjetaArticulo).join("")}
        </div>
      </div>
    </section>

    <!-- CTA EBOOK -->
    <section class="seccion seccion--dark">
      <div class="container cta-central">
        <i data-lucide="brain" class="cta-central__icono"></i>
        <h2>¿Listo para ir más allá?</h2>
        <p>La guía completa cubre todo lo que necesitas: prompts, herramientas gratuitas, errores comunes y un plan de 7 días para empezar desde cero.</p>
        <a href="${HOTMART_URL}" target="_blank" class="btn btn--primary btn--lg">
          Ver Guía Completa <i data-lucide="arrow-right"></i>
        </a>
      </div>
    </section>
  `;
}

function paginaBlog() {
  return `
    <section class="seccion">
      <div class="container">
        <div class="pagina-header">
          <h1>Blog</h1>
          <p>Artículos cortos y prácticos sobre IA. Sin tecnicismos.</p>
        </div>
        <div class="cards-grid">
          ${articulos.map(tarjetaArticulo).join("")}
        </div>
      </div>
    </section>
  `;
}

function paginaArticulo(id) {
  const art = articulos.find(a => a.id === id);
  if (!art) return `<div class="container"><p>Artículo no encontrado.</p></div>`;

  return `
    <article class="articulo">
      <div class="container articulo__inner">

        <!-- Breadcrumb -->
        <nav class="breadcrumb">
          <button onclick="irA('blog')" class="breadcrumb__link"><i data-lucide="arrow-left"></i> Blog</button>
        </nav>

        <!-- Cabecera -->
        <header class="articulo__header">
          <div class="articulo__icono"><i data-lucide="${art.icono}"></i></div>
          <div class="articulo__meta">
            <span>${art.fecha}</span> · <span>${art.tiempo} de lectura</span>
          </div>
          <h1 class="articulo__titulo">${art.titulo}</h1>
          <p class="articulo__resumen">${art.resumen}</p>
        </header>

        <!-- Contenido -->
        <div class="articulo__contenido">
          ${art.contenido}
        </div>

        <!-- CTA al ebook -->
        ${ctaBanner()}

        <!-- Más artículos -->
        <section class="mas-articulos">
          <h3>Más artículos</h3>
          <div class="cards-grid cards-grid--compact">
            ${articulos
              .filter(a => a.id !== id)
              .slice(0, 3)
              .map(tarjetaArticulo)
              .join("")}
          </div>
        </section>

      </div>
    </article>
  `;
}

function paginaRecursos() {
  return `
    <section class="seccion">
      <div class="container">
        <div class="pagina-header">
          <h1>Recursos</h1>
          <p>Guías completas para dominar la IA desde cero.</p>
        </div>

        <div class="ebooks-grid">

          <!-- Ebook ES -->
          <div class="ebook-card">
            <div class="ebook-card__badge">🇨🇴 Español</div>
            <div class="ebook-card__icono"><i data-lucide="book-open"></i></div>
            <h2 class="ebook-card__titulo">Habla Bien, Gana Más</h2>
            <p class="ebook-card__sub">La guía práctica para hablarle a la IA sin ser experto</p>
            <ul class="ebook-card__lista">
              <li><i data-lucide="circle-check"></i> Qué es un prompt y cómo escribirlo bien</li>
              <li><i data-lucide="circle-check"></i> Herramientas gratuitas paso a paso</li>
              <li><i data-lucide="circle-check"></i> 30 usos prácticos para tu vida y negocio</li>
              <li><i data-lucide="circle-check"></i> Plan de acción de 7 días</li>
              <li><i data-lucide="circle-check"></i> Sin tecnicismos ni código</li>
            </ul>
            <a href="${HOTMART_URL}" target="_blank" class="btn btn--primary btn--lg btn--full">
              Obtener la Guía <i data-lucide="arrow-right"></i>
            </a>
          </div>

          <!-- Próximamente -->
          <div class="ebook-card ebook-card--pronto">
            <div class="ebook-card__badge">🔜 Próximamente</div>
            <div class="ebook-card__icono"><i data-lucide="book"></i></div>
            <h2 class="ebook-card__titulo">Más guías en camino</h2>
            <p class="ebook-card__sub">Nuevas guías prácticas sobre IA para negocios, estudio y productividad.</p>
            <p class="ebook-card__nota">Síguenos en Facebook para ser el primero en saberlo.</p>
            <a href="https://www.facebook.com/profile.php?id=61572056341224" target="_blank" class="btn btn--outline btn--full">
              Seguir en Facebook <i data-lucide="external-link"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  `;
}

function paginaSobreMi() {
  return `
    <section class="seccion">
      <div class="container sobre-mi">
        <div class="pagina-header">
          <h1>Sobre mí</h1>
        </div>
        <div class="sobre-mi__inner">
          <div class="sobre-mi__avatar"><i data-lucide="brain"></i></div>
          <div class="sobre-mi__texto">
            <h2>Hola, soy la persona detrás de IA Sin Filtros.</h2>
            <p>Empecé a explorar la Inteligencia Artificial como una herramienta para mi trabajo y me di cuenta de algo: la mayoría de contenido sobre IA está hecho para personas técnicas.</p>
            <p>Nadie le explicaba a la persona normal, al emprendedor, al estudiante, a la mamá ocupada, cómo sacarle provecho real a estas herramientas sin necesidad de saber programar.</p>
            <p>Por eso creé este espacio. Para compartir lo que funciona, en palabras simples, con ejemplos reales.</p>
            <p>Todo el contenido aquí es gratuito. Y si quieres ir más a fondo, tengo una guía completa que cubre todo paso a paso.</p>
            <div class="sobre-mi__btns">
              <a href="${HOTMART_URL}" target="_blank" class="btn btn--primary">Ver la Guía Completa <i data-lucide="arrow-right"></i></a>
              <a href="https://www.facebook.com/profile.php?id=61572056341224" target="_blank" class="btn btn--outline">Seguir en Facebook <i data-lucide="external-link"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}


// ═══════════════════════════════════════════════════
// ROUTER
// ═══════════════════════════════════════════════════

let paginaActual = "inicio";
let articuloActual = null;

function irA(pagina, id = null) {
  paginaActual = pagina;
  articuloActual = id;
  renderizar();
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Actualizar links activos en navbar
  document.querySelectorAll(".navbar__links a, .navbar__mobile a").forEach(a => {
    a.classList.remove("activo");
    if (
      (pagina === "inicio" && a.getAttribute("href") === "index.html") ||
      (pagina === "blog" && a.getAttribute("href") === "blog.html") ||
      (pagina === "recursos" && a.getAttribute("href") === "recursos.html") ||
      (pagina === "sobre-mi" && a.getAttribute("href") === "sobre-mi.html")
    ) {
      a.classList.add("activo");
    }
  });

  // Cerrar menú móvil
  document.getElementById("mobileMenu").classList.remove("open");
}

function renderizar() {
  const app = document.getElementById("app");
  switch (paginaActual) {
    case "inicio":   app.innerHTML = paginaInicio(); break;
    case "blog":     app.innerHTML = paginaBlog(); break;
    case "articulo": app.innerHTML = paginaArticulo(articuloActual); break;
    case "recursos": app.innerHTML = paginaRecursos(); break;
    case "sobre-mi": app.innerHTML = paginaSobreMi(); break;
    default:         app.innerHTML = paginaInicio();
  }
  // Reinicializar iconos Lucide tras cada render del router
  if (window.refreshIcons) window.refreshIcons();
}

// Interceptar links del navbar para usar el router
document.addEventListener("DOMContentLoaded", () => {
  // Navbar links
  document.querySelectorAll(".navbar__links a, .navbar__mobile a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const href = a.getAttribute("href");
      if (href === "index.html") irA("inicio");
      else if (href === "blog.html") irA("blog");
      else if (href === "recursos.html") irA("recursos");
      else if (href === "sobre-mi.html") irA("sobre-mi");
    });
  });

  // Menú hamburguesa móvil
  document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("mobileMenu").classList.toggle("open");
  });

  // Navbar sticky con sombra al scroll
  window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });

  // Render inicial
  renderizar();
});