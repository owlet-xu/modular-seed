
 <template>
    <div class="drag-test">
      <div class='drag-container' @ondrop="drop" @ondragover="dragover" >
        <div class='drag-item'
             draggable='true'
             :style='dragStyle'
        @ondragstart='dragstart'></div>
      </div>
    </div>
</template>
<script lang="ts" src='./drag-test.ts'></script>
<style lang="scss" scoped src='./drag-test.scss'></style>
