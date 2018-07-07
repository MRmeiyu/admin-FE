<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        user: '',
        pad: ''
      }
    };
  },
  methods: {
    /**
     * @description 提交表单
    */
    submitForm () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log('成功');
          window.location.href = '/#/';
        } else {
          console.log('失败');
          return false;
        }
      });
    }
  }
};
</script>

<template>
  <div class="login">
    <el-row class="login-window flex flex--center">
        <el-form
          :model="loginForm"
          ref="loginForm"
          class="demo-ruleForm"
        >
          <el-form-item
            prop="user"
            :rules="[
              { required: true, message: '用户名不能是空'},
            ]"
          >
            <el-input
              v-model.trim="loginForm.user"
              auto-complete="off"
            >
              <i slot="prefix" class="el-icon-circle-plus"></i>
            </el-input>
          </el-form-item>
          <el-form-item
            prop="psd"
            :rules="[
              { required: true, message: '密码不能是空'},
            ]"
          >
            <el-input
              v-model.trim="loginForm.psd"
              auto-complete="off"
            >
              <i slot="prefix" class="el-icon-circle-plus"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              class="submit-btn"
              type="primary"
              @click="submitForm"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
    </el-row>
  </div>
</template>

<style lang="scss">
.login {
  background-image: url('../../../assets/images/bg.png');
  background-size: 100%;
  .login-window {
    height: 100vh;
    .el-input {
      max-width: none;
      input {
        width: 300px;
        height: 36px;
        border-radius: 0;
        border-top: none;
        border-left: none;
        border-right: none;
      }
    }
    .submit-btn {
      width: 150px;
      height: 36px;
      font-size: 20px;
      line-height: 0.6;
    }
  }
}
</style>
