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
- eslint-plugin-react-hooks: ESLint React Hooks 插件, 用于检查React Hooks的使用,配置在.eslintrc.js中的plugins中
- eslint-plugin-react-refresh: 主要作用是支持 React 应用中的热重载（Hot Module Replacement,配置在.eslintrc.js中的plugins中
- eslint-plugin-react: ESLint React 插件
- prettier: Prettier 用于代码格式化
- @commitlint/cli: Commitlint 用于检查提交信息格式
- @commitlint/config-conventional: Commitlint 约定规则,不符合规则的不能commit
- commitizen: Commitizen 用于生成规范的提交信息(和cz-customizable, cz-conventional-changelog作用类似)
- cz-customizable: Commitizen 自定义配置, 用于生成规范的提交信息
- cz-customizable-changelog: Commitizen 自定义配置, 用于生成规范的提交信息
- husky: Husky 用于配置 Git Hooks
- lint-staged: Lint-staged 用于为eslint、stylelint、prettier等工具提供针对git暂存区文件的执行命令
- stylelint: Stylelint 用于检查样式格式, 样式规范, 样式质量
- stylelint-config-prettier: Stylelint 和 Prettier 的规则冲突解决, 将部分Stylelint规则给禁用了，避免Prettier格式化之后的代码导致Stylelint报错
- stylelint-config-standard: Stylelint 标准规则,stylelint-config-standard继承了stylelint-config-recommended，所以不需要再引入stylelint-config-recommended
- stylelint-order: Stylelint 顺序规则, stylelint-order是stylelint的一个插件，用于检查样式的顺序
- typescript: Typescript 用于类型检查
- @types/node: Node 类型定义
- @vitejs/plugin-react-swc: Vite React 插件, 用于支持 React 语法, 并且使用 SWC 编译器(SWC编译器: 一个用Rust编写的超快的JS / TS编译器)
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

4. .commitlintrc.js: Commitlint 配置文件
    4.1 extends: 继承的规则
    4.2 rules: 规则

5. .czrc: Commitizen 配置文件
    5.1 path: Commitizen 自定义配置文件路径(可选: node_modules/commitizen, node_modules/cz-customizable, node_modules/cz-conventional-changelog,)

6. .cz-config.js: cz-customizable 配置文件

7. .husky: Husky 配置目录, 初始化命令: npx husky install
    7.1 'commit-msg': 提交信息检查
    7.2 'pre-commit': 提交前执行的命令

## 参考链接

1. [cz-customizable - npm (npmjs.com)](https://www.npmjs.com/package/cz-customizable)
1. [eslint-plugin-react-refresh - npm (npmjs.com)](https://www.npmjs.com/package/eslint-plugin-react-refresh)
1. [手把手教你如何规范你项目中的git commit（含汉化配置） - 掘金 (juejin.cn)](https://juejin.cn/post/7062303366768132132)
1. [【前端工程化】配置React+ts企业级代码规范及样式格式和git提交规范 - 掘金 (juejin.cn)](https://juejin.cn/post/7101596844181962788#heading-32)