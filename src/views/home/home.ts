import { Vue, Component, Watch } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';

@Component
export default class Home extends Vue {
  @Action('setLanguage') setLanguage!: (language: any) => void;
  @Getter('language') getLanguage!: string;

  private language = '';
  private theme = 'dark';

  created() {
    this.language = this.getLanguage;
    console.log(this.language);
  }

  languageChange(val: any) {
    this.setLanguage(val);
    this.$router.go(0);
  }

  changeThemes() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
    window.document.documentElement.setAttribute('data-theme', this.theme);
  }

  toIncidentType() {
    this.$router.push('/incident-type');
  }

  dragTest() {
    this.$router.push('/drag-test');
  }

  toCalendar() {
    this.$router.push('/fullcalendar-test');
  }

  toElementUiTest() {
    this.$router.push('/elementui-test');
  }

  toFormTest() {
    this.$router.push('/form-test');
  }

  toElectronWebViewTest() {
    this.$router.push('/electron-webview-test');
  }

  toXlsxTest() {
    this.$router.push('/xlsx-test');
  }

  toXlsxStyleTest() {
    this.$router.push('/xlsx-style-test');
  }

  toRemTest() {
    this.$router.push('/rem-test');
  }

  toTransitionTest() {
    this.$router.push('/tansition-test');
  }
}
