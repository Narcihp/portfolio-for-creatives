const roles = [
    "GRAPHIC DESIGNER",
    "ILLUSTRATOR",
    "UX/UI DESIGNER",
    "VISUAL COMMUNICATOR",
    "PACKAGE DESIGNER",
    "BRAND & LOGO DESIGNER",
    "TYPOGRAPHER",
    "MOTION DESIGNER",
    "ART DIRECTOR",
    "STORYTELLER",
    "CREATIVE STRATEGIST",
    "A CAT MOM"
  ];
  
  const A = document.getElementById("layerA");
  const B = document.getElementById("layerB");
  
  const MORPH = 1100; // ms
  const HOLD = 900;   // ms
  
  let i = 0;
  let showingA = true;
  
  A.textContent = roles[i % roles.length];
  B.textContent = roles[(i + 1) % roles.length];
  
  function swap() {
    if (showingA) {
      A.classList.remove("current"); A.classList.add("next");
      B.classList.remove("next");    B.classList.add("current");
    } else {
      B.classList.remove("current"); B.classList.add("next");
      A.classList.remove("next");    A.classList.add("current");
    }
    showingA = !showingA;
  }
  
  function queueNextText() {
    setTimeout(() => {
      i = (i + 1) % roles.length;
      if (showingA) {
        B.textContent = roles[(i + 1) % roles.length];
      } else {
        A.textContent = roles[(i + 1) % roles.length];
      }
    }, MORPH);
  }
  
  function cycle() {
    swap();
    queueNextText();
    setTimeout(cycle, MORPH + HOLD);
  }
  
  setTimeout(cycle, HOLD);
  