<template>
      <div class="bg">
        <div class="bg-alter"  v-if="isshows" @click="closes"></div>
        <transition name="cao">
        <div class="bg-alter-content"  v-if="isshows">
          <div class="bg-alter-content-close" @click="closes">X</div>
          <div class="bg-alter-content-main">
            <slot>emit</slot>
          </div>
        </div>
        </transition>
      </div>
</template>

<script>
    export default {
      props: {
        isshows: {
          type: Boolean,
          default: false
        }
      },
       data () {
         return {
           regclose: false
         }
       },
      methods: {
        closes () {
          this.$emit("closere")
        }
      }
    }
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.cao-enter-active{
  transition: all 0.5s;
}
.cao-enter{
  transform: translateY(-800px);
}
.cao-leave-active{
  transition: all 0.3s;
  transform: translateY(-800px);
}
body {
  width: 100%;
  height: 100%;
  position: relative;
}
.bg-alter{
  position: absolute;
  width: 100%;
  height: 1000px;
  z-index: 5;
  right: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.47);
}
  .bg-alter-content{
    position: fixed;
    top: 35%;
    left: 40%;
    z-index: 6;
    width: 30%;
    height: auto;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.77);
  }
  .bg-alter-content-close{
    width: 20px;
    height: 20px;
   float: right;
    right: 0px;
    top: 0px;
  }
  .bg-alter-content-main{
    width: 100%;
    height: 80%;
    float: right;
  }
</style>
