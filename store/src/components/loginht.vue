<template>
    <div class="form">
        <div class="form-usr">
          <span>用户名：</span>
          <input type="text" v-bind:value="usrnums" v-on:input="usrnums=$event.target.value" placeholder="请输入用户名"   />
        </div>
        <div class="form-password"  >
          <span>密&nbsp;&nbsp;&nbsp;码：</span>
          <input type="password" v-bind:value="passwordnum" v-on:input="passwordnum=$event.target.value"  placeholder="请输入密码" />
        </div>
      <div  class="resgbtn">
        <button class="btn" @click.self="reg">登陆</button>
      <span v-if="tishi" class="tinum">*用户名或密码错误！</span>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      usrnums: '',
      passwordnum: '',
      tishi: false 
    }
  },
  methods: {
    reg () {
      return  this.$http.get('api/user').then((res) => {
        var usrnums=this.usrnums
        var passwordnum=this.passwordnum
        this.tishi=res.data.name.some(function (item,index,array) {
          return  usrnums=== item
        })
        this.tishi=this.tishi&&res.data.password.some(function (item,index,array) {
          return  passwordnum=== item
        })
        console.log("登陆成功！")
        this.$emit("inserts",[this.tishi,usrnums])
        this.tishi=!this.tishi
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  .form{
    color: #404040;
  }
  .form span {
    width: 80px;
    display: inline-block;
    text-align: right  ;
    height: 100%;
  }
  .form-usr,.form-password{
    margin: 20px 30px;
  }
  .btn{
    margin: 0px 30px;
    margin-bottom: 20px;
    display: inline-block;
    width: 80px;
    height: 30px;
    color: #ebebeb;
    background-color:#58804F ;
    border: none;
    outline: none;
  }
  .tinum{
    display: inline-block;
    color: red;
    width: auto !important ;
  }
</style>
