/* === MATRIX RAIN BACKGROUND === */
(() => {
  const canvas = document.getElementById("matrix");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let w, h, fontSize, columns, drops, offsets;
  const glyphs =
    "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const resize = () => {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    fontSize = Math.max(14, Math.floor(w / 90));
    columns = Math.floor(w / fontSize);
    drops = new Array(columns).fill(0);
    offsets = new Array(columns).fill(0).map(() => Math.random() * 100); // ⏱️ zufälliger Start-Offset
    ctx.font = `${fontSize}px 'Share Tech Mono', monospace`;
  };

  let frame = 0;
  const speedFactor = 8; // kleiner = schneller, größer = langsamer

  // 🌈 Farb-Setup
  const bright = "#00ffcc"; // Hauptfarbe – hellgrün/cyan wie Neo
  const glow = "rgba(0,255,200,0.65)"; // weichere Trails
  const trailDarken = "rgba(0,0,0,0.02)"; // Hintergrund-Verdunkelung

  function draw() {
    frame++;

    // Hintergrund abdunkeln (Trail-Verlängerung)
    ctx.fillStyle = trailDarken;
    ctx.fillRect(0, 0, w, h);

    if (frame % speedFactor === 0) {
      for (let i = 0; i < drops.length; i++) {
        const text = glyphs.charAt((Math.random() * glyphs.length) | 0);
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // 💡 Leuchtende Farbe mit zufälligem Glühen
        const rand = Math.random();
        if (rand > 0.985) {
          ctx.fillStyle = bright; // sehr hell – Neonblitz
        } else if (rand > 0.94) {
          ctx.fillStyle = "rgba(0, 255, 174, 0.9)";
        } else {
          ctx.fillStyle = glow; // Trail
        }

        ctx.shadowColor = "#000000";
        ctx.shadowBlur = 100;
        ctx.fillText(text, x, y);

        // Tropfen bewegen
        if (y > h && Math.random() > 0.975) {
          drops[i] = 0;
          offsets[i] = Math.random() * 100; // neuer zufälliger Start
        } else {
          drops[i] += 1;
        }
      }
    }

    requestAnimationFrame(draw);
  }

  // Responsive Verhalten
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 150);
  });

  resize();
  draw();
})();


let employees = [];

// Tabs
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
    tr.draggable = true;
    tr.dataset.index = i;
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

    // Drag events
    tr.addEventListener("dragstart", dragStart);
    tr.addEventListener("dragover", dragOver);
    tr.addEventListener("dragleave", dragLeave);
    tr.addEventListener("drop", drop);
    tr.addEventListener("dragend", dragEnd);

    tbody.appendChild(tr);
  });
}

// Mitarbeiter löschen
function deleteEmployee(index) {
  if (confirm("Mitarbeiter wirklich löschen?")) {
    employees.splice(index, 1);
    renderEmployees();
  }
}

// Mitarbeiter bearbeiten
function editEmployee(index) {
  const emp = employees[index];
  const urlaub = prompt("Neue Urlaubstage:", emp.urlaub);
  const krankheit = prompt("Neue Krankheitstage:", emp.krankheit);
  if (urlaub !== null) emp.urlaub = parseInt(urlaub) || 0;
  if (krankheit !== null) emp.krankheit = parseInt(krankheit) || 0;
  renderEmployees();
}

// --- Drag & Drop Logik ---
let draggedIndex = null;

function dragStart(e) {
  draggedIndex = +this.dataset.index;
  this.classList.add("dragging");
  e.dataTransfer.effectAllowed = "move";
}

function dragOver(e) {
  e.preventDefault();
  this.classList.add("drop-target");
}

function dragLeave() {
  this.classList.remove("drop-target");
}

function drop(e) {
  e.preventDefault();
  const targetIndex = +this.dataset.index;
  this.classList.remove("drop-target");

  if (draggedIndex === targetIndex) return;

  const draggedItem = employees.splice(draggedIndex, 1)[0];
  employees.splice(targetIndex, 0, draggedItem);
  renderEmployees();
}

function dragEnd() {
  this.classList.remove("dragging");
}
