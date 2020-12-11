import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class NotifyContent extends Vue {
  @Prop({ default: 'a' })
  private aaa!: string;

  created() {}
}
