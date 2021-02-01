<template>
  <el-tabs v-model="activeName" @tab-click="handleClick" class="tasks-tabs">
    <el-tab-pane label="申请单待办" name="first">
      <sq-wait-task></sq-wait-task>
    </el-tab-pane>
    <el-tab-pane label="报销单待办" name="second">
      <bx-wait-task></bx-wait-task>
    </el-tab-pane>
    <el-tab-pane label="在途单据" name="third">
      <transit-task></transit-task>
    </el-tab-pane>
  </el-tabs>
</template>
<script>
import SqWaitTask from "./children/SqWaitTask";
import BxWaitTask from "./children/BxWaitTask";
import TransitTask from "./children/TransitTask";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  components: {
    SqWaitTask,
    BxWaitTask,
    TransitTask,
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped lang='less'>
.tasks-tabs {
  margin: 0 25px;
}
</style>