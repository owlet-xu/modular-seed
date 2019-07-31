/**
 * 日历组件需要安装一下包
 * @fullcalendar/core
 * @fullcalendar/daygrid
 * @fullcalendar/interaction
 * @fullcalendar/timegrid
 */
import { Vue, Component } from 'vue-property-decorator';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import timegrid from '@fullcalendar/timegrid';
// 日历的样式
import '@fullcalendar/core/main.min.css';
import '@fullcalendar/daygrid/main.min.css';
import '@fullcalendar/timegrid/main.min.css';

import DateFns from 'date-fns';

@Component
export default class FullCalendarTest extends Vue {
  private calendar!: Calendar;
  private currentMonth: Date = new Date();
  private calendarViewType = 1;
  private eventSources: any[] = [
    {
      events: [
        {
          title: 'event1',
          start: '2019-06-01',
          allDay: false
        },
        {
          title: 'event2',
          start: '2019-05-02 12:00',
          end: '2019-05-02 14:00',
          allDay: false
        }
      ],
      color: 'black', // an option!
      textColor: 'yellow' // an option!
    }
  ];

  mounted() {
    const calendarEl: any = document.getElementById('calendar');
    this.calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, interaction, timegrid],
      defaultView: 'dayGridMonth',
      selectable: true,
      unselectAuto: false,
      eventLimit: true,
      header: false,
      eventRender: this.eventRender,
      dayRender: this.dayRender,
      height: 'parent'
    });
    // this.calendar.addEventSource({
    //   events: [{
    //     start: '2019-07-09 11:00',
    //     end: '2019-07-09 14:00',
    //     title: 'aaaa',
    //     allDay: false
    //   }]
    // });

    setTimeout(() => {
      this.calendar.render();
      this.calendar.setOption('height', 'parent');
    }, 1000);
  }

  get currentMonthStr() {
    return DateFns.format(this.currentMonth, 'YYYY-MM');
  }

  preMonth() {
    this.calendar.prev();
    this.currentMonth = this.calendar.getDate();
  }

  nextMonth() {
    this.calendar.next();
    this.currentMonth = this.calendar.getDate();
  }

  refresh() {
    this.currentMonth = new Date();
    this.calendar.gotoDate(this.currentMonth);
  }

  eventRender(args: any) {
    args.el.innerText = 'dddddd';
    args.el.innerHTML = '<span style="color:red">bbbbbb</span>';
  }

  dayRender(args: any) {
    args.el.innerText = 'dddddd';
    args.el.innerHTML = `
    <div style="width: 100%;height: 100%">
    <div style="color:red">aaaa</div><div style="color:red">bbb</div><div style="color:red">aaaa</div><div style="color:red">bbb</div>
    <div style="color:red">aaaa</div><div style="color:red">bbb</div><div style="color:red">aaaa</div><div style="color:red">bbb</div>
    </div>
    `;
  }

  changeView() {
    let viewStr = '';
    switch (this.calendarViewType) {
      case 1:
        this.calendarViewType = 2;
        viewStr = 'dayGridWeek';
        break;
      case 2:
        this.calendarViewType = 3;
        viewStr = 'dayGridDay';
        break;
      case 3:
        this.calendarViewType = 1;
        viewStr = 'dayGridMonth';
        break;
      default:
        break;
    }
    this.calendar.changeView(viewStr);
  }
}
