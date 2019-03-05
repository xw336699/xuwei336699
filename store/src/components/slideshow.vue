<template>
  <div class="gen"  @mouseenter="clearintr()" @mouseleave="intr()" >
    <div class="slideshow">
      <ul class="ul">
        <a :href="slides[slidesindex].href">
          <transition name="sades-old" >
          <li  v-if="!shows"><img  :src="slides[slidesindex].src"></li>
          </transition>
          <transition    name="qu" >
            <li v-if="shows"><img  :src="slides[slidesindex].src" ></li>
          </transition>
        </a>
      </ul>
      <div class="slides-title-bao">
        <h2 class="slides-title" >{{slides[slidesindex].title}}</h2>
        <ul class="slides-btn">
          <li @click="gos(prevvindex)">&lt;</li>
          <li  v-for="(item,index) in slides"  @click="gos(index)" :class="{on: index ===slidesindex}">
            <a > {{index+1}} </a>
          </li>
          <li @click="gos(nextindex)">&gt;</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gos (index) {
      this.shows = false
      setTimeout(() => {
        this.shows = true
        this.slidesindex = index
      }, 10)
    },
    intr () {
      this.invtime = setInterval(() => {
        this.gos(this.nextindex)
      }, this.invs )
    },
    clearintr () {
      clearInterval(this.invtime)
    }
  },
  mounted () {
    this.intr ()
  },
  props: {
    slides: {
      type: Array,
      default: []
    },
    invs: {
      type: Number,
      default:1000
    }
  },
 data () {
   return {
      slidesindex: 0,
     shows: true
   }
 },
  computed: {
    prevvindex () {
      if (this.slidesindex === 0) {
        return this.slides.length - 1
      }
      else {
        return this.slidesindex-1
      }
    },
    nextindex () {
      if (this.slidesindex === this.slides.length - 1) {
        return 0
      }
      else {
        return this.slidesindex + 1
      }
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.sades-old-leave-active{
  transition: all 0.5s;
  transform: translateX(-950px) ;
}
.sades-old-leave{
  transform: translateX(0px) ;
}
.qu-enter-active{
  transition: all 0.5s;
}
.qu-enter{
  transform: translateX(950px) ;
}

.ul{
  position: relative;
  width: 100%;
}
.ul li{
  position: absolute;
  width: 100%;
}
.gen{
  height: 420px;
  width: 950px;
 float: right;
  z-index: 5;
  overflow: hidden;
  position: absolute;
  right: 210px;
  top: 0px;
}
  .slideshow{
    width: 100%;
    height: 440px;
    overflow: hidden;
  }
.slideshow img{
  width: 100%;
  height: 440px;
}
.slideshow li{
  list-style: none;
}
  .slides-title{
    width: 100px;
    height: 40px;
    line-height: 40px;
    margin-left: 40px;
  }
.slides-btn{
  display: inline-block ;
}
.slides-btn{
  width: 240px;
  display: inline-block ;
  margin-right: 40px;
  position: absolute;
  right: 0px;
  top: 0px;
 height: 40px;
  line-height: 40px;
}
  .slides-btn>li{
    display: inline-block ;
    list-style: none;
    margin: 0px 10px;
  }
  .slides-title-bao{
    position: absolute;
    width: 950px;
    height: 40px;
    color: white;
    bottom: 0px;
    right: 0px;
    background-color: black;
    opacity: 0.5;
  }
  .on{
    text-decoration: underline;
    color: #58804F;
  }
</style>
