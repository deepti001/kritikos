import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import prettier from "eslint-config-prettier";



/** @type {import('eslint').Linter.Config[]} */
export default [
  // {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  // {languageOptions: { globals: globals.browser }},
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    extends: [
      "eslint:recommended",
      "plugin:prettier/recommended",
    ],
    rules: {
      // Add any custom rules or overrides here
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  prettier, // Ensure Prettier is applied last to override conflicting rules

];