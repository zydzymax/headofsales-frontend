# Quick Start

## Prerequisites

- Node.js 18+
- npm or yarn
- Backend API running (salesbot-mvp)

## 1. Clone & Setup

```bash
git clone https://github.com/zydzymax/headofsales-frontend.git
cd headofsales-frontend

# Install dependencies
npm install
```

## 2. Configure Environment

```bash
cp .env.example .env.local
# Edit .env.local with your values
```

Required variables:
- `NEXT_PUBLIC_API_URL` - Backend API URL

## 3. Start Development Server

```bash
npm run dev
```

Open http://localhost:3000

## 4. Build for Production

```bash
npm run build
npm run export

# Static files in out/ directory
```

## Useful Commands

```bash
# Lint
npm run lint

# Type check
npm run typecheck

# Format
npm run format
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx           # Home/Landing
│   ├── login/             # Authentication
│   └── dashboard/
│       ├── page.tsx       # Main dashboard
│       ├── calls/         # AI call analysis
│       └── team/          # Team KPI
├── components/            # Reusable components
└── lib/                   # Utilities
```

## Features

### Call Analysis
View AI-powered analysis of sales calls:
- Script adherence scoring
- Key phrases detection
- Improvement recommendations

### Team KPI
Monitor team performance:
- Manager rankings
- Skill breakdown
- Trend analysis

See main [README.md](README.md) for full documentation.
