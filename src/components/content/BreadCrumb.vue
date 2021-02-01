<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/manage' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{
      item
    }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "breadcrumb",
};
</script>

<style lang='less'>
.el-breadcrumb {
  line-height: 30px;
  padding: 0 15px;
  height: 30px;
  margin-bottom: 30px;
  background: #f5f5f5;
  border-radius: 5px;
}
</style>