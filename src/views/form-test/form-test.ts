import { Vue, Component } from 'vue-property-decorator';
import FormItems from './form-items/form-items';

@Component({
    components: {
        FormItems
    }
})
export default class FormTest extends Vue {
    childData = 'aaaa';
}
