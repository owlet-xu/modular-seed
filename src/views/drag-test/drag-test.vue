<template>
  <div class='drag-test'>
    <div id='dragContainer' class='drag-container'>
      <div v-for='item in dragInfos'
           @mousedown='mousedown($event, item)'
           :id='item.id'
           class='drag-item'  :style='getDragStyle(item)'>
        位置：
        left: {{ item.left }}
        top: {{ item.top }}
        id: {{item.id}}
        长宽：
        height: {{ item.height }}
        width: {{ item.width }}
        <div class="point top"  @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point left" @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point right" @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point bottom" @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point top-left" @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point top-right" @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point bottom-left" @mousedown.stop='mousedownResize($event, item)'></div>
        <div class="point bottom-right" @mousedown.stop='mousedownResize($event, item)'></div>
      </div>
    </div>
    <div class='drag-tools'>
      <div id='removeArea' class='remove-area' draggable='true' @click='isRemoveArea'>垃圾箱</div>
      <div class='drag-sample' draggable='true' @click='addItem'>拖动我</div>
    </div>
  </div>
</template>
<script lang='ts' src='./drag-test.ts'></script>
<style lang='scss' scoped src='./drag-test.scss'></style>
