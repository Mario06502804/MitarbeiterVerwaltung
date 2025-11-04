# 🧩 Personalverwaltung mit Login- & Registrierungssystem

Dieses Projekt ist eine kleine **Personalverwaltungssoftware im Browser**, kombiniert mit einem **Login- und Registrierungssystem**.  
Die Oberfläche nutzt HTML, CSS und JavaScript mit einem Matrix-inspirierten Design.

---

## 📋 **Projektübersicht**

Das System besteht aus zwei Bereichen:

1. **Login-Bereich** (`/Login`)
   - `login.html`: Login-Seite für registrierte Benutzer
   - `register.html`: Registrierung neuer Benutzer

2. **Personalverwaltung** (`/Matrix-Personalverwaltung`)
   - `index.html`: Hauptoberfläche zur Verwaltung der Mitarbeiter
   - `script.js`: enthält die Logik für Animation und Mitarbeiterfunktionen
   - `style.css`: sorgt für das Matrix-Design

---

## 🎯 **Ziel des Projekts**

Das Ziel war es, eine **einfache, clientseitige Verwaltungssoftware** zu entwickeln,  
bei der Benutzer sich einloggen müssen, bevor sie auf sensible Daten (Mitarbeiterliste) zugreifen können.

Nach dem Login kann der Benutzer:
- Mitarbeiter anlegen  
- Urlaubstage und Krankheitstage verwalten  
- Mitarbeiter bearbeiten oder löschen  
- Zwischen Tabs „Anlegen“ und „Verwalten“ wechseln  

Die Daten werden **temporär im LocalStorage** gespeichert (keine Serververbindung).

---

## 🧠 **Technische Umsetzung**

### 💾 Datenspeicherung
- **LocalStorage** wird verwendet, um Benutzer, Session und Mitarbeiterdaten lokal zu speichern.  
- Benutzer werden als JSON-Array mit `username` und `password` gespeichert.
- Nach erfolgreichem Login wird eine „Session“ erstellt:
  ```json
  {
    "username": "demo"
  }
