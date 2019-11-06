<template>
  <div>
    <h1>{{$t('Home.HomePage')}}</h1>
    <el-radio-group
      v-model="language"
      @change="languageChange"
    >
      <el-radio label="en">{{$t('Home.LanguageEnglish')}}</el-radio>
      <el-radio label="zh">{{$t('Home.LanguageChinese')}}</el-radio>
    </el-radio-group>
    <div>
      <el-button @click="toIncidentType">{{$t('Home.RoutePush')}}</el-button>
      <el-button @click="toCalendar">日历组件测试</el-button>
      <el-button @click="toElementUiTest">elementUi测试</el-button>
       <el-button @click="toFormTest">form表单数组绑定测试</el-button>
    </div>
  </div>
</template>

<script lang="ts" src="./home.ts"></script>

<style lang="scss" scoped></style>


