<template>
  <div><p>TestComponent</p>{{queryId}}</div>
</template>
 
<script>

export default {
  name: 'TestComponent',
  props: ['queryId'],
  data(){
    return {
        // queryId : ''
        }
    }
}


</script>

<style>

</style>
