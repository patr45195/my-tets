import globals from "globals"
import pluginJs from "@eslint/js"
import tseslint from "typescript-eslint"
import pluginReact from "eslint-plugin-react"

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    rules: {
      indent: ["error", 2], // 2 пробела для отступов
      quotes: ["error", "single", { avoidEscape: true }], // одинарные кавычки, кроме случаев, когда они требуют экранирования
      semi: ["error", "always"], // всегда использовать точки с запятой
      "comma-dangle": ["error", "never"], // запятая в конце объектов и массивов не допускается
      "space-before-function-paren": ["error", "never"], // пробел перед скобками функции не допускается
      "no-multi-spaces": "error", // запрещает использование нескольких пробелов
      "key-spacing": ["error", { beforeColon: false, afterColon: true }], // пробел после двоеточия в объектах
      "arrow-spacing": ["error", { before: true, after: true }], // пробелы до и после стрелки в стрелочных функциях
      "object-curly-spacing": ["error", "always"], // пробелы внутри фигурных скобок объектов
      "array-bracket-spacing": ["error", "never"], // без пробелов внутри квадратных скобок массивов
    },
  },
]
