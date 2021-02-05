<template>
  <!-- 事件 -->
  <div class="billno-event">
    <!-- <el-button @click="prop">test</el-button> -->
    <el-button
      size="small"
      v-for="btn in buttonList"
      :key="btn.label"
      :type="btn.type"
      @click="btn.eventName"
    >
      {{ btn.label }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "event",
  created() {
    // console.log(this);
  },
  props: {
    buttonList: {
      type: Array,
      default() {
        return [
          {
            type: "primary",
            label: "提交",
            eventName: () => {
              this.$emit("formSubmit", "子组件");
            },
          },
          {
            type: "",
            label: "保存",
            eventName: () => {
              this.$emit("formSave", "子组件");
            },
          },
          {
            type: "",
            label: "删除",
            eventName: () => {
              this.$emit("formDelete", "子组件");
            },
          },
        ];
      },
    },
  },
  methods: {
    prop() {
      console.log("子组件触发了");
      this.$emit("testChange");
    },
  },
};
</script>

<style scoped lang='less'>
.billno-event {
  text-align: center;
}
</style>