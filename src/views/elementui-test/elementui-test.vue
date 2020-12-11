<template>
  <div class="elementui-test">
    <span class="demonstration">默认显示所有Tag</span>
    <el-cascader
      v-model="val"
      :options="options"
      :props="props"
      clearable
    ></el-cascader>
    <el-button @click="select">代码选中回填</el-button>
    <div>
       <el-button @click="openNotify">测试通知</el-button>
    </div>
    <notifyContent ref='aaaa' :aaa="aaa"></notifyContent>
  </div>
</template>

<script lang="ts" src="./elementui-test.ts"></script>
<style lang="scss" scoped src="./elementui-test.scss"></style>
