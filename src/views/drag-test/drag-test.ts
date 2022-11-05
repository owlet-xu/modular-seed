import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DragTest extends Vue {

  private dragInfo = {
    width: 200,
    height: 200,
    top: 0,
    left: 0
  };

  created() {
  }

  get dragStyle() {
    return `width: ${this.dragInfo.width}px;height: ${this.dragInfo.height}px;top: ${this.dragInfo.top};left: ${this.dragInfo.left}`;
  }

  dragstart(ev: any) {
    console.log('1111111');
  }

  dragover(ev: any) {
    ev.preventDefault();
  }

  drop(ev: any) {
    ev.preventDefault();
    console.log('22222222');
  }

}
