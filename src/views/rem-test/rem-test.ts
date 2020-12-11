import { Vue, Component } from 'vue-property-decorator';

@Component
export default class RemTest extends Vue {
    flag = true;
    dddd() {
        const htmlDom = document.getElementsByTagName('html')[0];
        this.flag = !this.flag;
        if (!this.flag) {
            htmlDom.style.fontSize = '12px';
        } else {
            htmlDom.style.fontSize = '16px';
        }

        window.resizeTo(100, 100);
    }
}
