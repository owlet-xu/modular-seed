import { Vue, Component } from 'vue-property-decorator';

@Component
export default class ElementuiTest extends Vue {
  val: any = [];
  props = { checkStrictly: true };
  options = [
    {
      value: 'a',
      label: '东南',
      children: [
        {
          value: 'a1',
          label: '上海',
          children: [{ value: 'a11', label: '普陀' }, { value: 'a12', label: '黄埔' }]
        },
        {
          value: 'a2',
          label: '江苏',
          children: [{ value: 'a21', label: '南京' }, { value: 'a22', label: '苏州' }]
        },
        {
          value: 'a3',
          label: '浙江',
          children: [{ value: 'a31', label: '杭州' }, { value: 'a32', label: '宁波' }]
        }
      ]
    }
  ];

  select() {
    this.val = [];
    this.val = ['a', 'a3', 'a32'];
  }
}
