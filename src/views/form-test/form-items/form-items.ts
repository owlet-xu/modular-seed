import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class FormItems extends Vue {
  @Prop()
  childData!: string;
  childDataTemp = this.childData;


  changeChildData() {
    this.childDataTemp = 'rrrrrrrrrrrrr';
    this.$nextTick(() => {
        console.log('---aaa--', this.childDataTemp);
    });

  }
}
