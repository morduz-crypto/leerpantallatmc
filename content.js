// Contenido simple pero completo (sin rol).
// Reemplaza imágenes en /assets manteniendo el mismo nombre.

window.SCREENS = [
  {
    id: "intro",
    icon: "👋",
    nav: "Inicio",
    title: "¿Para qué es esta guía?",
    intro: "Objetivo: que cualquier usuario (sin importar el rol) entienda cómo funcionan las pantallas más usadas en NetSuite: búsquedas, reportes y formularios.",
    img: "./assets/intro.png",
    globalTip: "Si solo recuerdas 1 cosa: primero ubícate (qué pantalla es) y después actúas (qué botón/campo toca).",
    pins: [
      { n: 1, x: 18, y: 28, title: "Búsquedas", body: "Listas tipo base de datos: filas/columnas, filtros arriba, export y links al detalle.", badge: "ok" },
      { n: 2, x: 52, y: 28, title: "Reportes", body: "Resúmenes con totales/subtotales. Útiles para análisis y para bajar al detalle (drill-down).", badge: "ok" },
      { n: 3, x: 82, y: 28, title: "Formularios (Registros)", body: "Pantallas donde creas/actualizas info. Algunos cambios generan movimientos reales.", badge: "warn" }
    ],
    cards: [
      { badge: "ok",  title: "Lo que vas a lograr", body: "1) Identificar la pantalla. 2) Saber qué revisar primero. 3) Saber qué hacer después." },
      { badge: "ok",  title: "Qué NO cubre", body: "Procesos por rol. Aquí solo es el “mapa mental” para ubicarse." },
      { badge: "warn", title: "Importante", body: "Un cambio puede afectar inventario/contabilidad. Si dudas: valida antes de guardar." }
    ],
    quiz: {
      q: "Pregunta rápida: ¿cuál pantalla usas para encontrar registros rápidamente?",
      a: "Búsqueda / Saved Search (lista con filtros y una tabla de resultados)."
    }
  },

  {
    id: "search",
    icon: "🧭",
    nav: "Búsquedas",
    title: "Búsquedas: piensa “base de datos”",
    intro: "Una búsqueda es una lista de filas (registros o líneas). Filtras arriba, lees la tabla y puedes descargar.",
    img: "./assets/saved-search.png",
    globalTip: "Tip: en filtros usa TAB para aplicar cambios. Evita ENTER si te dispara submit/descarga.",
    pins: [
      { n: 1, x: 10,  y: 16, title: "Filtros arriba", body: "Aquí defines qué entra. Cambia valores y navega con TAB para que tome el filtro.", badge: "ok" },
      { n: 2, x: 58, y: 38, title: "Tabla (filas/columnas)", body: "Cada fila es un resultado. Las columnas son campos. Puedes ordenar y paginar.", badge: "ok" },
      { n: 3, x: 86, y: 16, title: "Descargar / Exportar", body: "CSV/Excel. Úsalo para análisis, pero valida el detalle abriendo el registro.", badge: "warn" },
      { n: 4, x: 42, y: 72, title: "Abrir el registro", body: "Clic en el nombre/número te lleva al registro real (formulario).", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Qué es", body: "Una vista de datos (tabla). No es un formulario." },
      { badge: "warn", title: "Ojo", body: "Algunas búsquedas listan ‘líneas’ (detalle) y no ‘documentos’. Mira las columnas." },
      { badge: "ok",  title: "Cómo usarla bien", body: "Filtrar → revisar columnas → abrir registro si necesitas contexto." }
    ],
    quiz: {
      q: "Te dicen: “no me aparece”. ¿Qué revisas primero?",
      a: "Filtros (estado/fecha) y columnas. Luego abre el registro desde la tabla para confirmar."
    }
  },

  {
    id: "report",
    icon: "📊",
    nav: "Reportes",
    title: "Reportes: piensa “resumen + drill-down”",
    intro: "Un reporte suele agrupar y subtotalizar. Sirve para ver tendencias y totales; luego bajas al detalle.",
    img: "./assets/report.png",
    globalTip: "Si cambias filtros y no cambia nada: busca Run/Refresh del reporte.",
    pins: [
      { n: 1, x: 12, y: 18, title: "Filtros del reporte", body: "Fecha, subsidiaria, etc. Definen el alcance del número que estás viendo.", badge: "ok" },
      { n: 2, x: 86, y: 18, title: "Run / Refresh", body: "Vuelve a correr el reporte con los filtros actuales.", badge: "warn" },
      { n: 3, x: 28, y: 54, title: "Agrupaciones / Subtotales", body: "Identifica por qué agrupa (cliente, cuenta, mes). Eso explica el subtotal.", badge: "ok" },
      { n: 4, x: 70, y: 62, title: "Drill-down", body: "Clic en un valor para ver transacciones detrás del número.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Qué es", body: "Resumen para análisis. Ideal para totales y comparativos." },
      { badge: "warn", title: "Diferencia vs búsqueda", body: "El reporte agrega; la búsqueda lista filas. Para investigar, usa drill-down." },
      { badge: "ok",  title: "Regla práctica", body: "Si un total se ve raro: drill-down → revisa transacciones → valida estado/fechas." }
    ],
    quiz: {
      q: "¿Cuándo usarías un reporte en vez de una búsqueda?",
      a: "Cuando necesitas totales/subtotales y tendencias. Para detalle fila a fila, usa búsqueda."
    }
  },

  {
    id: "record",
    icon: "🧾",
    nav: "Formularios",
    title: "Formularios (registros): el tipo importa",
    intro: "En NetSuite, un formulario puede ser una transacción, una entidad o un registro personalizado. Todos se ven parecidos, pero no hacen lo mismo.",
    img: "./assets/record.png",
    globalTip: "Primero: VIEW o EDIT. Segundo: Status. Tercero: obligatorios. Luego sí: guardar.",
    pins: [
      { n: 1, x: 10, y: 15, title: "VIEW vs EDIT + Status", body: "Ubícate: ver o editar. El status define botones y restricciones.", badge: "ok" },
      { n: 2, x: 26, y: 32, title: "Información principal", body: "Datos base (cliente/fecha/moneda/ubicación). Cambiar esto puede recalcular el documento.", badge: "warn" },
      { n: 3, x: 20, y: 52, title: "Pestañas y grupos", body: "Los campos se organizan por secciones y pestañas. Ahí están adjuntos, notas, relaciones.", badge: "ok" },
      { n: 4, x: 40, y: 74, title: "Líneas (detalle)", body: "Items/expenses/apply. Aquí se definen cantidades, precios e impuestos.", badge: "ok" }
    ],
    cards: [
      { badge: "warn", title: "Transacciones", body: "Ej: orden de venta, factura, recibo. Suelen mover inventario, cuentas por cobrar/pagar y contabilidad." },
      { badge: "ok",  title: "Entidades (maestros)", body: "Ej: cliente, proveedor, artículo, empleado. Son fichas base que se usan en transacciones." },
      { badge: "ok",  title: "Registros personalizados", body: "Para seguimiento/logs, relacionar información, control interno, o registrar datos operativos (sin procesos contables directos, normalmente)." }
    ],
    quiz: {
      q: "¿Qué debes revisar antes de cambiar un dato sensible (cliente/moneda/ubicación)?",
      a: "Que estés en EDIT, el Status permita cambios, y entender si es transacción (impacta), entidad (maestro) o custom (informativo)."
    }
  },

  {
    id: "errors",
    icon: "✅",
    nav: "Validaciones",
    title: "Campos obligatorios, warnings y permisos",
    intro: "La mayoría de bloqueos son: campo obligatorio, campo dependiente, solo lectura por status/rol o warning de negocio.",
    img: "./assets/errors.png",
    globalTip: "Error bloquea. Warning deja seguir. Ambos te dicen qué revisar.",
    pins: [
      { n: 1, x: 16, y: 28, title: "Obligatorio (Error)", body: "Si falta, no guarda. El mensaje normalmente nombra el campo exacto.", badge: "err" },
      { n: 2, x: 44, y: 45, title: "Dependiente", body: "Se habilita cuando eliges algo antes (cliente, subsidiaria, tipo, ubicación…).", badge: "ok" },
      { n: 3, x: 70, y: 30, title: "Solo lectura", body: "Calculado o bloqueado por status/permisos. No es un bug.", badge: "warn" },
      { n: 4, x: 78, y: 72, title: "Warning (negocio)", body: "Ej: cliente bloqueado/cupo/validaciones. Puede dejar guardar pero afecta pasos siguientes.", badge: "warn" }
    ],
    cards: [
      { badge: "err", title: "Error", body: "Bloquea guardado o acción. Corrige el campo indicado." },
      { badge: "warn", title: "Warning", body: "Te deja avanzar, pero avisa un riesgo o restricción del proceso." },
      { badge: "ok",  title: "Para pedir ayuda", body: "Envía: URL + número del doc + pantallazo + pasos + tu rol/área." }
    ],
    quiz: {
      q: "Te sale un mensaje rojo y no guarda. ¿Qué haces?",
      a: "Lee el mensaje completo, ubica el campo exacto, revisa si es info principal o líneas, corrige y guarda."
    }
  }
];
