# 📝 Persistent To-Do List Application

A clean, responsive To-Do List application built with vanilla web technologies, focusing on data retention and input security.

## 🚀 Live Demo


## 🛠️ Key Engineering Features
* **State Persistence:** Implemented `localStorage` syncing with full serialization (`JSON.stringify`/`JSON.parse`) so user data survives page refreshes.
* **Input Validation:** Integrated strict Regular Expressions (`/^[a-zA-Z0-9_-]+( [a-zA-Z0-9_-]+)*$/`) to block empty entries or malicious scripting injections.
* **Dynamic DOM Manipulation:** Built transactional task components utilizing modular closures to map button actions (`complete`, `delete`) straight to array indexes.
* **Micro-Interactions:** Added smooth CSS cubic-bezier transitions on interactive hover states to elevate UX layout depth.