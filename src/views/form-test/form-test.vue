<template>
  <div>
    父组件
    <FormItems :childData.sync="childData"></FormItems>
  </div>
</template>

<script lang="ts" src="./form-test.ts"></script>
<style lang="scss" scoped></style>