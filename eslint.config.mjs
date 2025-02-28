import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "plugin:react-hooks/recommended", "next"),
 
  {
   
    rules: {
      "no-unused-vars": "error",
      "indent": ["error", 2],
      "no-unreachable": "error",
      "quotes": [
        "error",
        "double"
      ], 
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error" ,
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "react/no-unescaped-entities": "off",
      "@next/next/no-page-custom-font": "off",
    }
  }
  

];

export default eslintConfig;
