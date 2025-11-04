# 🧩 Matrix Personalverwaltung (Electron App)

![Electron](https://img.shields.io/badge/Electron-Framework-blue?logo=electron)
![HTML5](https://img.shields.io/badge/Frontend-HTML5-orange?logo=html5)
![CSS3](https://img.shields.io/badge/Design-CSS3-blue?logo=css3)
![JavaScript](https://img.shields.io/badge/Logic-JavaScript-yellow?logo=javascript)
![Status](https://img.shields.io/badge/Status-Fertig-brightgreen)

---

## 🧠 Projektbeschreibung

Die **Matrix Personalverwaltung** ist eine eigenständig lauffähige **Electron-App**,
die es ermöglicht, Mitarbeiterdaten zu verwalten, anzulegen und zu bearbeiten.
Das Projekt kombiniert klassische Webtechnologien (HTML, CSS, JavaScript)
mit dem Desktop-Framework **Electron**, um eine moderne und lokal nutzbare Anwendung zu schaffen.

Die Anwendung besitzt einen **Login-Bereich** mit Benutzerverwaltung
und einen **Hauptbereich**, in dem Mitarbeiterdaten übersichtlich angezeigt und verwaltet werden können.
Das Design ist inspiriert vom **Matrix-Filmstil**, mit dunklem Layout und grünem Digitaltext-Effekt.

---

## 🚀 Funktionen

### 🔐 Login & Registrierung

* Benutzer können sich **registrieren** und **anmelden**
* Eingeloggte Benutzer werden in der Verwaltung angezeigt
* Automatische **Session-Verwaltung** über LocalStorage
* **Logout-Funktion** inklusive Weiterleitung zur Login-Seite

### 👥 Mitarbeiterverwaltung

* Mitarbeiter **anlegen**, **bearbeiten** und **löschen**
* Übersichtliche Darstellung aller Datensätze
* Daten werden lokal gespeichert (temporär im Browser oder Electron)

### 🎨 Matrix-Design

* Dunkles Farbschema (schwarz & neon-grün)
* Matrix-Code-Effekt beim Startbildschirm
* Moderne, minimalistische Benutzeroberfläche

### 💾 Electron Integration

* Die App läuft eigenständig als **Windows-Executable (.exe)**
* Startet automatisch mit Login-Seite
* Anpassbares App-Icon (`assets/icon.ico`)

---

## 🛠️ Installation & Start

### 🔹 Voraussetzungen

* [Node.js](https://nodejs.org/) (Version 18 oder höher)
* [npm](https://www.npmjs.com/)

### 🔹 Installation

```bash
npm install
```

### 🔹 Start der App

```bash
npm start
```

### 🔹 Erstellung einer .exe-Datei (Windows)

```bash
npx electron-packager . Personalverwaltung --platform=win32 --arch=x64 --icon=assets/icon.ico --overwrite
```

---

## 📂 Projektstruktur

```
PersonalVerwaltung-Matrix-Electron
│
├── Login/                      # Login- und Registrierungsseiten
│   ├── login.html
│   └── register.html
│
├── Matrix-Personalverwaltung/  # Hauptbereich mit Verwaltung
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── assets/                     # App-Icon und Ressourcen
│   └── icon.ico
│
├── main.js                     # Electron-Startdatei
├── package.json
├── README.md                   # Diese Datei
└── .gitignore
```

---

## 🧩 GitHub Pages Demo

> ⚠️ Auf GitHub Pages ist nur eine **Vorschau** verfügbar,
> da die Login-Funktion und LocalStorage im Browser nur eingeschränkt funktionieren.

👉 **Live-Demo:** [Matrix Personalverwaltung (GitHub Pages)](https://mario06502804.github.io/MitarbeiterVerwaltung/)

---

## 👨‍💻 Entwickler

**Mario Mendes**
📍 Durbach, Deutschland
💼 Fachinformatiker für Anwendungsentwicklung (in Ausbildung)
📧 Kontakt: [GitHub Profil ansehen](https://github.com/Mario06502804)

---

## 🧠 Lizenz

Dieses Projekt wurde im Rahmen eines Ausbildungsprojekts erstellt
und darf frei zu Lernzwecken genutzt werden.

---

✨ *„In der Matrix ist Ordnung Pflicht – auch bei der Personalverwaltung.“* 🕶️
