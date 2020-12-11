import { Vue, Component } from 'vue-property-decorator';
@Component
export default class TransitionTest extends Vue {
  show = true;
  showClick() {
    this.show = !this.show;
  }
}
