(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{365:function(n,e,a){"use strict";a.r(e),a.d(e,"default",function(){return g});var t=a(4),s=a.n(t),d=a(5),r=a.n(d),o=a(6),i=a.n(o),c=a(18),l=a.n(c),m=a(7),u=a.n(m),p=a(2),v=a.n(p),g=function(n){function e(){var n,t;s()(this,e);for(var d=arguments.length,o=new Array(d),c=0;c<d;c++)o[c]=arguments[c];return t=r()(this,(n=i()(e)).call.apply(n,[this].concat(o))),v()(l()(t),"document",function(){return{document:a(638),className:"badge-page"}}),t}return u()(e,n),e}(a(619).a)},619:function(n,e,a){"use strict";a.d(e,"a",function(){return B});var t=a(4),s=a.n(t),d=a(8),r=a.n(d),o=a(5),i=a.n(o),c=a(6),l=a.n(c),m=a(7),u=a.n(m),p=a(0),v=a.n(p),g=a(622),x=a.n(g),h=a(623),N=a.n(h),B=(a(624),a(620),function(n){function e(){return s()(this,e),i()(this,l()(e).apply(this,arguments))}return u()(e,n),r()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,a=n.className;if("string"==typeof e){var t=new x.a.Renderer;t.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},t.code=function(n,e){var a=!(!e||!N.a.getLanguage(e))?N.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(a,"</code></pre>")};var s=x()(e,{renderer:t});return v.a.createElement("div",{className:a,dangerouslySetInnerHTML:{__html:s}})}return v.a.createElement("span",null)}}]),e}(p.Component))},620:function(n,e,a){},638:function(n,e){n.exports='# 徽标 Badge\n\n\n\n## 基本用法\n```jsx\nimport { Badge, Cell } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Cell hasArrow title="点状" description={<Badge />} onClick={() => {}} />\n        <Cell hasArrow title="直角" description={<Badge shape="rect" text="免费" />} onClick={() => {}} />\n        <Cell hasArrow title="圆角" description={<Badge shape="radius" text="new" />} onClick={() => {}} />\n        <Cell hasArrow title="椭圆角" description={<Badge shape="round" text="999+" />} onClick={() => {}} />\n        <Cell hasArrow title="圆形" description={<Badge shape="circle" text={3} />} onClick={() => {}} />\n        <Cell hasArrow title="叶形" description={<Badge shape="leaf" text="新品" />} onClick={() => {}} />\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 多主题\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="custom-panel">\n        <div className="box">\n          <Badge theme="primary" />\n        </div>\n        <div className="box">\n          <Badge theme="success" />\n        </div>\n        <div className="box">\n          <Badge theme="warning" />\n        </div>\n        <div className="box">\n          <Badge theme="danger" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="primary" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="success" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="warning" />\n        </div>\n        <div className="box">\n          <Badge shape="round" text="999+" theme="danger" />\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n\n## 上标位置\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="custom-panel">\n        <div className="box">\n          <Badge sup shape="dot"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="rect" text="免费"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="radius" text="new"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="round" text="999+"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="circle" text="3"><div className="box-item" /></Badge>\n        </div>\n        <div className="box">\n          <Badge sup shape="leaf" text="新品"><div className="box-item" /></Badge>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 文本示例\n```jsx\nimport { Badge } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div className="text-panel">\n        <div className="box">\n          <Badge sup shape="dot"><span className="box-text">邀请有奖</span></Badge>\n        </div>\n        <div className="box">\n          <span className="box-text">邀请有奖</span><Badge sup shape="dot"/>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| theme | string | \'danger\' | 设置主题，可选值为 `default`、`primary`、`success`、`warning`、`danger` |\n| shape | string | \'dot\' | 设置形状，可选值为 `dot`、`rect` 、`radius`、`round`、`circle`、`leaf` |\n| sup | bool | false | 是否上标位置 |\n| text | string | - | 设置显示的文字 |\n\n'}}]);