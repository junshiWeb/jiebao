<template>
  <div class="header_container">
    <span class="left">
      <i class="el-icon-s-fold open-close"></i>
      <i class="el-icon-chat-dot-square inform"></i>
      <i class="el-icon-document news"></i>
    </span>
    <span class="right">
      <span>{{ newDate }}</span>
      <span>手机端二维码</span>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          赵浩宇<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <div class="user-dropdown" style="width: 350px">
            <div
              class="top"
              style="height: 60px; line-height: 60px; padding: 5px 10px"
            >
              <div class="top-left" style="float: left">四川财务会计部门</div>
              <el-button
                class="top-right"
                style="float: right; margin-top: 10px"
                >切换部门</el-button
              >
            </div>
            <div
              class="center"
              style="
                border-top: 1px solid #cccccc;
                height: 85px;
                display: flex;
                justify-content: space-around;
                align-items: center;
              "
            >
              <div
                class="center-left"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <i class="el-icon-s-custom" style="font-size: 32px"></i>
                <span>个人中心</span>
              </div>
              <div
                class="center-right"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  align-items: center;
                "
              >
                <i class="el-icon-menu" style="font-size: 32px"></i>
                <span>主页排版</span>
              </div>
            </div>
            <div
              class="buttom"
              style="
                border-top: 1px solid #cccccc;
                height: 70px;
                line-height: 70px;
                text-align: center;
              "
            >
              <el-button @click="userOut">退出登录</el-button>
            </div>
          </div>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>
import { getLoginOut } from "@/api/login";
export default {
  name: "name",
  data() {
    return {
      newDate: new Date().toLocaleDateString(),
    };
  },
  methods: {
    userOut() {
      // const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: "是否退出登录",
        customClass: "message-box-top",
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            // instance.confirmButtonLoading = true;
            // instance.confirmButtonText = "退出中...";
            getLoginOut();
            setTimeout(() => {
              this.$router.push("/");
              done();
            }, 500);
          } else {
            done();
          }
        },
      }).then(() => {
        this.$message({
          type: "info",
          message: "成功退出登录",
        });
      });
    },
  },
};
</script>

<style lang='less'>
@import "@/style/mixin";
.header_container {
  position: fixed;
  top: 0;
  right: 0;
  width: 87.5%;
  z-index: 100;
  height: 60px;
  line-height: 60px;
  background: #ffffff;
  border-bottom: 1px solid #cccccc;
  box-shadow: 0 2px 1px #eeeeee;
  .left {
    font-size: 32px;
    margin: 0 15px;
  }
  i {
    padding: 0 10px;
  }
  .right {
    color: #999999;
    span {
      padding: 0 15px;
    }
    .user-dropdown {
      width: 350px;
    }
  }
}
</style>