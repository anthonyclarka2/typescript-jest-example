import type { Config } from "jest";

export default {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["\*/__tests__/\*/*.test.ts"],
  globals: {
    fetch: global.fetch,
  },
} as Config;
