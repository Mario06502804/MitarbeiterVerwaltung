# 🧩 Matrix Personalverwaltung (Webversion)

![HTML5](https://img.shields.io/badge/Frontend-HTML5-orange?logo=html5)
![CSS3](https://img.shields.io/badge/Design-CSS3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/Logic-JavaScript-yellow?logo=javascript)
![Status](https://img.shields.io/badge/Status-Fertig-brightgreen)

---

## 🧠 Projektbeschreibung

Die **Matrix Personalverwaltung (Webversion)** ist eine browserbasierte Anwendung,
die das Anlegen und Verwalten von Mitarbeitern ermöglicht.
Beim Öffnen der Seite erscheint ein **Matrix-Startbildschirm**,
der nach wenigen Sekunden automatisch zur **Login-Seite** weiterleitet.

Nach erfolgreichem Login gelangt man in die **Personalverwaltung**,
wo Mitarbeiterdaten lokal im Browser gespeichert und verwaltet werden können.
Das Design ist inspiriert vom *Matrix-Stil* mit dunklem Hintergrund und leuchtend grünen Akzenten.

---

## 🚀 Funktionen

### 🖥️ Startbildschirm (Matrix-Animation)

* Kurze Animation im Matrix-Stil beim Seitenstart
* Automatische Weiterleitung zur Login-Seite nach 3 Sekunden

### 🔐 Login & Registrierung

* Benutzer können sich **anmelden** oder **registrieren**
* Speicherung der Anmeldedaten über **LocalStorage** (kein Server nötig)
* Nach Login automatische Weiterleitung zur Verwaltung
* Logout-Funktion inklusive Rückleitung zur Login-Seite

### 👥 Personalverwaltung

* Mitarbeiter **hinzufügen**, **bearbeiten** oder **löschen**
* Übersichtliche Darstellung aller Mitarbeiterdaten
* Alle Änderungen werden **lokal gespeichert**
* Nach Seitenneuladen bleiben Daten erhalten (solange LocalStorage aktiv ist)

---

## 🎨 Design

* Dunkles Matrix-Layout
* Neon-grüne Schrift und Effekte
* Minimalistische Benutzeroberfläche mit Fokus auf Lesbarkeit

---

## 🌐 Live-Demo auf GitHub Pages

> ⚠️ Hinweis:
> Diese Version speichert Daten nur **lokal im Browser**.
> Es gibt keine Server-Datenbank oder Synchronisierung.

👉 **Hier ausprobieren:**
[Matrix Personalverwaltung – GitHub Pages](https://mario06502804.github.io/MitarbeiterVerwaltung/)

---

## 📂 Projektstruktur

```
PersonalVerwaltung-Matrix-Electron
│
├── Login/
│   ├── login.html
│   └── register.html
│
├── Matrix-Personalverwaltung/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── index.html              # Matrix-Startbildschirm mit Weiterleitung
├── assets/
│   └── icon.ico
├── README.md
└── .gitignore
```

---

## 👨‍💻 Entwickler

**Mario Mendes**
📍 Durbach, Deutschland
💼 Ausbildung: Fachinformatiker für Anwendungsentwicklung
📧 GitHub-Profil: [Mario06502804](https://github.com/Mario06502804)

---

## 🧠 Lizenz

Dieses Projekt wurde im Rahmen einer Lern- und Ausbildungsaufgabe erstellt
und darf frei zu Übungs- und Demonstrationszwecken genutzt werden.

---

✨ *„Selbst in der Matrix braucht es Ordnung – Willkommen in der Personalverwaltung.“* 🕶️
