<template>
  <div class="wai">
  <div class="content">
    <div class="content-product">
    <h3 class="content-product-title">全部产品</h3>
      <template v-for="item in productlist">
        <h4 class="content-product-title-two">{{item.title}}</h4>
        <ul>
          <li class="item-li" v-for="produce in item.list">
            <div :href="produce.url">{{produce.name}}</div>
            <span class="hot" v-if="produce.hot">HOT</span>
          </li>
        </ul>
        <div class="parting-line" v-if="item.msg"></div>
      </template>
      <div class="parting-line-end"></div>
    </div>
    <div class="content-new">
      <h3 class="content-new-title">最新消息</h3>
      <template v-for="item in news">
        <h4 class="content-new-one">{{item.title}}</h4>
        <ul>
          <li class="content-new-item-li"  v-for="items in item.newslist">
            <div :href="items.url">{{items.content}}</div>
          </li>
        </ul>
      </template>
    </div>
  </div>
    <div class="content-list">
      <template >
        <div class="content-list-port" v-for="item  in lists">
          <div :class="['content-bg-'+ item.clas]"></div>
          <div class="content-list-port-botttom">
            <h3>{{item.title}}</h3>
            <div>{{item.text}}</div>
            <button :href="item.hf">{{item.btn}}</button>
          </div>
        </div>
      </template>
    </div>
    <slideshow :slides="slides" :invs="slidetime"></slideshow>
    </div>
</template>

<script>
  import  slideshow  from  '../components/slideshow'
export default {
  created: function () {
    this.$http.get("api/productlist").then((res) => {
      this.productlist = res.data
    }, (err) => {
      console.log(err)
    })
    this.$http.get("api/news").then((res) => {
      this.news = res.data
    }, (err) => {
      console.log(err)
    })
    this.$http.get("api/lists").then((res) => {
      this.lists = res.data
    }, (err) => {
      console.log(err)
    })
  },
  components: {
    slideshow
  },
  data() {
    return {
      productlist: {},
      slidetime: 2000,
      news: {},
      lists: {},
      slides: [
        {
          src: require("../images/demo1.jpg"),
          title: "数据统计",
          href: "/Buy/One"
        },
        {
          src: require("../images/demo2.jpg"),
          title: "数据预测",
          href: "/Buy/Two"
        },
        {
          src: require("../images/demo3.jpg"),
          title: "流量分析",
          href: "/Buy/Three"
        },
        {
          src: require("../images/demo4.jpg"),
          title: "广告发布",
          href: "/Buy/Four"
        }
      ]
    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
  .content{
    margin-top: 20px;
    margin-bottom: 20px ;
    margin-left: 300px;
    height: auto;
    width: 320px;
  }
  .wai{
    width: inherit;
    position: relative;
  }
  .content-product,.content-new{
    width: 100%;
    height: auto;
    overflow: hidden;
    background-color: white;
  }
  .content-product-title,.content-new-title{
    background-color: #58804f;
    width: 100%;
    color: white;
    padding: 10px 20px;
  }
  .parting-line{
    width: 100%;
    height: 2px;
    background-color: #e9f2e8;
  }
  .parting-line-end{
    width: 100%;
    height: 15px;
    background-color: #e9f2e8;
  }
  .item-li,.content-new-item-li{
    list-style: none;
    width: 100%;
    height: 30px;
    font-size: 12px;
    padding-left: 20px;
    color: #3d3d3d;
    line-height: 30px;
    position: relative;
  }
  .content-product-title-two,.content-new-one{
    font-size: 12px;
    padding: 10px 20px;
  }
  .hot{
   position: absolute;
    left: 95px;
    top:0px;
    color: white;
    background-color: red;
    border-radius: 5px;
  }
.content-new-item-li{
  color: #818181;
  padding: 10px 20px;
}
  .content-list{
    width: 1000px;
    height: 360px;
    margin-left: 5px;
    position: absolute;
    left: 620px;
    top: 435px;
  }
  .content-list-port{
    display: inline-block;
    margin: 10px 10px;
    width: 470px;
    height: 150px;
    overflow: hidden;
    background-color: #f6fff5;
  }
  .content-bg-pro,.content-bg-pin,.content-bg-pan,.content-bg-ming{
    width: 120px;
    margin: 10px 30px;
    float: left;
    height: 120px;
  }
.content-bg-pro{
  background: url("../images/1.png") 0 0 no-repeat ;
  background-size:120px 120px ;
}
.content-bg-pin{
  background: url("../images/2.png") 0 0 no-repeat ;
  background-size:120px 120px ;
}
.content-bg-ming{
  background: url("../images/3.png") 0 0 no-repeat ;
  background-size:120px 120px ;
}
.content-bg-pan{
  background: url("../images/4.png") 0 0 no-repeat ;
  background-size:120px 120px ;
}
  .content-list-port-botttom{
    margin-top: 20px;
    width: auto;
  }
  .content-list-port-botttom>h4,.content-list-port-botttom>div,.content-list-port-botttom>button{
    height: 30px;
    line-height: 30px;
    padding: 5px 5px;
  }
.content-list-port-botttom>div{
  color: #494949;
  font-size: 10px;
}
.content-list-port-botttom>button{
  outline: none;
  border: none;
  color: #fbfeff;
  background-color: #58804F;
  padding: 0px 10px;
  height: 30px;
}
 </style>
