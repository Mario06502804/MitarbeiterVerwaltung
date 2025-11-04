/* === MATRIX RAIN BACKGROUND === */
(() => {
  const canvas = document.getElementById("matrix");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w, h, fontSize, columns, drops;
  const glyphs =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    fontSize = Math.max(14, Math.floor(w / 90));
    columns = Math.floor(w / fontSize);
    drops = new Array(columns).fill(0);
    ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
  };

  const bright = "#00ffcc";
  const glow = "rgba(0,255,200,0.65)";
  const trailDarken = "rgba(0,0,0,0.02)";
  let frame = 0;
  const speedFactor = 8;

  function draw() {
    frame++;
    ctx.fillStyle = trailDarken;
    ctx.fillRect(0, 0, w, h);

    if (frame % speedFactor === 0) {
      for (let i = 0; i < drops.length; i++) {
        const text = glyphs.charAt((Math.random() * glyphs.length) | 0);
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        const rand = Math.random();
        ctx.fillStyle =
          rand > 0.985 ? bright :
          rand > 0.94 ? "rgba(0,255,174,0.9)" :
          glow;

        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 100;
        ctx.fillText(text, x, y);
        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
})();

/* === Mitarbeiter-Verwaltung === */
let employees = [];

// Tabs wechseln
document.getElementById("tabAdd").addEventListener("click", () => switchTab("viewAdd", "tabAdd"));
document.getElementById("tabManage").addEventListener("click", () => switchTab("viewManage", "tabManage"));

function switchTab(viewId, btnId) {
  document.querySelectorAll(".tab-content").forEach(v => v.classList.remove("active"));
  document.querySelectorAll(".tab-buttons button").forEach(b => b.classList.remove("active"));
  document.getElementById(viewId).classList.add("active");
  document.getElementById(btnId).classList.add("active");
}

// Mitarbeiter anlegen
document.getElementById("btnAdd").onclick = () => {
  const vorname = document.getElementById("vorname").value.trim();
  const nachname = document.getElementById("nachname").value.trim();
  const urlaub = parseInt(document.getElementById("urlaub").value) || 0;
  const krankheit = parseInt(document.getElementById("krankheit").value) || 0;

  if (!vorname || !nachname) {
    alert("Bitte Vorname und Nachname angeben!");
    return;
  }

  employees.push({ vorname, nachname, urlaub, krankheit });
  clearInputs();
  renderEmployees();
  switchTab("viewManage", "tabManage");
};

function clearInputs() {
  document.getElementById("vorname").value = "";
  document.getElementById("nachname").value = "";
  document.getElementById("urlaub").value = "";
  document.getElementById("krankheit").value = "";
}

function renderEmployees() {
  const tbody = document.getElementById("employeeList");
  tbody.innerHTML = "";
  employees.forEach((emp, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${emp.vorname}</td>
      <td>${emp.nachname}</td>
      <td>${emp.urlaub}</td>
      <td>${emp.krankheit}</td>
      <td class="actions">
        <button onclick="editEmployee(${i})" title="Bearbeiten"><span class="material-icons">edit</span></button>
        <button onclick="deleteEmployee(${i})" title="Löschen"><span class="material-icons">delete</span></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteEmployee(i) {
  if (confirm("Mitarbeiter wirklich löschen?")) {
    employees.splice(i, 1);
    renderEmployees();
  }
}

function editEmployee(i) {
  const emp = employees[i];
  const urlaub = prompt("Neue Urlaubstage:", emp.urlaub);
  const krankheit = prompt("Neue Krankheitstage:", emp.krankheit);
  if (urlaub !== null) emp.urlaub = parseInt(urlaub) || 0;
  if (krankheit !== null) emp.krankheit = parseInt(krankheit) || 0;
  renderEmployees();
}
