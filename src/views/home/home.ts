import { Vue, Component, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class Home extends Vue {
  @Action('setLanguage') setLanguage!: (language: any) => void;
  @Getter('language') getLanguage!: string;

  private language = '';

  created() {
    this.language = this.getLanguage;
    console.log(this.language);
  }

  languageChange(val: any) {
    this.setLanguage(val);
    this.$router.go(0);
  }

  toIncidentType() {
    this.$router.push('/incident-type');
  }

  toCalendar() {
    this.$router.push('/fullcalendar-test');
  }
}
