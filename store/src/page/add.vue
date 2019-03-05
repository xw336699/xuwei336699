<template>
  <div class="adds">
    <button @click="minus">-</button><input type="text" v-model="numbers"    @keyup="number" ><button @click="add" >+</button>
  </div>
</template>

<script>
    export default {
        data ()  {
          return {
            numbers:1
          }
        },
      methods: {
          add () {
            this.numbers+=1
          },
          minus () {
            if(this.numbers<=1){
              this.numbers=1
            }
            else {
              this.numbers-=1
            }
          },
        number () {
          if(/^\d{2,4}$/g.test(this.numbers)){
            return this.numbers
          }
          else {
            return this.numbers=20
          }
        }
      },
      watch: {
          numbers:function () {
            console.log(2)
            this.$emit("onchange",this.numbers)
          }
      }
    }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

 .adds input{
   width: 60px;
   height: 28px;
   outline: none;
   border-left: transparent ;
   border-right: transparent ;
   border-top: 1px solid #c2c2c2;
   border-bottom: 1px solid #c2c2c2;
   text-align: center ;
 }
.adds button {
  width: 30px;
  height: 30px;
  border: 1px solid #c2c2c2;
  background-color: white;
  outline: none;
}
.adds button:hover {
  background-color: #dfdfdf;
}
.adds button:active {
  background-color: #f3f3f3;
}
</style>
