-----

# **Machweo AI Interview Preparation Platform**

This repository contains the full-stack architecture for **Machweo**, an AI-driven interview preparation application. The system is engineered on a **Monorepo** structure, which allows for the consolidated management of decoupled frontend and backend services, facilitating streamlined development, maintenance, and multi-platform deployment.

-----

## 1\. Core Architecture and Technology Stack

The platform is built on a modern, MERN-aligned technology stack, chosen for its modularity, efficiency, and scalability.

| Component | Technology | Role and Key Functionality |
| :--- | :--- | :--- |
| **Frontend** | React, Vite, Tailwind CSS | Delivers a responsive, single-page application (SPA). Manages client-side state, routing, and asynchronous API communication. |
| **Backend** | Node.js, Express.js | Provides the core RESTful API layer, manages business logic, enforces authentication, and handles database interactions. |
| **Persistence** | MongoDB, Mongoose | NoSQL database utilized for flexible storage of user profiles and historical interview attempt data. |
| **Intelligence** | Google Gemini (via dedicated service) | Serves as the computational engine for generating questions and providing data-driven, contextual feedback. |

## 2\. Deployment and Environment Configuration

Machweo utilizes a decoupled deployment strategy, managed from the single repository:

  * **Frontend Deployment:** Hosted on **Vercel** (configured to build from `frontend/`).
  * **Backend Deployment:** Hosted as a Web Service on **Render** (configured to run from `backend/`).

### Critical Environment Variables

Backend configuration is managed via environment variables that **must** be set within the **Render Dashboard** for the production environment.

| Variable | Description | Usage Context |
| :--- | :--- | :--- |
| `PORT` | The port the Express server listens on. | Server startup configuration. |
| `MONGO_URI` | **Secure connection string** for the MongoDB Atlas cluster. | Database connection initialization. |
| `JWT_SECRET` | Secret key used to sign and verify JSON Web Tokens. | Authentication middleware and session management. |
| `AI_API_KEY` | Credential for accessing the Gemini/OpenAI API. | Used by the AI service layer. |

-----

## 3\. Local Development Guide

To initiate local development, developers must concurrently run the frontend client and the backend API, maintaining two separate processes.

### 3.1 Prerequisites

Ensure the following dependencies are available and configured:

  * **Node.js:** The version specified in [`frontend/.nvmrc`](https://www.google.com/search?q=frontend/.nvmrc) is the recommended target.
  * **MongoDB:** A locally running instance or a valid remote (Atlas) URI.
  * **API Key:** Necessary credentials for the integrated AI service.

### 3.2 Backend Server Setup (`backend/`)

1.  **Environment File:** Create a local `.env` file within the `backend/` directory and populate it with development-specific credentials.

2.  **Installation and Start:**

    ```bash
    cd backend
    npm install
    npm run dev  # Utilizes nodemon for automatic restarts during development
    ```

    The API will listen on the port defined by the `PORT` variable (default `http://localhost:5000`).

### 3.3 Frontend Client Setup (`frontend/`)

1.  **Installation and Start:**
    ```bash
    cd frontend
    npm install
    npm run dev
    ```
    The Vite development server typically runs on `http://localhost:5173`.

-----

## 4\. Architectural Endpoints Reference

Key feature implementation details are located in the following directories, demonstrating the separation of concerns:

| Feature Domain | Backend Route File | Backend Controller Logic | Database Schema |
| :--- | :--- | :--- | :--- |
| **Authentication** | [`authRoutes.js`](https://www.google.com/search?q=backend/routes/authRoutes.js) | [`authController.js`](https://www.google.com/search?q=backend/controllers/authController.js) | [`User.js`](https://www.google.com/search?q=backend/models/User.js) |
| **Interview Flow** | [`interviewRoutes.js`](https://www.google.com/search?q=backend/routes/interviewRoutes.js) | [`interviewController.js`](https://www.google.com/search?q=backend/controllers/interviewController.js) | [`Attempt.js`](https://www.google.com/search?q=backend/models/Attempt.js) |

| Frontend Service | Functionality |
| :--- | :--- |
| [`authService.js`](https://www.google.com/search?q=frontend/src/Services/authService.js) | Encapsulates user session management and authentication API calls. |
| [`geminiService.js`](https://www.google.com/search?q=frontend/src/Services/geminiService.js) | Abstracts the logic and payload construction for communication with the AI service API. |

-----

## 5\. Contributing and Maintenance

We encourage contributions that enhance the platform's functionality, security, or performance.

1.  **Fork and Branch:** Fork the repository and create a descriptive branch (`feature/new-feature` or `fix/bug-description`).
2.  **Implementation:** Implement changes, ensuring adherence to established code structure and style guidelines.
3.  **Validation:** Verify all changes through local environment testing.
4.  **Pull Request:** Submit a Pull Request targeting the primary branch, providing a detailed summary of the modifications and their impact.

### Production Build

The command to generate optimized static assets for frontend deployment:

```bash
cd frontend
npm run build
```

-----

## 6\. License

MIT