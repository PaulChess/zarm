(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{676:function(n,e){n.exports="# Slider 滑动输入条\n\n\n\n## 基本用法\n```jsx\nimport { Cell, Slider } from 'zarm';\n\nclass Demo extends React.Component {\n  state = {\n    value: 0,\n  };\n\n  render() {\n    return (\n      <>\n        <Cell title=\"普通\">\n          <Slider\n            value={this.state.value}\n            onChange={(value) => {\n              this.setState({ value })\n              console.log(value);\n            }}\n          />\n        </Cell>\n\n        <Cell title=\"设置默认值\">\n          <Slider defaultValue={20} />\n        </Cell>\n\n        <Cell title=\"设置上下限\">\n          <Slider min={-100} max={100} defaultValue={0} />\n        </Cell>\n\n        <Cell title=\"禁用状态\">\n          <Slider disabled defaultValue={20} />\n        </Cell>\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## 刻度与标记\n```jsx\nimport { Cell, Slider } from 'zarm';\n\nconst MARKS = {\n  0: '0°C',\n  26: '26°C',\n  65: '65°C',\n  100: '100°C',\n}\n\nReactDOM.render(\n  <>\n    <Cell title=\"显示刻度\">\n      <Slider marks={MARKS} />\n    </Cell>\n    \n    <Cell title=\"显示标记\" style={{ paddingBottom: 15 }}>\n      <Slider showMark marks={MARKS} />\n    </Cell>\n    \n    <Cell title=\"步长为10\" style={{ paddingBottom: 15 }}>\n      <Slider showMark step={10} marks={MARKS} />\n    </Cell>\n    \n    <Cell title=\"步长为null\" style={{ paddingBottom: 15 }}>\n      <Slider showMark step={null} marks={MARKS} />\n    </Cell>\n  </>\n, mountNode);\n```\n\n\n\n## 方向\n```jsx\nimport { Cell, Slider } from 'zarm';\n\nconst MARKS = {\n  0: '0°C',\n  26: '26°C',\n  65: '65°C',\n  100: '100°C',\n}\n\nReactDOM.render(\n  <Cell title=\"垂直方向\" style={{ padding: '15px 0' }}>\n    <div style={{ height: 200 }}>\n      <Slider vertical showMark marks={MARKS} />\n    </div>\n  </Cell>\n, mountNode);\n```\n\n\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| :--- | :--- | :--- | :--- |\n| value | number | - | 值 |\n| defaultValue | number | - | 初始值 |\n| min | number | 0 | 最小值 |\n| max | number | 100 | 最大值 |\n| disabled | boolean | false | 是否禁用 |\n| step | number | 1 | 步长 |\n| vertical | boolean | false | 是否为纵向 |\n| showMark | boolean | false | 是否显示标记刻度 |\n| marks | { [key: number]: React.ReactNode } | {} | 自定义标记刻度的渲染展示 |\n| onChange | (value?: number) => void | - | 值变化时触发的回调函数 |\n"}}]);