<template>
  <div id="resouce">
    <div class="store-header">
      <router-link to="/">
        <div class="store-header-logo"><img src="../images/store-logo.png" alt="请稍等……" ></div>
      </router-link>
      <ul class="store-header-btn">
        <li @click="registrs"   v-if="!insertnum">注册&nbsp;&nbsp;&nbsp;&nbsp;&#124;</li>
        <li    v-if="insertnum">{{username}}&nbsp;&nbsp;&nbsp;&#124;</li>&nbsp;
        <li @click="logins" v-if="!insertnum">登陆&nbsp;&nbsp;&nbsp;&nbsp;&#124;</li>
        <li  v-if="insertnum">退出&nbsp;&nbsp;&nbsp;&nbsp;&#124;</li>
        <li @click="abouts">关于</li>&#124;&nbsp;&nbsp;&nbsp;&nbsp;
      </ul>
    </div>
    <div class="store-content">
      <keep-alive>
        <router-view ></router-view>
      </keep-alive>
    </div>
    <div class="store-footer">
      <div class="store-footer-content">
          &copy; 2019fishenal MIT
      </div>
    </div>
    <Registr :isshows="loginnum"  @closere="close('loginnum')">
      <LoginHt @inserts="insertfuc"></LoginHt>
    </Registr>
    <Registr :isshows="registrsnum"  @closere="close('registrsnum')">
      <RegistrHt></RegistrHt>
    </Registr>
    <Registr :isshows="aboutnum"  @closere="close('aboutnum')">
      <p class="about-content">关于新科技的发展途径和未知技术的革新与命令的新技术的改变
         ，关系到未来几年人们生活的走向。所以在此之前，我们以非盈利
        练习为目的来提高技术，达到技术攻克要求，发展要求，很顺利的
        进入一线行业，引领潮流的导向！
      </p>
    </Registr>
  </div>
</template>
<script>
import Registr from './registr'
import LoginHt from './loginht'
import RegistrHt from './registrht'
export default {
  components: {
    Registr,
    LoginHt,
    RegistrHt
  },
  methods: {
    registrs () {
      this.registrsnum = true
    },
    logins () {
      this.loginnum = true
    },
    abouts () {
      this.aboutnum = true
    },
    insertfuc (values) {
      this.insertnum = values[0]
      this.username = values[1]
      this.close()
    },
    close (attr) {
      this[attr] = false
      this.loginnum= false
      this.registrsnum= false
      this.aboutnum= false
    }
  },
  data () {
    return {
      registrsnum: false,
      loginnum: false,
      aboutnum: false,
      insertnum:false,
      usrnume: ""
    }
  }
}
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  html,body{
    font-size: 12px;
  }
  #resouce{
    width: 100%;
    height: 100%;
    z-index: -10;
    background-color: #e9f2e8;
  }
.store-header{
  background-color: #3c3c3c;
  height: 90px;
  width: 100%;
  overflow: hidden;
}
.store-header-logo{
  width: 80px;
  margin-left: 300px;
  float: left;
  color: white;
}
.store-header-logo>img{
    width: 100%;
    height: 100%;
}
.store-header-btn{
  height: 90px;
  line-height: 90px;
  margin-right: 300px;
  float: right;
  color: #c9c9c9;
}
.store-header-btn>li{
  list-style: none;
  display: inline-block;
  margin-right: 20px;
}
  .store-footer{
    width: 100%;
    height: 90px;
    background-color: #e3e3e3;
  }
  .store-footer-content{
    width: 160px;
    height: 90px;
    line-height: 90px;
    color: #767676;
    margin: 0 auto;
  }
  .about-content{
    color: #333333;
    margin: 30px 50px;
  }
</style>
