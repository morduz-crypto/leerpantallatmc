// Edita este archivo: textos, pines, tips y retos.
// Reemplaza las imágenes en /assets con el mismo nombre.

window.SCREENS = [
  {
    id: "search",
    icon: "🧭",
    nav: "Lista / Saved Search",
    title: "Cómo leer una lista o búsqueda guardada",
    intro: "Te ayuda a ubicarte: filtras, interpretas la tabla, abres un registro y exportas.",
    img: "./assets/saved-search.png",
    globalTip: "Si quieres encontrar algo rápido: filtra por Estado + Fecha antes de scrollear.",
    pins: [
      { n: 1, x: 8,  y: 16, title: "Filtros", body: "Define qué entra y qué sale. Si ‘no aparece’, normalmente es filtro/fecha/estado.", badge: "ok" },
      { n: 2, x: 58, y: 33, title: "Tabla de resultados", body: "Las columnas explican el dato. Puedes ordenar y paginar. Ojo con totales/resúmenes.", badge: "ok" },
      { n: 3, x: 86, y: 16, title: "Exportar", body: "Úsalo para trabajar en Excel/CSV. En export, el formato puede cambiar (normal).", badge: "warn" },
      { n: 4, x: 50, y: 72, title: "Abrir registro", body: "Clic en el número/nombre abre el detalle. Esto es tu ‘drill’ hacia la verdad del dato.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Objetivo", body: "Encontrar información sin duplicar registros y sin adivinar." },
      { badge: "warn", title: "Ojo", body: "Una búsqueda muestra resultados; no siempre muestra el ‘por qué’. Para eso abre el registro." },
      { badge: "ok",  title: "Regla de oro", body: "Si algo no cuadra: filtra → abre el registro → valida Related Records." }
    ],
    quiz: {
      q: "Te dicen: “No encuentro la transacción”. ¿Qué haces primero?",
      a: "1) Filtra por Estado y rango de fechas. 2) Busca por número/cliente. 3) Abre el registro desde la tabla."
    }
  },

  {
    id: "report",
    icon: "📊",
    nav: "Informe / Report",
    title: "Cómo leer un informe (Report)",
    intro: "Un reporte suele mostrar datos agregados: agrupaciones, subtotales y drill-down por valores.",
    img: "./assets/report.png",
    globalTip: "Si cambias filtros y no ves cambios: busca el botón Run/Refresh del reporte.",
    pins: [
      { n: 1, x: 10, y: 18, title: "Rango de fechas", body: "La mayoría de reportes se explican por el rango. Confirma fechas antes de concluir.", badge: "ok" },
      { n: 2, x: 86, y: 18, title: "Run / Refresh", body: "Recalcula el reporte con los filtros actuales. Si no lo corres, ves datos viejos.", badge: "warn" },
      { n: 3, x: 28, y: 54, title: "Agrupaciones", body: "Mira por qué está agrupado (cliente, cuenta, mes, etc.). Eso define subtotales.", badge: "ok" },
      { n: 4, x: 70, y: 62, title: "Drill-down", body: "Clic en un valor → detalle. El reporte agrega; el drill-down muestra transacciones.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Qué es", body: "Vista agregada para análisis. Ideal para totales, tendencias, comparativos." },
      { badge: "warn", title: "Limitación típica", body: "No siempre refleja campos custom o lógicas especiales; valida en registros." },
      { badge: "ok",  title: "Tip", body: "Si un total ‘se ve raro’, entra por drill-down y revisa transacciones puntuales." }
    ],
    quiz: {
      q: "Ves un total alto inesperado. ¿Cuál es el mejor siguiente paso?",
      a: "Haz drill-down desde el total para ver qué transacciones lo componen y valida estados/fechas."
    }
  },

  {
    id: "record",
    icon: "🧾",
    nav: "Registro (transacción/entidad/custom)",
    title: "Cómo leer un registro: estado, encabezado, líneas y pestañas",
    intro: "Este patrón aplica a transacciones, entidades (cliente/item) y registros personalizados.",
    img: "./assets/record.png",
    globalTip: "Si no ves un botón: revisa el Status + permisos del rol. No asumas que es “error”.",
    pins: [
      { n: 1, x: 10, y: 15, title: "Status (Estado)", body: "El estado manda: define si puedes editar, aprobar, transformar o cerrar.", badge: "ok" },
      { n: 2, x: 22, y: 33, title: "Encabezado", body: "Campos estructurales: entidad/moneda/subsidiaria/ubicación. Cambiarlos puede recalcular.", badge: "warn" },
      { n: 3, x: 38, y: 72, title: "Líneas", body: "Detalle: items, cantidades, precios, impuestos. Aquí nacen la mayoría de diferencias.", badge: "ok" },
      { n: 4, x: 78, y: 46, title: "Pestañas (Subtabs)", body: "Communication, Files, Related Records, Custom. Aquí está la evidencia y trazabilidad.", badge: "ok" }
    ],
    cards: [
      { badge: "ok",  title: "Encabezado vs Líneas", body: "Encabezado define contexto. Líneas definen cálculo. Revisa según el síntoma." },
      { badge: "ok",  title: "Trazabilidad", body: "Related Records muestra de dónde viene y qué se creó después." },
      { badge: "warn", title: "Campos grises", body: "Suelen ser calculados, bloqueados por estado o por permisos." }
    ],
    quiz: {
      q: "El total no cuadra con lo esperado. ¿Dónde revisas primero?",
      a: "En Líneas: cantidad, precio, descuento, impuesto. Luego valida encabezado (moneda/ubicación)."
    }
  },

  {
    id: "errors",
    icon: "✅",
    nav: "Errores, warnings y permisos",
    title: "Error vs Warning + por qué no ves campos/botones",
    intro: "El objetivo es que la gente no se bloquee y sepa qué revisar antes de pedir ayuda.",
    img: "./assets/errors.png",
    globalTip: "Un error bloquea. Un warning permite seguir. Ambos te dicen ‘qué revisar’.",
    pins: [
      { n: 1, x: 16, y: 28, title: "Campo obligatorio", body: "Si falta, no guarda. El mensaje normalmente dice el campo exacto.", badge: "err" },
      { n: 2, x: 44, y: 45, title: "Campo dependiente", body: "Se habilita solo cuando eliges X (cliente, subsidiaria, tipo, etc.).", badge: "ok" },
      { n: 3, x: 70, y: 30, title: "Solo lectura (gris)", body: "Calculado o bloqueado por status/rol. No es un bug.", badge: "warn" },
      { n: 4, x: 78, y: 72, title: "No veo el botón", body: "Casi siempre es: status, permisos del rol o vista (VIEW vs EDIT).", badge: "warn" }
    ],
    cards: [
      { badge: "err", title: "Error", body: "Bloquea el paso. Revisa el campo exacto y si es encabezado vs líneas." },
      { badge: "warn", title: "Warning", body: "Te deja avanzar, pero alerta un riesgo (cliente bloqueado, cupo, etc.)." },
      { badge: "ok",  title: "Escalamiento", body: "Envía: URL + número del doc + pantallazo + pasos + tu rol/área." }
    ],
    quiz: {
      q: "Clasifica: “Please enter value(s) for: Customer”.",
      a: "Es un ERROR (bloquea). Solución: diligenciar el campo obligatorio indicado."
    }
  }
];
