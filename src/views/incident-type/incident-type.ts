import { Vue, Component } from 'vue-property-decorator';
import IncidentTypeService from '@/api/incident-type-service';

@Component
export default class IncidentType extends Vue {
  private title = 'IncidentType.Title';

  created() {
    this.getList();
  }

  getList() {
    IncidentTypeService.getIncidentType().then((res: any) => {
      console.log(res);
    });
  }

  getTreeData() {

  }
}
