module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 启用推荐的规则
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12, // 默认设置为 3，5（默认）， 你可以使用 6、7、8、9 或 10 来指定你想要使用的 ECMAScript 版本，你也可以用使用年份命名的版本号指定为 2015（同 6），2016（同 7），或 2017（同 8）或 2018（同 9）或 2019 (same as 10)
    sourceType: 'module', // 设置为 `"script"` (默认) 或 `"module"`（如果你的代码是 ECMAScript 模块)。
  },
  plugins: ['react', 'react-hooks'],
  // 0:off;1:warn;2:error
  rules: {
    // 不使用var声明
    'no-var': 2,
    'react/prop-types': 0,
    'react/display-name': 0,
    'react/no-unescaped-entities': 0,
    'react/jsx-key': 0,
    'react/no-children-prop': 0,
    //默认情况下不禁用console
    // 'no-console': 0,
    // 禁用未声明的变量
    'no-undef': 0,
    // 禁止不必要的布尔转换
    'no-extra-boolean-cast': 1,
    'no-unused-vars': 1,
    // 最多两行空格 否则warn
    // 'no-multiple-empty-lines': [1, { max: 2 }],
    // 要求或禁止在可能的情况下要求使用简化的赋值操作符
    // 'operator-assignment': 0,
    // 要求或禁止块内填充
    // 'padded-blocks': 0,
    // 要求对象字面量属性名称用引号括起来
    // 'quote-props': 0,
    // 要求同一个声明块中的变量按顺序排列
    // 'sort-vars': 0,
    'react-hooks/rules-of-hooks': 2, // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 1, // 检查 effect 的依赖
    'eslint-disable-next-line': 0,
    'space-before-function-paren': 0, //关闭方法名后增加空格
    // 禁用eval()方法 eval()函数计算或者执行参数
    'no-eval': 1,
    // 不使用不必要的转义字符
    'no-useless-escape': 1,
    // 禁止修改参数(参数数据结构),不要对参数重新赋值
    'no-param-reassign': 1,
    // 使用箭头函数时,使用小括号包含住参数
    'arrow-parens': 1,
    // 无混淆箭头(箭头函数和操作符)
    'no-confusing-arrow': 1,
    // 把import 放在其他语句之前
    // 'import/first': 1,
    'no-debugger': 0,
	'no-mixed-spaces-and-tabs':0
  },
};
