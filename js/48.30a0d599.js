(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{685:function(n,e){n.exports="# Modal 模态框\n\n\n\n## 基本用法\n```jsx\nimport { Modal, Cell, Button, Select } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    modal1: false,\n    modal2: false,\n    modal3: false,\n    modal4: false,\n    modal5: false,\n    animationType: 'fade',\n  };\n\n  open = (key) => {\n    this.setState({\n      [`${key}`]: true,\n    });\n  }\n\n  close = (key) => {\n    this.setState({\n      [`${key}`]: false,\n    });\n  }\n\n  render() {\n    const { modal1, modal2, modal3, modal4, modal5, animationType, single } = this.state;\n    return (\n      <>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal1')}>开启</Button>\n          }\n        >\n          普通\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal3')}>开启</Button>\n          }\n        >\n          直角\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal2')}>开启</Button>\n          }\n        >\n          遮罩层可关闭\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal4')}>开启</Button>\n          }\n        >\n          无头部\n        </Cell>\n\n        <Cell\n          title=\"动画效果\"\n          description={\n            <Button size=\"xs\" onClick={() => this.open('modal5')}>开启</Button>\n          }\n        >\n          <Select\n            value={animationType}\n            dataSource={[\n              { value: 'fade', label: '淡出淡入效果(fade)' },\n              { value: 'zoom', label: '缩放效果(zoom)' },\n              { value: 'rotate', label: '旋转效果(rotate)' },\n              { value: 'door', label: '开关门效果(door)' },\n              { value: 'flip', label: '翻转效果(flip)' },\n              { value: 'moveUp', label: '移出移入效果(moveUp)' },\n              { value: 'moveDown', label: '移出移入效果(moveDown)' },\n              { value: 'moveLeft', label: '移出移入效果(moveLeft)' },\n              { value: 'moveRight', label: '移出移入效果(moveRight)' },\n              { value: 'slideUp', label: '滑出滑入效果(slideUp)' },\n              { value: 'slideDown', label: '滑出滑入效果(slideDown)' },\n              { value: 'slideLeft', label: '滑出滑入效果(slideLeft)' },\n              { value: 'slideRight', label: '滑出滑入效果(slideRight)' },\n            ]}\n            onOk={(selected) => {\n              this.setState({\n                animationType: selected.map(item => item.value),\n              });\n            }}\n          />\n        </Cell>\n\n        <Modal visible={modal1}>\n          <Modal.Header title=\"标题\" onClose={() => this.close('modal1')} />\n          <Modal.Body>\n            模态框内容\n          </Modal.Body>\n        </Modal>\n\n        <Modal visible={modal2} onMaskClick={() => this.close('modal2')}>\n          <Modal.Header title=\"标题\" />\n          <Modal.Body>点击遮罩层关闭</Modal.Body>\n        </Modal>\n        \n\n        <Modal shape=\"rect\" visible={modal3}>\n          <Modal.Header title=\"标题\" onClose={() => this.close('modal3')} />\n          <Modal.Body>模态框内容</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal4} onMaskClick={() => this.close('modal4')}>\n          <Modal.Body>无头部</Modal.Body>\n        </Modal>\n\n        <Modal visible={modal5} animationType={animationType} onMaskClick={() => this.close('modal5')}>\n          <Modal.Body>\n            <div style={{ height: 100 }}>当前使用的动画类型animationType：'{animationType}'</div>\n          </Modal.Body>\n        </Modal>\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## 警告框 Alert\n```jsx\nimport { Cell, Button, Alert, Confirm  } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    alert: false,\n    confirm: false,\n  };\n\n  toggle = (key) => {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    const { alert, confirm } = this.state;\n\n    return (\n      <>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('alert')}>开启</Button>\n          }\n        >\n          普通调用\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => {\n              Alert.show({\n                title: '警告',\n                message: '通过传参或promise调用均可关闭',\n                // onCancel: () => { \n                //   Alert.hide();\n                // },\n              }).then((res) => {\n                console.log(res);\n                Alert.hide();\n              })\n            }}>开启</Button>\n          }\n        >\n          静态调用（返回promise对象）\n        </Cell>\n\n        <Alert\n          shape=\"radius\"\n          visible={alert}\n          title=\"警告\"\n          message=\"这里是警告信息\"\n          onCancel={() => this.toggle('alert')}\n        />\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## 确认框 Confirm\n```jsx\nimport { Cell, Button, Confirm  } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    alert: false,\n    confirm: false,\n  };\n\n  toggle = (key) => {\n    this.setState({\n      [`${key}`]: !this.state[key],\n    });\n  }\n\n  render() {\n    const { alert, confirm } = this.state;\n    return (\n      <>\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => this.toggle('confirm')}>开启</Button>\n          }\n        >\n          普通调用\n        </Cell>\n\n        <Cell\n          description={\n            <Button size=\"xs\" onClick={() => {\n              Confirm.show({\n                title: '确认信息',\n                message: '通过传参或promise调用均可关闭',\n                // onOk: () => { \n                //   window.alert('click ok');\n                //   Confirm.hide();\n                // },\n                // onCancel: () => { \n                //   Confirm.hide();\n                // },\n              }).then((res) => {\n                console.log(res);\n                if(res) {\n                  window.alert('click ok');\n                  Confirm.hide();\n                } else {\n                  Confirm.hide();\n                }\n              })\n            }}>开启</Button>\n          }\n        >\n          静态调用（返回promise对象）\n        </Cell>\n\n        <Confirm\n          shape=\"radius\"\n          visible={confirm}\n          title=\"确认信息\"\n          message=\"你确定要这样做吗？\"\n          onOk={() => {\n            window.alert('click ok');\n            this.toggle('confirm');\n          }}\n          onCancel={() => this.toggle('confirm')}\n        />\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| shape | string | 'radius' | 形状，可选值 `rect`、`radius` |\n| visible | boolean | false | 是否显示 |\n| animationType | string | 'fade' | 动画效果，可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` |\n| animationDuration | number | 200 | 动画执行时间（单位：毫秒） |\n| width | string &#124; number | '70%' | 宽度 |\n| afterClose | () => void | - | 模态框关闭后的回调 |\n| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |\n\n\n## 静态方法\n\n```js\n// 显示警告框\nAlert.show({\n  title,\n  message,\n  cancelText,\n  onCancel: () => { \n    Alert.hide();\n  },\n});\n\n// 显示确认框\nConfirm.show({\n  title,\n  message,\n  okText,\n  cancelText,\n}).then((res) => {\n  console.log(res); // true or false，需要注意promise状态不可逆\n  Confirm.hide();\n});\n\n```\n\n  \n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| title | ReactNode | - | 弹出框的标题 |\n| message | ReactNode | - | 弹出框的内容 |\n| cancelText | ReactNode | '关闭'(Alert)/'取消'(Confirm) | 取消按钮的内容 |\n| okText | ReactNode | '确认' | 确认按钮的内容 |\n| onOk | () => void | - | 点击“确认”后的回调函数(Confirm) |\n| onCancel | () => void | - | 点击“关闭/取消”后的回调函数 |\n| animationType | string | 'zoom' | 动画效果，可选值 `fade`, `door`, `flip`, `rotate`, `zoom`,`moveUp`, `moveDown`, `moveLeft`, `moveRight`,`slideUp`, `slideDown`, `slideLeft`, `slideRight` |\n| animationDuration | number | 200 | 动画执行时间（单位：毫秒） |\n\n\n```js\n// 隐藏警告框\nAlert.hide();\n\n// 隐藏确认框\nConfirm.hide();\n```"}}]);