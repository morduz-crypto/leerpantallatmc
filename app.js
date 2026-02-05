(function(){
  const screens = window.SCREENS || [];
  if(!screens.length) return;

  let idx = 0;
  let hintsOn = true;
  let tourMode = true;
  let activePin = 1;

  const $ = (id)=>document.getElementById(id);

  const navList = $("navList");
  const screenTitle = $("screenTitle");
  const screenIntro = $("screenIntro");
  const screenImg = $("screenImg");
  const pinsLayer = $("pinsLayer");
  const cards = $("cards");
  const panelTitle = $("panelTitle");
  const quizPrompt = $("quizPrompt");
  const quizAnswer = $("quizAnswer");
  const showAnswer = $("showAnswer");
  const stepLabel = $("stepLabel");
  const progressBar = $("progressBar");
  const globalTip = $("globalTip");
  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  const toggleHints = $("toggleHints");
  const toggleMode = $("toggleMode");

  function clamp(n,min,max){ return Math.max(min, Math.min(max,n)); }

  function buildNav(){
    navList.innerHTML = "";
    screens.forEach((s, i)=>{
      const li = document.createElement("li");
      li.className = "nav-item" + (i===idx ? " active":"");
      li.setAttribute("data-idx", String(i));
      li.innerHTML = `
        <span class="nav-dot" aria-hidden="true"></span>
        <span aria-hidden="true">${s.icon}</span>
        <span>${s.nav}</span>
      `;
      li.addEventListener("click", ()=>{
        if(tourMode && i>idx) return;
        idx = i;
        activePin = 1;
        render();
      });
      navList.appendChild(li);
    });
  }

  function setProgress(){
    const pct = ((idx+1) / screens.length) * 100;
    progressBar.style.width = pct.toFixed(0) + "%";
    stepLabel.textContent = `Sección ${idx+1}/${screens.length}`;
    [...navList.querySelectorAll(".nav-item")].forEach((el, i)=>{
      el.classList.toggle("active", i===idx);
      el.style.opacity = (!tourMode || i<=idx) ? "1" : ".45";
      el.style.cursor = (!tourMode || i<=idx) ? "pointer" : "not-allowed";
    });
  }

  function renderPins(screen){
    pinsLayer.innerHTML = "";
    screen.pins.forEach(p=>{
      const pin = document.createElement("button");
      pin.type = "button";
      pin.className = "pin" + (p.n===activePin ? " active":"");
      pin.style.left = p.x + "%";
      pin.style.top  = p.y + "%";
      pin.setAttribute("data-pin", String(p.n));
      pin.setAttribute("aria-label", `Marcador ${p.n}: ${p.title}`);
      pin.innerHTML = `<b>${p.n}</b>`;
      if(!hintsOn) pin.classList.add("hidden");
      pin.addEventListener("click", ()=>{
        activePin = p.n;
        render();
      });
      pinsLayer.appendChild(pin);
    });
  }

  function renderCards(screen){
    cards.innerHTML = "";

    const p = screen.pins.find(x=>x.n===activePin) || screen.pins[0];
    if(p){
      const el = document.createElement("div");
      el.className = "card";
      el.innerHTML = `
        <div class="card-top">
          <div class="card-title">${p.title}</div>
          <div class="badge ${p.badge || ""}">${(p.badge||"").toUpperCase() || "TIP"}</div>
        </div>
        <div class="card-body">${p.body}</div>
      `;
      cards.appendChild(el);
      panelTitle.textContent = p.title;
    }

    screen.cards.forEach(c=>{
      const el = document.createElement("div");
      el.className = "card";
      el.innerHTML = `
        <div class="card-top">
          <div class="card-title">${c.title}</div>
          <div class="badge ${c.badge || ""}">${(c.badge||"").toUpperCase() || "INFO"}</div>
        </div>
        <div class="card-body">${c.body}</div>
      `;
      cards.appendChild(el);
    });

    [...pinsLayer.querySelectorAll(".pin")].forEach(btn=>{
      const n = Number(btn.getAttribute("data-pin"));
      btn.classList.toggle("active", n===activePin);
      btn.classList.toggle("hidden", !hintsOn);
    });
  }

  function renderQuiz(screen){
    quizPrompt.textContent = screen.quiz?.q || "—";
    quizAnswer.textContent = screen.quiz?.a || "—";
    quizAnswer.classList.add("hidden");
  }

  function render(){
    const screen = screens[idx];
    buildNav();
    setProgress();

    screenTitle.textContent = screen.title;
    screenIntro.textContent = screen.intro;
    screenImg.src = screen.img;
    globalTip.textContent = screen.globalTip || "Haz clic en un número sobre la imagen para ver la explicación.";

    renderPins(screen);
    renderCards(screen);
    renderQuiz(screen);

    prevBtn.disabled = idx===0;
    nextBtn.textContent = (idx === screens.length-1) ? "Finalizar ✅" : "Siguiente →";
  }

  prevBtn.addEventListener("click", ()=>{
    idx = clamp(idx-1, 0, screens.length-1);
    activePin = 1;
    render();
  });

  nextBtn.addEventListener("click", ()=>{
    if(idx < screens.length-1){
      idx += 1;
      activePin = 1;
      render();
    } else {
      alert("Listo. Ya tienes el mapa: Búsqueda → Reporte → Formulario → Errores/Permisos.");
    }
  });

  toggleHints.addEventListener("click", ()=>{
    hintsOn = !hintsOn;
    toggleHints.textContent = hintsOn ? "Ocultar números" : "Mostrar números";
    toggleHints.setAttribute("aria-pressed", hintsOn ? "true":"false");
    render();
  });

  toggleMode.addEventListener("click", ()=>{
    tourMode = !tourMode;
    toggleMode.textContent = tourMode ? "Modo Tour" : "Modo Referencia";
    toggleMode.setAttribute("aria-pressed", tourMode ? "true":"false");
    render();
  });

  showAnswer.addEventListener("click", ()=>{
    quizAnswer.classList.toggle("hidden");
  });

  render();
})();