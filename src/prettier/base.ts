import { type Config } from 'prettier';

const config: Config = {
  trailingComma: 'all',
  singleQuote: true,
  jsxSingleQuote: true,
  tabWidth: 2,
  arrowParens: 'always',
  bracketSpacing: true,
  useTabs: false,
  semi: true,
  experimentalTernaries: true,
  bracketSameLine: false,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
