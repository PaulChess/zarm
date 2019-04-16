(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{363:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return p});var i=t(4),o=t.n(i),s=t(5),l=t.n(s),a=t(6),c=t.n(a),r=t(18),u=t.n(r),g=t(7),d=t.n(g),h=t(2),v=t.n(h),p=function(n){function e(){var n,i;o()(this,e);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return i=l()(this,(n=c()(e)).call.apply(n,[this].concat(a))),v()(u()(i),"document",function(){return{document:t(636),className:"actionsheet-page"}}),i}return d()(e,n),e}(t(619).a)},619:function(n,e,t){"use strict";t.d(e,"a",function(){return C});var i=t(4),o=t.n(i),s=t(8),l=t.n(s),a=t(5),c=t.n(a),r=t(6),u=t.n(r),g=t(7),d=t.n(g),h=t(0),v=t.n(h),p=t(622),b=t.n(p),f=t(623),m=t.n(f),C=(t(624),t(620),function(n){function e(){return o()(this,e),c()(this,u()(e).apply(this,arguments))}return d()(e,n),l()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var i=new b.a.Renderer;i.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},i.code=function(n,e){var t=!(!e||!m.a.getLanguage(e))?m.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(t,"</code></pre>")};var o=b()(e,{renderer:i});return v.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:o}})}return v.a.createElement("span",null)}}]),e}(h.Component))},620:function(n,e,t){},636:function(n,e){n.exports="# 动作面板 ActionSheet\n\n\n\n## 基本用法\n```jsx\nimport { ActionSheet, Cell, Button } from 'zarm';\n\nconst BUTTONS = [\n  {\n    text: '操作一',\n    onClick: () => console.log('点击操作一'),\n  },\n  {\n    theme: 'primary',\n    text: '操作二',\n    onClick: () => console.log('点击操作二'),\n  },\n  {\n    theme: 'danger',\n    text: '操作三',\n    onClick: () => console.log('点击操作三'),\n  },\n];\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      visible1: false,\n      visible2: false,\n      visible3: false,\n    };\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible2')}>开启</Button>\n          }\n        >\n          带取消操作\n        </Cell>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('visible3')}>开启</Button>\n          }\n        >\n          圆角、留边\n        </Cell>\n\n        <ActionSheet\n          visible={this.state.visible1}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible1')}\n        />\n        <ActionSheet\n          visible={this.state.visible2}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible2')}\n          onCancel={() => this.toggle('visible2')}\n        />\n        <ActionSheet\n          spacing\n          visible={this.state.visible3}\n          actions={BUTTONS}\n          onMaskClick={() => this.toggle('visible3')}\n          onCancel={() => this.toggle('visible3')}\n        />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| spacing | boolean | false | 是否和外部有间距 |\n| actions | Action[] | [] | 动作列表 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| onCancel | () => void | - | 显示取消菜单，点击时触发的回调函数 |\n| cancelText | string | '取消' | 取消菜单的文案 |\n\n### Action 类型定义\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| text | string | - | 按钮文字 |\n| theme | string | 'default' | 按钮主题，可选值 `default`、`primary`、`success`、`warning`、`danger`\n| onClick | () => void | - | 按钮点击后触发的回调函数 |"}}]);