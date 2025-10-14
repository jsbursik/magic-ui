# Magic UI

A SvelteKit component library with authentication, database setup, and beautiful pre-styled components. Built with Better-Auth, Drizzle ORM, and Tabler Icons.

## Features

- 🎨 **Pre-styled Components** - Minimal components using symantic css framework
- 🔐 **Authentication Built-in** - Complete auth setup with Better-Auth
- 💾 **Database Ready** - Drizzle ORM integration with PostgreSQL
- 🌓 **Dark Mode** - Theme toggle component included
- 🔔 **Toast Notifications** - Toasts built-in
- 📱 **Responsive Navigation** - Flexible navbar with auth-aware links

### 1. Install Dependencies

```bash
# npm
npm install @jsbursik/magic-ui svelte @sveltejs/kit better-auth drizzle-orm postgres @tabler/icons-svelte
npm install -D drizzle-kit

# pnpm
pnpm add @jsbursik/magic-ui svelte @sveltejs/kit better-auth drizzle-orm postgres @tabler/icons-svelte
pnpm add -D drizzle-kit

# yarn
yarn add @jsbursik/magic-ui svelte @sveltejs/kit better-auth drizzle-orm postgres @tabler/icons-svelte
yarn add -D drizzle-kit
```

### 2. Scaffold Everything

Run the CLI to set up all necessary files (hooks, layouts, auth pages, API routes):

```bash
# npm
npx @jsbursik/magic-ui

# pnpm
pnpm dlx @jsbursik/magic-ui

# yarn
yarn dlx @jsbursik/magic-ui
```

This creates:

- ✅ `drizzle.config.ts` - Drizzle Kit configuration
- ✅ `src/hooks.server.ts` - Auth middleware with route protection
- ✅ `src/app.d.ts` - TypeScript definitions
- ✅ `src/lib/db/schema.ts` - Database schema (extends package schema)
- ✅ `src/routes/+layout.svelte` - Main layout with navbar
- ✅ `src/routes/+layout.server.ts` - Server-side session loading
- ✅ `src/routes/api/auth/[...all]/+server.ts` - Auth API endpoints
- ✅ `src/lib/server/db.ts` - Database setup
- ✅ `src/lib/server/auth.ts` - Auth instance
- ✅ `src/routes/login/+page.svelte` - Login page
- ✅ `src/routes/signup/+page.svelte` - Signup page

### 3. Configure Environment

Create a `.env` file:

```bash
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
PUBLIC_BASE_URL=http://localhost:5173
BETTER_AUTH_SECRET=your-secret-key-here
```

### 4. Run Database Migrations

```bash
pnpm drizzle-kit generate
pnpm drizzle-kit migrate
```

### 5. Start Developing

```bash
pnpm dev
```

That's it! Visit `http://localhost:5173/signup` to create an account.

## Customization

### Adding Navigation Links

Edit `src/routes/+layout.svelte` to customize your navbar:

```svelte
<Navbar {authClient} user={data.user}>
  {#snippet publicLinks()}
    <NavLink href="/">Home</NavLink>
    <NavLink href="/about">About</NavLink>
  {/snippet}

  {#snippet authLinks()}
    <NavLink href="/dashboard">Dashboard</NavLink>
    <NavLink href="/profile">Profile</NavLink>
  {/snippet}
</Navbar>
```

### Protecting Routes

Edit `src/hooks.server.ts` to add protected routes:

```typescript
const protectedRoutes = ["/dashboard", "/profile", "/admin"];
```

### Using Components

All components are available after scaffolding. Examples:

```svelte
<script>
  import { Input, toast } from '@jsbursik/magic-ui';

  let email = $state('');

  function notify() {
    toast.add({ message: 'Hello!', type: 'success', duration: 3000 });
  }
</script>

<Input label="Email" type="email" bind:value={email} />
<button onclick={notify}>Notify</button>
```

## Advanced

### Extending the Database Schema

The CLI creates `src/lib/db/schema.ts` which re-exports all Better-Auth tables. Add your own tables there:

```typescript
// src/lib/db/schema.ts
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";
import * as magicSchema from "@jsbursik/magic-ui/server";

// Re-export Magic UI tables
export * from "@jsbursik/magic-ui/server";

// Add your custom tables
export const posts = pgTable("posts", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => magicSchema.user.id),
  title: text("title").notNull(),
  content: text("content"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
```

After adding tables, run `pnpm drizzle-kit generate` and `pnpm drizzle-kit migrate`.

### Custom Styling

Override CSS variables in your own stylesheet:

```css
:root {
  --color-primary: #3b82f6;
  --color-bg: #ffffff;
  /* ... more variables */
}
```

## API Reference

### Components

| Component        | Description                          |
| ---------------- | ------------------------------------ |
| `Input`          | Form input with label and validation |
| `Navbar`         | Navigation bar with auth-aware links |
| `NavLink`        | Navigation link with active state    |
| `ModeToggle`     | Dark/light mode toggle               |
| `Toast`          | Individual toast notification        |
| `ToastContainer` | Toast notification container         |

### Functions

```typescript
// Database
createDatabase(url: string): PostgresJsDatabase

// Auth
createAuth(db: PostgresJsDatabase): BetterAuth
initAuthClient(baseURL: string): AuthClient

// Toast Store
toast.add({ message: string, type: 'success' | 'error' | 'info', duration?: number })
toast.remove(id: string)
```

## What Gets Scaffolded

Running the CLI sets up everything you need:

- **Drizzle Config** (`drizzle.config.ts`) - Drizzle Kit configuration
- **Database Schema** (`src/lib/db/schema.ts`) - Extends package schema for custom tables
- **Server Hooks** (`src/hooks.server.ts`) - Auth middleware and route protection
- **Type Definitions** (`src/app.d.ts`) - TypeScript types for locals
- **Layout Files** (`src/routes/+layout.*`) - Main layout with navbar and session handling
- **Auth API** (`src/routes/api/auth/[...all]/+server.ts`) - Better-Auth endpoints
- **Server Setup** (`src/lib/server/{db,auth}.ts`) - Database and auth instances
- **Auth Pages** (`src/routes/{login,signup}/+page.svelte`) - Ready-to-use auth flows

## License

MIT

## Contributing

Contributions are welcome! Please open an issue or PR on [GitHub](https://github.com/jsbursik/magic-ui).

## Credits

Built with:

- [SvelteKit](https://kit.svelte.dev/)
- [Better-Auth](https://better-auth.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Tabler Icons](https://tabler-icons.io/)
