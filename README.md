# Vibe Ritual - Sacred Space

A spiritual ritual and intention-setting application with a beautiful, meditative UI.

## Project Structure

```
vibe-ritual/
├── frontend/           # Vite + React + TailwindCSS
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components
│   │   └── styles/     # Global styles
│   ├── package.json
│   └── vite.config.ts
├── backend/            # Node.js + Express + TypeScript
│   ├── src/
│   │   └── index.ts    # Main server entry
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml  # MongoDB + Redis + Backend
└── README.md
```

## Features

- **Sanctuary Dashboard** - Digital altar visualization with interactive objects
- **Daily Intention Space** - Set and track daily intentions
- **Ritual Builder** - Guided meditation and ritual experiences
- **Sacred Objects Library** - Collectible spiritual objects for your altar

## Tech Stack

### Frontend
- React 18 with TypeScript
- Vite for fast development
- TailwindCSS for styling
- React Router for navigation

### Backend
- Node.js with Express
- TypeScript
- MongoDB for data persistence
- Redis for caching

## Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose (for local development with MongoDB/Redis)

### Installation

1. Install frontend dependencies:
```bash
cd frontend && npm install
```

2. Install backend dependencies:
```bash
cd backend && npm install
```

### Development

**Option 1: Full Docker Setup**
```bash
docker-compose up -d
cd frontend && npm run dev
```

**Option 2: Local Development**
```bash
# Start MongoDB and Redis via Docker
docker-compose up -d mongodb redis

# Start backend
cd backend && npm run dev

# Start frontend (in another terminal)
cd frontend && npm run dev
```

The frontend will be available at http://localhost:5173
The backend API will be available at http://localhost:3000

### API Endpoints

- `GET /health` - Health check (MongoDB + Redis status)
- `GET /api` - API info
- `GET /api/intentions` - Get all intentions
- `POST /api/intentions` - Create new intention
- `GET /api/rituals` - Get available rituals
- `GET /api/objects` - Get sacred objects library

## Deployment

The backend includes a production-ready Dockerfile with health checks for Kubernetes deployment.

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or build the backend image separately
docker build -f backend/Dockerfile -t vibe-ritual-backend .
```

## Design System

The app uses a custom design system with:
- **Primary color**: `#11a4d4` (Cyan/Teal)
- **Background light**: `#f6f8f8`
- **Background dark**: `#101d22`
- **Font**: Manrope (display), Noto Serif (headings)
- **Icons**: Material Symbols Outlined

## License

Private project.
