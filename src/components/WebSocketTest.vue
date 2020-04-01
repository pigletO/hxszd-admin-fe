<template>
<div>
  <br>Welcome<br/>
<input id="text" type="text" v-model="text"/><button @click="send()">Send</button>    <button @click="closeWebSocket()">Close</button>
<div id="message" >
    <span>{{message}}</span>
</div>
</div>
</template>
 
<script>

export default {
  name: 'WebSocketTest',
  props: ['queryId'],
  data(){
    return {
        message :'',
        text : '',
        websocket : ''
        }
    },
    methods: {
        createWebSocket: function() {
            //判断当前浏览器是否支持WebSocket
            if('WebSocket' in window){
                this.websocket = new WebSocket("ws://172.16.1.100:8070/sxtx/websocket/6773e77ae56fd850ecf76f375342ac6951");
            }
            else{
                alert('Not support websocket')
            }
        },

        
       
        // //关闭WebSocket连接
        // function closeWebSocket() {
        //     websocket.close();
        // }
        // //发送消息
        // function send() {
            
        //     websocket.send(this.text);
        // }
        
    },
    created() {
        this.createWebSocket()
    }
    // //连接关闭的回调方法
    //     websocket.onclose = function() {
    //         this.message = "WebSocket连接关闭";
    //         //setMessageInnerHTML("WebSocket连接关闭");
    //     }

    //     //连接成功建立的回调方法
    //     websocket.onopen = function(event){
    //         this.message = '连接成功';
    //     }
    //     //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    //     window.onbeforeunload = function() {
    //         closeWebSocket();
    //     }
}




</script>

<style>

</style>
