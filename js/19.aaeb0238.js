(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return m});var r=t(4),a=t.n(r),o=t(5),i=t.n(o),l=t(6),s=t.n(l),c=t(18),u=t.n(c),d=t(7),p=t.n(d),v=t(2),y=t.n(v),m=function(n){function e(){var n,r;a()(this,e);for(var o=arguments.length,l=new Array(o),c=0;c<o;c++)l[c]=arguments[c];return r=i()(this,(n=s()(e)).call.apply(n,[this].concat(l))),y()(u()(r),"document",function(){return{document:t(649),className:"keyboard-page"}}),r}return p()(e,n),e}(t(619).a)},619:function(n,e,t){"use strict";t.d(e,"a",function(){return f});var r=t(4),a=t.n(r),o=t(8),i=t.n(o),l=t(5),s=t.n(l),c=t(6),u=t.n(c),d=t(7),p=t.n(d),v=t(0),y=t.n(v),m=t(622),b=t.n(m),h=t(623),k=t.n(h),f=(t(624),t(620),function(n){function e(){return a()(this,e),s()(this,u()(e).apply(this,arguments))}return p()(e,n),i()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var r=new b.a.Renderer;r.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},r.code=function(n,e){var t=!(!e||!k.a.getLanguage(e))?k.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(t,"</code></pre>")};var a=b()(e,{renderer:r});return y.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:a}})}return y.a.createElement("span",null)}}]),e}(v.Component))},620:function(n,e,t){},649:function(n,e){n.exports="# 虚拟键盘 Keyboard\n\n\n\n## 平铺键盘 Keyboard\n```jsx\nimport { Cell, Select, Keyboard } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      type: 'number',\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title=\"键盘类型\">\n          <Select\n            value={this.state.type}\n            dataSource={[\n              { value: 'number', label: '数字键盘' },\n              { value: 'price', label: '金额键盘' },\n              { value: 'idcard', label: '身份证键盘' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                type: selected.map(item => item.value)[0],\n              });\n            }}\n          />\n        </Cell>\n        <Keyboard type={this.state.type} onKeyClick={(key) => console.log(key)} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 键盘触发器 KeyboardPicker\n```jsx\nimport { Cell, Button, KeyboardPicker, Input } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible: false,\n      value: '',\n    };\n  }\n\n  toggle() {\n    this.setState({ visible: !this.state.visible });\n  }\n\n  onKeyClick(key) {\n    console.log(key);\n    if (['close', 'ok'].indexOf(key) > -1) {\n      this.toggle();\n      return;\n    }\n\n    const value = this.state.value;\n    const newValue = (key === 'delete')\n      ? value.slice(0, value.length - 1)\n      : value + key;\n\n    if (newValue !== value) {\n      this.setState({ value: newValue });\n    }\n  }\n\n  render() {\n    const { visible } = this.state;\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle()}>{visible ? '关闭' : '开启'}</Button>\n          }\n        >\n          拾取器触发方式\n        </Cell>\n\n        <KeyboardPicker\n          visible={visible}\n          onKeyClick={(key) => this.onKeyClick(key)}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| type | string | 'number' | 键盘类型，可选值 `number`、`price`、`idcard` |\n| onKeyClick | (key?: string) => void | - | 点击按键时触发的回调函数 |\n\n### 仅 KeyboardPicker 支持的属性\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否展示 |\n"}}]);