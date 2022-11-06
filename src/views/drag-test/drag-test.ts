import { Component, Vue } from 'vue-property-decorator';
import { DragItem } from '@/models/drag-item';

/**
 * 参考：https://segmentfault.com/a/1190000014572113
 * https://blog.csdn.net/BDawn/article/details/114374460
 * https://segmentfault.com/a/1190000038615186
 */
@Component
export default class DragTest extends Vue {

  private dragInfos: DragItem[] = [];
  private itemSelected!: DragItem;
  clientX = 0;
  clientY = 0;
  // div可修改的最小宽高
  minW = 8;
  minH = 8;


  getDragStyle(item: DragItem) {
    return `width: ${item.width}px;height: ${item.height}px;top: ${item.positionX};left: ${item.positionY}`;
  }

  // 鼠标点击需要移动的方块
  mousedown(e: any, item: DragItem) {
    this.itemSelected = item;
    const odiv = e.target;        //获取目标元素

    //算出鼠标相对元素的位置
    let disX = e.clientX - odiv.offsetLeft;
    let disY = e.clientY - odiv.offsetTop;
    // 鼠标按下并移动的事件
    document.onmousemove = (ev) => {
      // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
      let left = ev.clientX - disX;
      let top = ev.clientY - disY;

      //绑定元素位置到positionX和positionY上面
      item.positionX = left;
      item.positionY = top;

      //移动当前元素
      odiv.style.left = left + 'px';
      odiv.style.top = top + 'px';
    };

    document.onmouseup = (ev) => {
      this.isRemoveArea(this.itemSelected);
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  // 鼠标点击缩放的按钮
  mousedownResize(e: any, item: DragItem) {
    this.itemSelected = item;
    const odiv: any = document.getElementById(item.id);
    if (!odiv) {
      return;
    }
    this.itemSelected.direc = this.getDirection(e);
    // 当位置为四个边和四个角时才开启尺寸修改
    if (this.itemSelected.direc !== '') {
      this.itemSelected.resizeable = true;
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    }
    // 鼠标按下并移动的事件
    document.onmousemove = (ev) => {
      // 当开启尺寸修改时，鼠标移动会修改div尺寸
      if (this.itemSelected.resizeable) {
        // 鼠标按下的位置在右边，修改宽度
        if (this.itemSelected.direc.indexOf('e') !== -1) {
          this.itemSelected.width = Math.max(this.minW, odiv.offsetWidth + (ev.clientX - this.clientX));
          odiv.style.width =  this.itemSelected.width + 'px';
          this.clientX = ev.clientX;
        }

        // 鼠标按下的位置在上部，修改高度
        if (this.itemSelected.direc.indexOf('n') !== -1) {
          this.itemSelected.height = Math.max(this.minH, odiv.offsetHeight + (this.clientY - ev.clientY));
          console.log(this.itemSelected.height);
          odiv.style.height =  this.itemSelected.height + 'px';
          this.clientY = ev.clientY;
        }
        // 鼠标按下的位置在底部，修改高度
        if (this.itemSelected.direc.indexOf('s') !== -1) {
          this.itemSelected.height = Math.max(this.minH, odiv.offsetHeight + (ev.clientY - this.clientY));
          odiv.style.height = this.itemSelected.height + 'px';
          this.clientY = ev.clientY;
        }

        // 鼠标按下的位置在左边，修改宽度
        if (this.itemSelected.direc.indexOf('w') !== -1) {
          this.itemSelected.width = Math.max(this.minW, odiv.offsetWidth + (this.clientX - ev.clientX));
          odiv.style.width =  this.itemSelected.width + 'px';
          this.clientX = ev.clientX;
        }
      }
    };

    document.onmouseup = (ev) => {
      this.itemSelected.resizeable = false;
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }

  addItem() {
    const item = new DragItem();
    item.id = this.dragInfos.length + 1 + '-id';
    item.positionX = 200 * this.dragInfos.length;
    item.positionY = 0;
    this.dragInfos.push(item);
  }

  isRemoveArea(item: DragItem) {
    const dom: any = document.getElementById('removeArea');
    console.log(dom.offsetLeft, dom.offsetTop);
    console.log(dom.offsetHeight, dom.offsetWidth);
    console.log(dom.getBoundingClientRect().left, dom.getBoundingClientRect().top);
    const x1 = dom.offsetLeft;
    const x2 = x1 + dom.offsetWidth;
    const y1 = dom.offsetTop;
    const y2 = y1 + dom.offsetHeight;
    if (item.positionX > x1 && item.positionX < x2) {
      if (item.positionY > y1 && item.positionY < y2) {
        console.log('拖动到垃圾桶');
        this.dragInfos = this.dragInfos.filter((item2) => {
          return item2.id !== item.id;
        });
      }
    }
  }

  // 获取鼠标所在div的位置
  getDirection(ev: any) {
    let dir = '';
    if (ev.target.className.indexOf('top') >= 0) {
      dir += 'n';
    } else if (ev.target.className.indexOf('bottom') >= 0) {
      dir += 's';
    }
    if (ev.target.className.indexOf('left') >= 0) {
      dir += 'w';
    } else if (ev.target.className.indexOf('right') >= 0) {
      dir += 'e';
    }
    return dir;
  }
}
