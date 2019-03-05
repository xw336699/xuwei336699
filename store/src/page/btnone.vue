<template>
  <div>
    <div class="btnone">
      <ul>
        <li v-for="(item,index) in btnonenum" :class="{bgqie:item.selector}" @click="onchange(index,item.value,item.name)">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
       data () {
         return {
            btnonear:0,
         }
       },
      props:{
        btnonenum:{
          type:Array,
          default:[{
            name:"绿色",
            value:0
          }]
        }
      },
      methods: {
         onchange (index,value,name) {
           if(this.btnonenum.every(function (item,index,array) {
             return item.selector == false
           })){
             this.btnonenum[index].selector = true
             this.$emit("changeone",[value,name])
           }
           else {
             for(let i=0; i<this.btnonenum.length; i++ ){
               this.btnonenum[i].selector = false
             }
             this.btnonenum[index].selector = true
             this.$emit("changeone",[value,name])
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
.btnone li{
  list-style: none;
  display: inline-block;
  border: 1px solid #9c9c9c;
  padding: 5px 20px;
  margin: 0px 10px;
  height: 25px;
  line-height: 25px;
}
  .bgqie{
    color: #f0f0f0;
    background-color: #58804F;
  }
</style>
