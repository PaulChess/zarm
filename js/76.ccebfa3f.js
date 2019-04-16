(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{603:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return h});var o=t(4),r=t.n(o),c=t(5),a=t.n(c),i=t(6),s=t.n(i),d=t(18),l=t.n(d),m=t(7),u=t.n(m),p=t(2),f=t.n(p),h=function(n){function e(){var n,o;r()(this,e);for(var c=arguments.length,i=new Array(c),d=0;d<c;d++)i[d]=arguments[d];return o=a()(this,(n=s()(e)).call.apply(n,[this].concat(i))),f()(l()(o),"document",function(){return{document:t(655),className:"nav-bar-page"}}),o}return u()(e,n),e}(t(625).a)},655:function(n,e){n.exports='# 导航栏 NavBar\n\n\n\n## 左侧渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        left={<Icon\n          type="arrow-left"\n          theme="success"\n          onClick={() => window.history.back()}\n        />}\n        title="这是标题"\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 右侧渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        title="这是标题这是标题这是标题"\n        right={\n          <Icon\n            type="question-round"\n            theme="success"\n            onClick={() => window.alert(\'click icon\')}\n          />\n        }\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 复数渲染\n```jsx\nimport { NavBar, Icon } from \'zarm\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <NavBar\n        left={\n          <Icon \n            type="arrow-left"\n            theme="success"\n            onClick={() => window.history.back()}\n          />\n        }\n        title="这是标题"\n        right={<div>\n          <Icon type="add" theme="success" onClick={() => alert(\'click icon1\')} />\n          <Icon\n            style={{ marginLeft: 16 }}\n            type="question-round"\n            theme="success"\n            onClick={() => alert(\'click icon2\')}\n          />\n        </div>}\n      />\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | ReactNode | - | 标题渲染 |\n| left | ReactNode | - | 导航栏左侧渲染 |\n| right | ReactNode | - | 导航栏右侧渲染 |\n\n'}}]);