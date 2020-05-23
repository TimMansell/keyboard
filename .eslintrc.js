module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true,
    "jest": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["jest", "react", "prettier"],
   "parserOptions": {
    "parser": 'babel-eslint',
    "ecmaVersion": 6,
    "sourceType": "module"
  },
};