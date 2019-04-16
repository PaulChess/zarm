(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{377:function(n,e,t){"use strict";t.r(e),t.d(e,"default",function(){return f});var l=t(4),a=t.n(l),r=t(5),c=t.n(r),o=t(6),i=t.n(o),s=t(18),u=t.n(s),d=t(7),h=t.n(d),p=t(2),m=t.n(p),f=function(n){function e(){var n,l;a()(this,e);for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return l=c()(this,(n=i()(e)).call.apply(n,[this].concat(o))),m()(u()(l),"document",function(){return{document:t(650),className:"locale-provider-page"}}),l}return h()(e,n),e}(t(619).a)},619:function(n,e,t){"use strict";t.d(e,"a",function(){return k});var l=t(4),a=t.n(l),r=t(8),c=t.n(r),o=t(5),i=t.n(o),s=t(6),u=t.n(s),d=t(7),h=t.n(d),p=t(0),m=t.n(p),f=t(622),g=t.n(f),v=t(623),C=t.n(v),k=(t(624),t(620),function(n){function e(){return a()(this,e),i()(this,u()(e).apply(this,arguments))}return h()(e,n),c()(e,[{key:"render",value:function(){var n=this.document(localStorage.getItem("LANGUAGE")||"zh-CN"),e=n.document,t=n.className;if("string"==typeof e){var l=new g.a.Renderer;l.table=function(n,e){return'<div class="grid-container"><table class="grid"><thead>'.concat(n,"</thead><tbody>").concat(e,"</tbody></table></div>")},l.code=function(n,e){var t=!(!e||!C.a.getLanguage(e))?C.a.highlight(e,n).value:n;return'<pre><code class="hljs '.concat(e,'">').concat(t,"</code></pre>")};var a=g()(e,{renderer:l});return m.a.createElement("div",{className:t,dangerouslySetInnerHTML:{__html:a}})}return m.a.createElement("span",null)}}]),e}(p.Component))},620:function(n,e,t){},650:function(n,e){n.exports="# 国际化 LocaleProvider\n\n\n\n## 基本用法\n```jsx\nimport { Cell, LocaleProvider, Button, SearchBar, Alert, Confirm, Select } from 'zarm';\n\nconst locales = {\n  'en_US': {\n    locale: 'en',\n    SearchBar: {\n      placeholder: 'Search',\n      cancelText: 'Cancel',\n    },\n    Alert: {\n      cancelText: 'Close',\n    },\n    Confirm: {\n      cancelText: 'Cancel',\n      okText: 'OK',\n    },\n    Select: {\n      placeholder: 'please select',\n    },\n    Picker: {\n      cancelText: 'Cancel',\n      okText: 'OK',\n      title: 'please select',\n    }\n  },\n  'zh_CN': {\n    locale: 'zh_cn',\n    SearchBar: {\n      placeholder: '搜索',\n      cancelText: '取消',\n    },\n    Alert: {\n      cancelText: '关闭',\n    },\n    Confirm: {\n      cancelText: '取消',\n      okText: '确定',\n    },\n    Select: {\n      placeholder: '请选择',\n    },\n    Picker: {\n      cancelText: '取消',\n      okText: '确定',\n      title: '请选择',\n    }\n  },\n};\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      locale: 'en_US',\n      alert: false,\n      confirm: false,\n    };\n    this.onOk = this.onOk.bind(this);\n  }\n\n  toggle(key) {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  onOk(selected) {\n    this.setState({\n      locale: selected[0].value,\n    });\n  }\n\n  render() {\n    const { alert, confirm } = this.state;\n\n    return (\n      <LocaleProvider locale={locales[this.state.locale]}>\n        <div>\n          <Cell hasArrow title=\"切换语言包\">\n            <Select\n              value={this.state.locale}\n              dataSource={[\n                { value: 'en_US', label: 'English' },\n                { value: 'zh_CN', label: '中文' },\n              ]}\n              onOk={this.onOk}\n            />\n          </Cell>\n\n          <SearchBar />\n\n          <Cell\n            description={\n              <Button size=\"xs\" theme=\"warning\" onClick={() => this.toggle('alert')}>开启</Button>\n            }\n          >\n            警告框 Alert\n          </Cell>\n\n          <Cell\n            description={\n              <Button size=\"xs\" theme=\"warning\" onClick={() => this.toggle('confirm')}>开启</Button>\n            }\n          >\n            确认框 Confirm\n          </Cell>\n\n          <Alert\n            shape=\"radius\"\n            visible={alert}\n            title=\"警告\"\n            message=\"这里是警告信息\"\n            onCancel={() => this.toggle('alert')}\n          />\n\n          <Confirm\n            shape=\"radius\"\n            visible={confirm}\n            title=\"确认信息\"\n            message=\"你确定要这样做吗？\"\n            onOk={() => window.alert('click ok')}\n            onCancel={() => this.toggle('confirm')}\n          />\n        </div>\n      </LocaleProvider>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| locale | Object | - | 语言包配置，语言包可到 zarm/lib/locale-provider/locale 目录下寻找 |\n"}}]);