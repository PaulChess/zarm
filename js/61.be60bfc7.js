(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{678:function(n,e){n.exports="# Switch 开关\n\n\n\n## 基本用法\n```jsx\nimport { Switch, Cell } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    value: false,\n  };\n\n  toggle = (value) => {\n    this.setState({\n      value,\n    });\n    console.log(value);\n  }\n\n  render() {\n    return (\n      <>\n        <Cell\n          description={\n            <Switch\n              checked={this.state.value}\n              onChange={(value) => {\n                this.setState({ value });\n                console.log(value);\n              }}\n            />\n          }\n        >\n          普通\n        </Cell>\n        <Cell description={<Switch defaultChecked />}>默认开</Cell>\n        <Cell description={<Switch disabled />}>禁用的开关（默认关）</Cell>\n        <Cell description={<Switch defaultChecked disabled />}>禁用的开关（默认开）</Cell>\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| checked | boolean | - | 值 |\n| defaultChecked | boolean | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: boolean) => void | - | 值变化时触发的回调函数 |\n"}}]);