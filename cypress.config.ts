import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    BILLETTO_ACCESS_KEY_SECRET:
      "3mHA1K,jItX4895EsDjUL4XygncH7NE8w9vBhJUXYtBWhFUa1H",
    BILLETTO_APP_ID: "BLT2KPE281WX8RJTUWC3Z1BMG",
  },
});
