<template>
  <div class="fonts">
    <div class="right-title" @click="qiehuan" >
      <span >{{btnnum[indexnum].name}}</span>
      <div class="right-dui"></div>
    </div>
    <div class="right-content" v-if="closes">
    <ul class="ulbtn" >
      <li v-for="(item,index) in btnnum" @click=" pushnum(index,item.value,item.name)" >{{item.name}}</li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
       data () {
         return {
            indexnum:0,
           closes:false
         }
       },
        props:{
         btnnum:{
           type:Array,
           default:[{
             name:"初级",
             value:0
           }]
         }
        },
    methods: {
         pushnum (index,value,name) {
           this.indexnum = index
           this.closes = false
           this.$emit("on-change",[value,name])
         },
        qiehuan () {
          this.closes = !this.closes
        }
    }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.fonts {
  display: inline-block;
}
.right-title{
  border: 1px solid #cbcbcb;
  position: relative;
  overflow: hidden;
  border-radius: 2px;
  background-color: #ffffff;
  width: 80px;
  height: auto;
  padding-left: 10px;
}
.right-dui{
  position: absolute;
  right: 10px;
  top: 5px;
  border-top: 12px solid #c4c4c4;
  border-right:  8px solid transparent;
  border-left:  8px solid transparent;
}
.ulbtn{
  position: absolute;
}
  .ulbtn li{
    list-style: none;
    width: 80px;
    padding-left: 10px;
    border: 1px solid #cbcbcb;
    background-color: white;
    border-top:1px solid transparent;
  }
.ulbtn li:hover {
  background-color: #d5d5d5;
}
</style>
