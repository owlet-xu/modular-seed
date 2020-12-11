
 <template>
  <div class="transition-test">
    <el-button @click="showClick">进入动画</el-button>
    <h1 class="animated infinite pulse delay-2s">Example</h1>
    <transition enter-active-class="animated fadeInLeft">
      <div v-if="show">dfasfsdafsdafd</div>
    </transition>
  </div>
</template>
<script lang="ts" src='./transition-test.ts'></script>
<style lang="scss" scoped src="./transition-test.scss"></style>
