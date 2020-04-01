<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
      用户名:<input type="text" v-model="loginInfoVo.username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="loginInfoVo.password" placeholder="请输入密码" />
      <br/>
      <img class="check_code_img" :src="verifyCodeImg" @click="getVerifyCode()">
      <button v-on:click="login">登录</button>
      <br/> 
      登录验证情况：<textarea cols="30" rows="10" v-model="responseResult"></textarea>
    </div>
    <hr/>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from '@/components/common/BlogHeader.vue'
import blogFooter from '@/components/common/BlogFooter.vue'

export default {
  name: 'BlogLogin',
  // blogHeader、blogFooter组件给申明到components里面然后在template里面使用
  components: { blogHeader, blogFooter },
  data () {
    return {
      loginInfoVo: { username: '', password: '' },
      responseResult: [],
      //verifyCodeImg : 'http://localhost:8099/hxszd/getVerifyCode'
      verifyCodeImg : ''
    }
  },
  methods: {
    getVerifyCode(){
      this.$http.get("getVerifyCode",{
        params:{}
      }).then(res =>{
        console.log(JSON.stringify(res.code));
        //this.verifyCodeImg = res.data.data.checkCode
        if(res.status == 200){
          console.log(JSON.stringify(res.data.msg));
          this.verifyCodeImg = res.data.data.checkCode
        }
      }).catch({
        
      })

    },
    login () {
      if (this.loginInfoVo.username == "" || this.loginInfoVo.password == "") {
        alert("请输入用户名或密码");
        return
      } else {
        this.$http
          .post('login', {
            username: this.loginInfoVo.username,
            password: this.loginInfoVo.password
          })
          .then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data)
            if (successResponse.data.code === 200) {
              window.sessionStorage.setItem("token", "123456")
              this.$router.replace({path: '/index'})
            }
          })
          .catch(failResponse => {})
      }
    }
  },
  created(){
    this.getVerifyCode()
  }
}
</script>