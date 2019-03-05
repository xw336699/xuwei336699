<template>
  <div>
    <div class="btntwo">
      <ul>
        <li v-for="(item,index,key) in btntwonum" :key="key" :class="{bgqies:item.selector}" @click="onchanges(index)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    props:{
      btntwonum:{
        type:Array,
        default:[{
          name:"绿色",
          value:0,
          selector:false
        }]
      }
    },
    methods: {
      onchanges (index) {
        if(this.btntwonum.every(function (item,index,array) {
          return item.selector== false
        })){
          this.btntwonum[index].selector = true
        }
        else {
          if(this.btntwonum[index].selector){
            this.btntwonum[index].selector = false
          }
          else {
            this.btntwonum[index].selector = true
          }
        }
      }
    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .btntwo li{
    list-style: none;
    display: inline-block;
    border: 1px solid #9c9c9c;
    padding: 5px 20px;
    margin: 0px 20px;
  }
  .bgqies{
    color: #f0f0f0;
    background-color: #58804F;
  }
</style>
