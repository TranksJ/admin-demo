<template>
  <div class="loginConter">
    <div class="login">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
      >
        <el-form-item prop="name">
          <el-input
            v-model="ruleForm.name"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item prop="checkPwd">
          <el-input v-model="ruleForm.pwd" placeholder="请输入密码"></el-input>
        </el-form-item>
        <div class="imgItem">
          <el-form-item prop="img">
            <el-input
              v-model="ruleForm.pwd"
              placeholder="请输入验证码"
            ></el-input>
          </el-form-item>
          <div class="divIdentifyingCode" @click="getIdentifyingCode()">
            <img
              id="imgIdentifyingCode"
              v-if="imgNum"
              :src="imgNum"
              alt="点击更换"
              title="点击更换"
            />
          </div>
        </div>
        <el-form-item>
          <el-button type="primary" class="doLogin" @click="doLogin">登陆</el-button>
        </el-form-item>
        <div class="switchItem">
          <span>忘记密码?</span>
          <span>立即注册》</span>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var checkPwd = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("密码不能为空"));
      } else {
        callback();
      }
    };
    var checkImg = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("验证码不能为空"));
      } else {
        callback();
      }
    };
    return {
      imgph: "http://localhost/login/captcha?v=",
      imgNum: "",
      ruleForm: {
        name: "",
        pwd: "",
      },
      rules: {
        name: [{ validator: checkName, trigger: "blur" }],
        checkPwd: [{ validator: checkPwd, trigger: "blur" }],
        img: [{ validator: checkImg, trigger: "blur" }],
      },
    };
  },
  methods: {
    getIdentifyingCode() {
      this.imgNum = this.imgph + Math.random();
    },
    doLogin(){
      this.$router.push('/home')
    }
  },
  mounted() {
    this.getIdentifyingCode();
  },
};
</script>
<style lang="less" scoped>
.loginConter {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  position: relative;
}
.login {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 400px;
  border: 1px solid #dddddd;
  border-radius: 5px;
  background-color: #ffffff;
  box-sizing: border-box;
  padding: 20px;
}
.switchItem{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
}
.switchItem span{
  cursor: pointer;
}
.switchItem span:nth-child(2){
  color: #409EFF;
}
.imgItem {
  display: flex;
  width: 100%;
  height: 40px;
  margin-bottom: 44px;
}
#imgIdentifyingCode {
  height: 40px;
  width: 100px;
  cursor: pointer;
}
.divIdentifyingCode {
  width: 100px;
  height: 40px;
  margin-left: 20px;
}
.doLogin {
  width: 100%;
}
</style>
