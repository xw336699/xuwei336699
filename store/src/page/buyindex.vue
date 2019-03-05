<template>
  <div class="waibu">
    <div class="listss">
      <img :src="routes">
      <ul class="list-product">
        <router-link v-for="(item,index) in productlist" tag="li" :key="index" :to="item.path" active-class="classnum">
          {{item.title}}</router-link>
      </ul>
    </div>
    <div class="product-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
    export default {
       data () {
         return {
            productlist:[
              {
                title:"数据统计",
                path:'One',
                classnum:false
              },
              {
                title:"数据预测",
                path:'Two',
                classnum:false
              },
              {
                title:"流量分析",
                path:'Three',
                classnum:false
              },
              {
                title:"广告发布",
                path:'Four',
                classnum:false
              }
            ],
           imgmap:{
              '/Buy/One':require("../images/1.png"),
             '/Buy/Two':require("../images/2.png"),
             '/Buy/Three':require("../images/3.png"),
             '/Buy/Four':require("../images/4.png"),
           }
         }
       },
      computed: {
        routes () {
          return  this.imgmap[this.$route.path]
        }
      }
    }
</script>

<style  >
* {
  margin: 0;
  padding: 0;
}
.waibu{
  overflow: hidden;
}
.listss {
  float: left;
  width: 240px;
  height: auto;
  background-color: #fcfcfc;
 margin-left: 300px;
  }
.listss img {
  width: 100px;
  height: 100px;
  margin-left:30% ;

}
.list-product li{
  list-style: none;
  color: #545454;
  text-align: left;
  background-color:  white;
  padding: 5px 10px;
}

.list-product li:hover{
  background-color:  #58804F;
  color: antiquewhite;
}
.list-product li:active {
  background-color: #7cb371;
  color: antiquewhite;
}
  .product-content{
    float: left;
    margin-left: 20px;
    width: 950px;
    height: auto;
    background-color: #fcfcfc;
  }
</style>
