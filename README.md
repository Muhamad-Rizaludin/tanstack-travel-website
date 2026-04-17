# TanStack Travel Website

Web app travel berbasis TanStack Start, React, TypeScript, dan Tailwind CSS.

## Tech Stack

- React 19
- TanStack React Start + TanStack Router
- Vite 8
- TypeScript
- Tailwind CSS

## Prasyarat

- Node.js 20+ (LTS disarankan)
- npm 10+

## Menjalankan Lokal

```bash
npm ci
npm run dev
```

Default development server berjalan di `http://localhost:3000`.

## Build Production

```bash
npm run build
```

Perintah ini menghasilkan artefak build production yang siap dipakai pada pipeline deploy.

## Quality Gate Minimum (Sebelum Deploy)

```bash
npm ci
npm run build
```

Jika build gagal, jangan lanjut deploy.

## Struktur Direktori

```text
src/
  components/      # shared UI/components
  features/        # feature modules (home, promo, dashboard, dst)
  locales/         # i18n dictionary
  routes/          # file-based routes TanStack
  styles/          # global styles
```

## Konfigurasi Environment

- Gunakan file `.env` untuk environment lokal.
- Jangan commit file `.env` yang berisi secret.
- Jika butuh template variable, sediakan `.env.example`.

## Catatan Deploy

- Gunakan `npm ci` pada CI/CD agar dependency konsisten.
- Set `NODE_ENV=production` pada environment deploy.
- Jalankan build di pipeline dan deploy artefak hasil build sesuai target hosting Anda.

