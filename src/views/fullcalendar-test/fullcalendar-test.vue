<template>
  <div class="fullcalendar-test">
    <el-button @click="preMonth"><i class="el-icon-arrow-left"></i></el-button>
    {{currentMonthStr}}
    <el-button @click="nextMonth"><i class="el-icon-arrow-right"></i></el-button>
    <el-button @click="refresh"><i class="el-icon-refresh"></i></el-button>
    <el-button @click="changeEventStyle">更改事件样式</el-button>
     <el-button @click="changeView">切换视图</el-button>
    <div class="calendar">
      <div id="calendar"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./fullcalendar-test.ts"></script>
<style lang="scss" scoped src="./fullcalendar-test.scss"></style>
