# React + Vite + Typescript

## 各个依赖和配置作用说明

### 依赖说明

- react: React 库
- react-dom: React DOM 库
- @types/react: React 类型定义
- @types/react-dom: React DOM 类型定义
- vite: Vite 库
- eslint: ESLint用于检查代码格式, 代码规范, 代码质量
- eslint-config-prettier: ESLint 和 Prettier 的规则冲突解决, 将部分ESLint规则给禁用了，避免Prettier格式化之后的代码导致ESLint报错
- eslint-plugin-prettier: ESLint 和 Prettier 的规则冲突解决, 主要作用就是将prettier作为ESLint的规则来使用，相当于代码不符合Prettier的标准时，会报一个ESLint错误，同时也可以通过eslint --fix来进行格式化。
- eslint-plugin-react: ESLint React 插件
- prettier: Prettier 用于代码格式化
- stylelint: Stylelint 用于检查样式格式, 样式规范, 样式质量
- stylelint-config-prettier: Stylelint 和 Prettier 的规则冲突解决, 将部分Stylelint规则给禁用了，避免Prettier格式化之后的代码导致Stylelint报错
- stylelint-config-standard: Stylelint 标准规则,stylelint-config-standard继承了stylelint-config-recommended，所以不需要再引入stylelint-config-recommended
- stylelint-order: Stylelint 顺序规则, stylelint-order是stylelint的一个插件，用于检查样式的顺序
- typescript: Typescript 用于类型检查
- vite: Vite 用于本地开发
> 一般采用 ESlint 来做代码质量的约束，用 Prettier 来做代码风格的约束

### 配置说明

1. .eslintrc.js: ESLint 配置文件
    1.1 extends: 继承的规则
    1.2 plugins: 插件
    1.3 rules: 规则
    1.4 parserOptions: 解析器配置
    1.5 env: 环境
    1.6 settings: 设置, 例如设置React版本,不然会有警告
    
    > 注: prettier是eslint-config-prettier的缩写
    
2. .prettierrc.js: Prettier 配置文件
    2.1 printWidth: 每行代码长度（默认80）
    2.2 tabWidth: 每个tab相当于多少个空格（默认2）
    2.3 ......

3. .stylelintrc.js: Stylelint 配置文件
    3.1 extends: 继承的规则
    3.2 plugins: 插件
    3.3 rules: 规则
    3.4 ignoreFiles: 忽略的文件

## 参考链接

1. [cz-customizable - npm (npmjs.com)](https://www.npmjs.com/package/cz-customizable)