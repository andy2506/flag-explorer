# Flag Explorer

A full-stack app that displays flags of all countries and provides detailed info using a custom backend + modern frontend (Next.js).

---

## Tech Stack

- **Frontend:** Next.js (App Router), React, TypeScript-ready
- **Backend:** Node.js, Express (MVC)
- **Testing:** Jest, React Testing Library, Supertest
- **CI/CD:** GitHub Actions (YAML-based)

---

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v18+)
- npm

---

### 1. Clone the Repository

```bash
git clone https://github.com/andy2506/flag-explorer.git
cd flag-explorer

##For backend
cd backend
npm install
npm start

Backend runs at: http://localhost:5000

##For frontend 
cd frontend
npm install
npm run dev

Frontend runs at: http://localhost:3000

###Run Tests
cd backend
npm test

cd frontend
npm test

###Environment Config (Frontend)
Frontend expects the following config from @/config/api.ts

// frontend/config/api.ts
const API_BASE_URL = "http://localhost:5000";
export default API_BASE_URL;
