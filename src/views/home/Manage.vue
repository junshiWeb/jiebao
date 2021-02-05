<template>
  <div class="manage_page fillcontain">
    <el-row style="height: 100vh">
      <el-col
        :span="3"
        style="height: 100vh; background-color: #324057"
        class="sidebar-container"
      >
        <el-menu
          :default-active="defaultActive"
          style="min-height: 100%; border: 0"
          theme="dark"
          background-color="#2a303e"
          text-color="#999"
          router
          @open="handleOpen"
          @close="handleClose"
        >
          <el-menu-item index="manage"
            ><i class="el-icon-menu"></i>ECU首页</el-menu-item
          >
          <el-submenu index="2">
            <template slot="title"
              ><i class="el-icon-document"></i>电子交接</template
            >
            <el-menu-item index="paperconnect">纸质单据交接</el-menu-item>
            <el-menu-item index="paperexit">纸质单据退回</el-menu-item>
            <el-menu-item index="paperstatement">单据交接报表</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-plus"></i>预算管理</template
            >
            <el-menu-item index="budgetreport">预算报表</el-menu-item>
            <el-menu-item index="bugetdetail">预算明细</el-menu-item>
            <el-menu-item index="bugetentey">预算录入</el-menu-item>
            <el-menu-item index="control">控制策略</el-menu-item>
            <el-menu-item index="budgetreportsearch">预算查询报表</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"
              ><i class="el-icon-star-on"></i>信息中心</template
            >
            <el-menu-item index="notifycenter">通知中心</el-menu-item>
            <el-menu-item index="notifyrecord">通知记录</el-menu-item>
          </el-submenu>
          <el-menu-item index="fybxinfo">
            <i class="el-icon-menu"></i>
            <span slot="title">费用报销</span>
          </el-menu-item>
          <el-menu-item index="Gtasks">
            <i class="el-icon-menu"></i>
            <span slot="title">待办任务</span>
          </el-menu-item>
          <el-menu-item index="Mytasks">
            <i class="el-icon-menu"></i>
            <span slot="title">我的单据</span>
          </el-menu-item>
          <el-submenu index="8">
            <template slot="title"
              ><i class="el-icon-setting"></i>分析报表</template
            >
            <el-menu-item index="adminSet">审核时效报表</el-menu-item>
            <el-menu-item index="adminSet">费用报销情况说明数据表</el-menu-item>
            <el-menu-item index="adminSet">费用申请发生关系</el-menu-item>
            <el-menu-item index="adminSet">费用查询表</el-menu-item>
            <el-menu-item index="adminSet">申请单跟踪表</el-menu-item>
            <el-menu-item index="adminSet">系统单据</el-menu-item>
            <el-menu-item index="adminSet">网上检查表</el-menu-item>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title"
              ><i class="el-icon-warning"></i>更多</template
            >
            <el-menu-item index="explain">待认证发票清单</el-menu-item>
            <el-menu-item index="explain">待打印单据</el-menu-item>
            <el-menu-item index="explain">已打印单据列表</el-menu-item>
            <el-menu-item index="explain">预算释放</el-menu-item>
            <el-menu-item index="explain">任务委托</el-menu-item>
          </el-submenu>
          <el-menu-item index="Ytasks">
            <i class="el-icon-menu"></i>
            <span slot="title">已办任务</span>
          </el-menu-item>
          <el-menu-item index="11">
            <i class="el-icon-menu"></i>
            <span slot="title">付款失败</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col
        :span="21"
        style="height: 100%; overflow: auto; background: #e9e9eb"
      >
        <head-top></head-top>
        <div style="margin: 15px 15px 0">
          <bread-crumb></bread-crumb>

          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeadTop from "@/components/content/HeadTop";
import BreadCrumb from "@/components/content/BreadCrumb";
export default {
  computed: {
    defaultActive: function () {
      console.log(this.$route.path);
      return this.$route.path.replace("/", "");
    },
  },
  data() {
    return {
      isCollapse: true,
    };
  },
  components: {
    HeadTop,
    BreadCrumb,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>


<style lang="less" >
// @import "../style/mixin";
.manage_page {
  border: 0;
}
.el-submenu__title,
.el-menu-item {
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
}
.sidebar-container {
  overflow-x: hidden;
  overflow-y: scroll;
  // &::-webkit-scrollbar {
  //   display: none;
  // }
  &::-webkit-scrollbar-track {
    border-radius: 5px;
    background-color: #222632;
  }

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 15px;
    background-color: #0082ff;
  }
}
</style>
