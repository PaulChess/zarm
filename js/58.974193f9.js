(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{607:function(n,o,t){"use strict";t.r(o),t.d(o,"default",function(){return f});var e=t(4),s=t.n(e),p=t(5),i=t.n(p),l=t(6),a=t.n(l),c=t(18),u=t.n(c),r=t(7),d=t.n(r),h=t(2),m=t.n(h),C=t(625),f=(t(936),function(n){function o(){var n,e;s()(this,o);for(var p=arguments.length,l=new Array(p),c=0;c<p;c++)l[c]=arguments[c];return e=i()(this,(n=a()(o)).call.apply(n,[this].concat(l))),m()(u()(e),"document",function(){return{document:t(659),className:"popup-page"}}),e}return d()(o,n),o}(C.a))},659:function(n,o){n.exports="# 弹出框 Popup\n\n\n\n## 基本用法\n```jsx\nimport { Popup, Cell, Button } from 'zarm';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      popBottom: false,\n      popTop: false,\n      popLeft: false,\n      popRight: false,\n    };\n  }\n\n  open(key) {\n    this.setState({\n      [`${key}`]: true,\n    });\n  }\n\n  close(key) {\n    this.setState({\n      [`${key}`]: false,\n    });\n  }\n\n  render() {\n    return (\n      <div>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('popTop')}>开启</Button>\n          }\n        >\n          从上方弹出\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('popBottom')}>开启</Button>\n          }\n        >\n          从下方弹出\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('popLeft')}>开启</Button>\n          }\n        >\n          从左侧弹出\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('popRight')}>开启</Button>\n          }\n        >\n          从右侧弹出\n        </Cell>\n\n        <Popup\n          autoClose\n          visible={this.state.popTop}\n          direction=\"top\"\n          duration={3000}\n          mask={false}\n          onMaskClick={() => this.close('popTop')}\n          onClose={() => console.log('关闭')}\n        >\n          <div className=\"popup-box-top\">\n            更新成功\n          </div>\n        </Popup>\n\n        <Popup\n          visible={this.state.popBottom}\n          direction=\"bottom\"\n          onMaskClick={() => this.close('popBottom')}\n          onOpen={() => console.log('打开')}\n          onClose={() => console.log('关闭')}\n        >\n          <div className=\"popup-box\">\n            <Button size=\"xs\" onClick={() => { this.close('popBottom'); }}>关闭弹层</Button>\n          </div>\n        </Popup>\n\n        <Popup\n          visible={this.state.popLeft}\n          onMaskClick={() => this.close('popLeft')}\n          direction=\"left\"\n          onClose={() => console.log('关闭')}\n        >\n          <div className=\"popup-box-left\">\n            <Button size=\"xs\" onClick={() => this.close('popLeft')}>关闭弹层</Button>\n          </div>\n        </Popup>\n\n        <Popup\n          visible={this.state.popRight}\n          onMaskClick={() => this.close('popRight')}\n          direction=\"right\"\n          onClose={() => console.log('关闭')}\n        >\n          <div className=\"popup-box\">\n            <Button size=\"xs\" onClick={() => this.close('popRight')}>关闭弹层</Button>\n          </div>\n        </Popup>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| visible | boolean | false | 是否显示 |\n| autoClose | boolean | false | 是否自动关闭 |\n| direction | string | 'bottom' | 弹出方向，可选值 `top`, `bottom`, `left`, `right` |\n| stayTime | number | 3000 | 自动关闭前停留的时间（单位：毫秒） |\n| animationDuration | number | 200 | 动画执行时间（单位：毫秒） |\n| maskType | string | 'normal' | 遮罩层的类型，可选值 `transparent`, `light`, `normal`, `dark` |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n| onClose | () => void | - | 关闭后触发的回调函数 |\n"},936:function(n,o,t){}}]);