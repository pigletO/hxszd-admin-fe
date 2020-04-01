<template>
  <div>
    <blog-header></blog-header>
    <hr/>
    <div>
      这是首页，嘻嘻嘻。
       用户名:<input type="text" v-model="username" placeholder="请输入用户名" />
      <br/>
      密码：<input type="password" v-model="password" placeholder="请输入密码" />
    </div>
    <hr/>
    <blog-footer></blog-footer>
  </div>
</template>

<script>
import blogHeader from '@/components/common/BlogHeader.vue'
import blogFooter from '@/components/common/BlogFooter.vue'
import blogLogin from '@/components/BlogLogin.vue'


export default {
  name: 'BlogIndex',
  // blogHeader/blogFooter组件给申明到components里面然后在template里面使用
  components: { blogHeader, blogFooter },
  data(){
    return {

    }
  },
  methods : {
    getCheckCode(){

    }

  },
  created(){

  }
}
</script>