# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# bun
bun run dev
```

## Production

Build the application for production:

```bash

# bun
bun run build
```

Locally preview production build:

```bash

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

### DB LOCAL Setup

- in one terminal `turso dev --db-file local.db`
- if you need to generate a new migration `bun drizzle-kit generate`
- apply migrations `bun drizzle-kit migrate`
- open the db file with your own db editor or `bun drizzle-kit studio`

## cool tech learned

- [Turso](https://orm.drizzle.team/docs/get-started/turso-new) - db with typesafety
- [Concurrently](https://github.com/open-cli-tools/concurrently) - run multiple npm tasks at once
