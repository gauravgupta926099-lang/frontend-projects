# 📝 blogIt - Full-Stack Blog Platform

A modern, responsive full-stack blogging web application built with **React** and **Appwrite**. This project allows users to seamlessly register, sign in, create, edit, publish, and manage rich text blog posts with custom image uploads.

---

## 🚀 Features

* 🔐 **Authentication & Authorization:** Secure user registration, login, and session persistence using Appwrite Account services.
* ✍️ **Rich Text Editor:** Fully interactive WYSIWYG editor powered by TinyMCE / React Hook Form for crafting detailed posts.
* 🖼️ **Image Storage:** Upload, preview, and update blog featured images directly using Appwrite Storage Buckets.
* 📂 **Database Management:** Complete CRUD functionality for user posts backed by Appwrite Databases.
* ⚡ **Global State Management:** Fast, predictable state management using **Redux Toolkit** (`authSlice`).
* 🎨 **Modern Responsive UI:** Clean visual styling styled with **Tailwind CSS**.
* 🛣️ **Client-Side Routing:** Dynamic nested routes and active link navigation handled with **React Router v6/v7**.

---

## 🛠️ Tech Stack

### **Frontend**
* **Framework:** React.js (Vite)
* **State Management:** Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
* **Routing:** React Router DOM (`react-router-dom`)
* **Form Management:** React Hook Form (`react-hook-form`)
* **Styling:** Tailwind CSS

### **Backend-as-a-Service (BaaS)**
* **Appwrite:**
  * **Auth:** User Account Management
  * **Databases:** Custom `articles` Table & Indexing
  * **Storage:** Bucket storage for featured images

---

## 📁 Project Structure

```text
blogIt/
├── src/
│   ├── appwrite/          # Appwrite service wrappers (Auth, Database, Storage)
│   ├── components/        # Reusable UI components (Header, Footer, PostCard, Input, Button)
│   ├── conf/              # Environment variable configuration mapping
│   ├── features/          # Redux slice definitions (authSlice.js)
│   ├── pages/             # App views (Home, Login, Signup, AllPosts, AddPost, EditPost, Post)
│   ├── store/             # Redux Store configuration
│   ├── App.jsx            # Main App layout wrapper with dynamic Outlet
│   └── main.jsx           # Root entry point with Redux Provider

## 📦 Getting Started
1. Clone the Repository
  git clone https://github.com/gauravgupta926099-lang/frontend-projects.git
2. Install Dependencies
  npm install
3. Run the Development Server
  npm run dev
├── .env                   # Local environment variables
├── .gitignore             # Ignored tracking rules
└── package.json
