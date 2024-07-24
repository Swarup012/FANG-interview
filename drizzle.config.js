/** @type { import("drizzle-kit").Config } */

export default config = {
  schema: "./utils/schema.js",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://fang_owner:pzu6GSnZ5chP@ep-soft-paper-a12c8poo.ap-southeast-1.aws.neon.tech/fang?sslmode=require',
  }
};

