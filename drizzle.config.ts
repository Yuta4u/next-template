import { config } from "dotenv"
import { defineConfig } from "drizzle-kit"

config({ path: ".env" })

export default defineConfig({
  schema: "./src/server/schema.ts",
  out: "./src/server/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://next-auth-db_owner:5UZ8qWcMaNoO@ep-old-night-a1fps116.ap-southeast-1.aws.neon.tech/next-auth-db?sslmode=require",
  },
})
