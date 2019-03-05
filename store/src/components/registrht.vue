<template>
    <div class="resgitr">
      <div class="btns "><label>用户名：</label><input :value="user" @input="user=$event.target.value"     type="text"><span>{{usernum}}</span> </div>
      <div class="btns "><label>手机号：</label><input :value="phone" @input="phone=$event.target.value" type="text"> <span>{{phonenum}}</span></div>
      <div class="btns "><label>密码：</label><input  :value="pass" @input="pass=$event.target.value"type="password"> <span>{{passnum}}</span></div>
      <div class="btns "><label>再次输入密码：</label><input :value="agin" @input="agin=$event.target.value" type="password"> <span>{{aginnum}}</span></div>
      <div class="btns "><button @click="submit(userfc,phonefc,passfc,aginfc)">注册</button></div>
    </div>
</template>

<script>
    export default {
      data () {
        return {
          user:"",
          phone:"",
          pass:"",
          agin:"",
          usernum:"",
          phonenum:"",
          passnum:"",
          aginnum:""
        }
      },
      computed: {
        userfc () {
          if(/^[a-zA-Z][a-zA-Z0-9]{4,12}$/g.test(this.user)){
            this.usernum = ""
            return true
          }
          else {
            this.usernum = "用户名格式错误"
            return false
          }
        },
        phonefc () {
          if(/^1[34578][0-9]{9}$/g.test(this.phone)){
            this.phonenum = ""
            return true
          }
          else {
            this.phonenum = "手机号码格式错误"
            return false
          }
        },
        passfc () {
          if(/^[a-zA-Z0-9]{6,16}$/g.test(this.pass)){
            this.passnum = ""
            return true
          }
          else {
            this.passnum = "密码格式错误"
            return false
          }
        },
        aginfc () {
          if(/^[a-zA-Z0-9]{6,16}$/g.test(this.agin) && (this.pass === this.agin)){
            this.aginnum = ""
            return true
          }
          else {
            this.aginnum = "输入密码错误"
            return false
          }
        }
      },
      methods: {
        submit (us,ph,pa,ag) {
          if( us && ph && pa && ag){
            console.log("注册成功！")
          }
          else {
            console.log("注册失败！")
          }
        }
      }
    }
</script>

<style scoped>
*{
  margin: 0px;
  padding: 0px;
}
  .btns{
    margin: 20px 10px;
    color: rgb(38, 38, 38);
  }
  .btns>label {
    display: inline-block!important;
    width: 120px;
    text-align: right;
  }
  .btns>button {
    border: none;
    outline: none ;
    background-color: #58804F;
    color: #dfdfdf;
    margin-left: 10px;
    border-radius: 3px;
    width: 100px;
    height: 25px;
  }
  .btns>span{
    color: red;
  }
</style>
