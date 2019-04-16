(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{615:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return f});var l=t(4),a=t.n(l),o=t(5),c=t.n(o),i=t(6),s=t.n(i),r=t(18),d=t.n(r),u=t(7),h=t.n(u),p=t(2),C=t.n(p),f=function(n){function e(){var n,l;a()(this,e);for(var o=arguments.length,i=new Array(o),r=0;r<o;r++)i[r]=arguments[r];return l=c()(this,(n=s()(e)).call.apply(n,[this].concat(i))),C()(d()(l),"document",function(){return{document:t(667),className:"switch-page"}}),l}return h()(e,n),e}(t(625).a)},667:function(n,e){n.exports="# 开关 Switch\n\n\n\n## 基本用法\n```jsx\nimport { Switch, Cell } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      value: false,\n    };\n  }\n\n  toggle(value) {\n    this.setState({\n      value,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Switch\n              checked={this.state.value}\n              onChange={(value) => {\n                this.setState({ value });\n              }}\n            />\n          }\n        >\n          普通\n        </Cell>\n        <Cell description={<Switch defaultChecked />}>默认开</Cell>\n        <Cell description={<Switch disabled />}>禁用的开关（默认关）</Cell>\n        <Cell description={<Switch defaultChecked disabled />}>禁用的开关（默认开）</Cell>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| checked | boolean | - | 值 |\n| defaultChecked | boolean | - | 初始值 |\n| disabled | boolean | false | 是否禁用 |\n| onChange | (value?: boolean) => void | - | 值变化时触发的回调函数 |\n"}}]);