module.exports = {
  '**/*.{js,jsx,ts,tsx}': ['eslint --fix'],
  '**/*.{js,jsx,ts,tsx,cjs,json,less,scss,css,md}': ['prettier --write'],
  '**/*.{less,scss,css}': ['stylelint --fix']
}
