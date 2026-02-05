// Plantilla corta y general (sin rol).
// Reemplaza imágenes en /assets manteniendo el mismo nombre.

window.SCREENS = [
  {
    id: "search",
    icon: "🧭",
    nav: "Búsqueda / Saved Search",
    title: "Búsquedas: piensa “base de datos”",
    intro: "Una búsqueda es una lista de filas (registros o líneas). Filtras arriba, lees la tabla y puedes descargar.",
    img: "./assets/saved-search.png",
    globalTip: "Tip: en filtros usa TAB para aplicar cambios. Evita ENTER si te dispara descarga/submit.",
    pins: [
      { n: 1, x: 10,  y: 16, title: "Filtros arriba", body: "Aquí defines qué entra. Cambia valores y navega con TAB para que tome el filtro.", badge: "ok" },
      { n: 2, x: 58, y: 38, title: "Tabla (filas/columnas)", body: "Cada fila es un resultado. Las columnas son campos. Puedes ordenar y paginar.", badge: "ok" },
      { n: 3, x: 86, y: 16, title: "Descargar / Exportar", body: "CSV/Excel. Úsalo para análisis rápido, pero valida el detalle en el registro.", badge: "warn" },
      { n: 4, x: 42, y: 72, title: "Abrir el registro", body: "Clic en el nombre/número te lleva al registro real. Ahí ves estado, pestañas y trazabilidad.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Qué es", body: "Una vista de datos (tipo tabla). No es un formulario." },
      { badge: "warn", title: "Ojo", body: "A veces la búsqueda muestra líneas (detalle), no solo “documentos”. Mira el contexto de columnas." },
      { badge: "ok",  title: "Regla práctica", body: "Filtra → valida cantidades/estado → abre registro si necesitas entender el porqué." }
    ],
    quiz: {
      q: "Te piden un listado y también el detalle del documento. ¿Qué haces?",
      a: "Usa la búsqueda para encontrar y filtrar. Luego abre el registro desde la tabla para ver el detalle real."
    }
  },

  {
    id: "report",
    icon: "📊",
    nav: "Informe / Report",
    title: "Informes: piensa “resumen + drill-down”",
    intro: "Un informe suele agrupar y subtotalizar. Sirve para ver tendencias y totales, luego bajas al detalle.",
    img: "./assets/report.png",
    globalTip: "Si cambias filtros y no cambia nada: busca Run/Refresh del reporte.",
    pins: [
      { n: 1, x: 12, y: 18, title: "Filtros del reporte", body: "Fecha, subsidiaria, etc. Definen el alcance del número que estás viendo.", badge: "ok" },
      { n: 2, x: 86, y: 18, title: "Run / Refresh", body: "Vuelve a correr el reporte con los filtros actuales (si no, ves el cálculo anterior).", badge: "warn" },
      { n: 3, x: 28, y: 54, title: "Agrupaciones / Subtotales", body: "Identifica por qué agrupa (cliente, cuenta, mes). Eso explica el subtotal.", badge: "ok" },
      { n: 4, x: 70, y: 62, title: "Drill-down", body: "Clic en un valor para ver transacciones detrás del número.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Qué es", body: "Resumen para análisis. Ideal para totales y comparativos." },
      { badge: "warn", title: "Diferencia vs búsqueda", body: "El reporte agrega; la búsqueda lista filas. Para investigar, usa drill-down y abre registros." },
      { badge: "ok",  title: "Tip", body: "Si un total se ve raro, valida por drill-down y revisa estado/fechas en registros." }
    ],
    quiz: {
      q: "¿Cuándo usarías un reporte en vez de una búsqueda?",
      a: "Cuando necesitas totales/subtotales y tendencias (resumen). Para detalle fila a fila, usa búsqueda."
    }
  },

  {
    id: "record",
    icon: "🧾",
    nav: "Formulario / Registro",
    title: "Formularios: modo ver, modo editar y secciones",
    intro: "Un registro puede ser transacción, entidad o custom. Siempre ubícate: VIEW/EDIT, obligatorios, secciones, pestañas y líneas.",
    img: "./assets/record.png",
    globalTip: "Antes de tocar algo: confirma el modo (VIEW vs EDIT) y el estado (Status).",
    pins: [
      { n: 1, x: 10, y: 15, title: "VIEW vs EDIT + Status", body: "Primero: ¿estás viendo o editando? El status manda botones y restricciones.", badge: "ok" },
      { n: 2, x: 26, y: 32, title: "Información principal", body: "Datos base (cliente/fecha/moneda/ubicación…). Cambios aquí pueden recalcular todo.", badge: "warn" },
      { n: 3, x: 20, y: 52, title: "Grupos y pestañas", body: "Campos están agrupados y en pestañas. Aquí vive info adicional, adjuntos, comunicación.", badge: "ok" },
      { n: 4, x: 40, y: 74, title: "Líneas (detalle)", body: "Items/expenses/apply. Aquí están cantidades, precios, impuestos. Es el ‘detalle’ del documento.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Tipos de campos", body: "Texto, lista desplegable, checkbox, multi-select, fecha, número. Llenas como cualquier formulario online." },
      { badge: "warn", title: "Pero…", body: "En NetSuite tus cambios pueden afectar inventario, cartera o contabilidad (no edites a ciegas)." },
      { badge: "ok",  title: "Ubicación rápida", body: "Si el problema es total/impuesto: mira líneas. Si es cliente/moneda/fecha: mira info principal." }
    ],
    quiz: {
      q: "Te falta un botón y un campo está gris. ¿Qué revisas primero?",
      a: "1) ¿Estás en VIEW o EDIT? 2) Status del registro. 3) Permisos del rol. Luego campos obligatorios/dependientes."
    }
  },

  {
    id: "errors",
    icon: "✅",
    nav: "Obligatorios, warnings y permisos",
    title: "Por qué no te deja guardar (y por qué algo está gris)",
    intro: "La mayoría de bloqueos son: campo obligatorio, campo dependiente, solo lectura por status/rol o warning de negocio.",
    img: "./assets/errors.png",
    globalTip: "Error bloquea. Warning deja seguir. Ambos te dicen qué revisar.",
    pins: [
      { n: 1, x: 16, y: 28, title: "Obligatorio (Error)", body: "Si falta, no guarda. El mensaje normalmente nombra el campo exacto.", badge: "err" },
      { n: 2, x: 44, y: 45, title: "Dependiente", body: "Se habilita cuando eliges algo antes (cliente, subsidiaria, tipo, ubicación…).", badge: "ok" },
      { n: 3, x: 70, y: 30, title: "Solo lectura", body: "Calculado o bloqueado por status/permisos. No es un bug.", badge: "warn" },
      { n: 4, x: 78, y: 72, title: "Warning (negocio)", body: "Ej: cliente bloqueado / cupo / validación. Puede dejar guardar pero afecta pasos siguientes.", badge: "warn" }
    ],
    cards: [
      { badge: "err", title: "Error", body: "Bloquea el guardado o la acción. Corrige el campo indicado." },
      { badge: "warn", title: "Warning", body: "Te deja avanzar, pero avisa un riesgo o restricción del proceso." },
      { badge: "ok",  title: "Para pedir ayuda", body: "Envía: URL + número del doc + pantallazo + pasos + tu rol/área." }
    ],
    quiz: {
      q: "Te sale un mensaje rojo y no guarda. ¿Qué haces?",
      a: "Lee el mensaje completo, ubica el campo exacto, revisa si es info principal o líneas, corrige y guarda."
    }
  }
];
