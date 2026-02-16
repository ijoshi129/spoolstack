# SpoolStack

**Self-Hosted 3D Printing Filament Inventory Tracker**

SpoolStack is a clean, self-hosted web app for tracking your 3D printing filament spools. It comes pre-loaded with the Bambu Lab color catalog and lets you manage your inventory with filtering, search, and sorting.

---

## Features

### Core Functionality
- **Spool Inventory**: Add, edit, and delete filament spools with brand, material, color, weight, price, and status tracking
- **Color Catalog**: Pre-loaded Bambu Lab color catalog with hex swatches for quick spool entry
- **Filtering & Search**: Filter by status, brand, material, or modifier. Full-text search across all spool fields
- **Sorting**: Sort by date added, material, color family, or brand

### Configuration & Management
- **Settings Panel**: Manage brands, materials, modifiers, and color catalogs without touching the database directly
- **Custom Brands & Colors**: Add your own brands and colors through the Settings UI
- **Local Storage**: Data stored in a local SQLite file — no external database needed

### Design & Architecture
- **Server Actions**: Fast, type-safe mutations with Next.js Server Actions
- **Validation**: Schema-level validation with Zod
- **Type Safety**: Full TypeScript throughout the stack

---

## Requirements

- Node.js 18+
- npm

---

## Quick Start (Docker)

The easiest way to run this is with Docker.

```bash
git clone https://github.com/ijoshi129/spoolstack
cd spoolstack
docker compose up -d
```

That's it. Open `http://<your-server-ip>:3000`.

The database is created and seeded automatically on first launch. Data is stored in a Docker volume (`filament-data`) so it persists across container restarts and rebuilds.

### Updating

```bash
git pull
docker compose up -d --build
```

Your data is safe — the database only gets created on first run.

---

## Local Development

### Setup

```bash
npm install
cp .env.example .env.local
npm run db:setup   # creates tables + seeds Bambu Lab color catalog
npm run dev        # http://localhost:3000
```

### Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run db:push` | Push schema changes to SQLite database |
| `npm run db:seed` | Seed database with default brands, materials, and Bambu Lab color catalog |
| `npm run db:setup` | Run `db:push` + `db:seed` (first-time setup) |
| `npm run lint` | Run ESLint |

---

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Actions)
- **Database:** SQLite via better-sqlite3
- **ORM:** Drizzle ORM
- **Styling:** Tailwind CSS 4
- **Validation:** Zod
- **Language:** TypeScript

---

## Project Structure

```
src/
├── actions/          # Server actions (spools CRUD, settings CRUD)
├── app/
│   ├── api/          # API routes (settings data endpoint)
│   ├── settings/     # Settings page (manage brands, materials, colors)
│   ├── spools/       # Spool pages (new, edit)
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page (spool inventory)
├── components/       # React components (SpoolForm, SpoolCard, SpoolList)
├── db/
│   ├── schema.ts     # Drizzle schema (spools, brands, materials, modifiers, catalog_colors)
│   └── seed.ts       # Database seed script
└── lib/              # Shared utilities (db connection, validation, formatting)
```

---

## Notes

- **Single User**: Designed for single-user, self-hosted use — there is no authentication
- **Local Data**: All data lives in a local SQLite file, no external database needed
- **Seed Data**: The seed script includes the full Bambu Lab filament color catalog. Add more brands and colors through the Settings UI

---

## License

See [LICENSE](LICENSE) file for details.
