import solidityPlugin from 'prettier-plugin-solidity';
import { parse } from './parser'

// https://prettier.io/docs/en/plugins.html#languages
// https://github.com/ikatyang/linguist-languages/blob/master/data/Solidity.json
const {
  languages,
  printers,
  options,
  parsers: baseParsers,
} = solidityPlugin;

// https://prettier.io/docs/en/plugins.html#parsers
const customParser = {
  ...baseParsers['solidity-parse'],
  parse,
  loc: baseParsers['solidity-parse'].loc,
};

const parsers = {
  'solidity-parse': customParser
};

// https://prettier.io/docs/en/plugins.html#defaultoptions
const defaultOptions = {
  bracketSpacing: false,
  tabWidth: 4,
};

export default {
  languages,
  parsers,
  printers,
  options,
  defaultOptions
};
