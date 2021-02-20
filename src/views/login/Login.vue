<template>
  <div class="login">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <!-- <input type="text" @keypress="keyEnter" /> -->
    <div class="container">
      <div class="form-logo">捷报</div>
      <el-form :model="userForm">
        <el-form-item>
          <el-input
            placeholder="用户名/手机/邮箱"
            v-model="userForm.username"
            name="userName"
          >
            <template slot="prepend">
              <i class="el-icon-user icon"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            placeholder="密码"
            v-model="userForm.userpass"
            name="userpass"
            type="password"
            @change="keyEnter(userForm)"
          >
            <template slot="prepend">
              <i class="el-icon-lock icon"></i>
            </template>
          </el-input>
        </el-form-item>
        <div class="forget-pass">
          <el-checkbox
            label="两周内免登录"
            name="type"
            class="checkbox"
          ></el-checkbox>
          <a href="forgetpass">忘记密码<i class="el-icon-right"></i> </a>
        </div>
        <el-form-item class="submit">
          <!-- <a href="manage"> -->

          <el-button
            type="primary"
            class="submit-btn"
            @click="submitForm(userForm)"
          >
            登陆
          </el-button>
          <!-- </a> -->
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { getLoginUser } from "@/api/login";
export default {
  name: "Login",
  data() {
    return {
      userForm: {
        username: "",
        userpass: "",
      },
    };
  },
  methods: {
    submitForm(userForm) {
      console.log(userForm);
      if (userForm.username.length === 0 || userForm.userpass.length === 0) {
        this.$message({
          message: "账号或密码为空，请输入",
          type: "error",
        });
        return true;
      }
      getLoginUser(userForm.username, userForm.userpass).then((res) => {
        console.log(res);
        if (res.data.state === "200") {
          this.$message({
            message: "登陆成功",
            type: "success",
          });
          this.$router.push("manage");
        } else {
          this.$message({
            message: "账号或者密码错误",
            type: "error",
          });
        }
      });
    },
    keyEnter(userForm) {
      console.log("键盘事件", userForm);
      // this.submitForm(userForm);
    },
  },
};
</script>

<style  lang='less'>
.login {
  position: relative;
  width: 100wh;
  height: 100vh;
  background: #21487f;
  .logo {
    position: fixed;
    left: 50px;
    top: 20px;
  }
  .container {
    position: absolute;
    width: 300px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .form-logo {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 36px;
      text-align: center;
      color: #ffff;
      margin-bottom: 20px;
    }
    .el-input__inner {
      background: rgba(33, 72, 127, 0.1);
      color: #fff;
    }
    .el-input-group__append,
    .el-input-group__prepend {
      background: rgba(33, 72, 127, 0.1);
      color: #fff;
    }
    .icon {
      font-size: 20px;
    }
    .forget-pass {
      margin-bottom: 10px;
      color: #fff;
      .checkbox {
        color: #fff;
      }
      a {
        color: #fff;
        float: right;
        font-size: 14px;
      }
    }

    .submit {
      text-align: center;
      .submit-btn {
        width: 100%;
        a {
          color: #fff;
          font-size: 16px;
        }
      }
    }
  }
}
</style>