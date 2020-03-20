<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
    <p>{{queryId}}</p>
    <input type="text" v-model="queryId" v-bind:querId="queryId" placeholder="查询id"/>
    <button @click="getTLine(queryId)" >查询</button>
    <button @click="getTLineAll()" >查询全部</button>
  <div id="app">{{lineInfo}}</div>
  <p v-bind="lineInfoList" v-for="line in lineInfoList">{{line}}</p>
    <!-- <ol>
      <li v-bind="lineInfoList" v-for="line in lineInfoList">
       {{ line }}
      </li>
    </ol> -->
  <div>
    <span v-bind:title="nowTime">提示信息</span>
  </div>

  <div>
    <span>{{longString}}</span>
    <button @click="stringReverse()">字符反转</button>
  </div>
  <test-component></test-component>
  </div>
  <!-- <Test-component></Test-component> -->
  
</template>


<script>
import TestComponent from '@/components/TestCompent.vue'

export default {
  name: 'HelloWorld',
  components : {TestComponent},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      code : 200,
      message : "信息123",
      lineInfo :"",
      lineInfoList : [],
      nowTime : "2020年3月19日18:20:01",
      queryId : '',
      longString : "abcd efg hijk"
    }
  },methods :{
    getTLine : function(queryId){
      this.$http.get("/get/" + queryId)
      .then(Response => {
        this.code = Response.data.code,
        this.message = Response.data.message,
        this.lineInfo = JSON.stringify(Response.data.data)
      })},
    getTLineAll : function(){
      this.$http.get("/getAll")
      .then(Response => {
        this.code = Response.data.code,
        this.message = Response.data.message,
        this.lineInfoList = JSON.stringify(Response.data.data)
      })},
    stringReverse : function(){
      console.log("1111")
      this.longString = this.longString.split("").reverse().join("")
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
