<template>
  <div class="sales-board">
    <div class="sales-board-intro">
      <h2>流量分析</h2>
      <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
    </div>
    <div class="sales-board-form">
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          购买数量：
        </div>
        <div class="sales-board-line-right">
          <Add @onchange="numberfc"></Add>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品类型：
        </div>
        <div class="sales-board-line-right">
          <Btn :btnnum="versions" @on-change="productfc"></Btn>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          有效时间：
        </div>
        <div class="sales-board-line-right">
          <btn-one :btnonenum="time" @changeone="yearfc"></btn-one>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          产品版本：
        </div>
        <div class="sales-board-line-right">
          <btn-one :btnonenum="versionss"  @changeone="versionfc"></btn-one>
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">
          总价：
        </div>
        <div class="sales-board-line-right">
           {{pricefc}}元
        </div>
      </div>
      <div class="sales-board-line">
        <div class="sales-board-line-left">&nbsp;</div>
        <div class="sales-board-line-right">
          <div class="button" >
            立即购买
          </div>
        </div>
      </div>
    </div>
    <div class="sales-board-des">
      <h2>产品说明</h2>
      <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

      <h3>用户行为指标</h3>
      <ul>
        <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
        <li>用户在网站的停留时间；</li>
        <li>用户来源网站（也叫“引导网站”）；</li>
        <li>用户所使用的搜索引擎及其关键词；</li>
        <li>在不同时段的用户访问量情况等。</li>
      </ul>

      <h3>浏览网站方式</h3>
      <ul>
        <li>用户上网设备类型</li>
        <li>用户浏览器的名称和版本</li>
        <li>访问者电脑分辨率显示模式</li>
        <li>用户所使用的操作系统名称和版本</li>
        <li>用户所在地理区域分布状况等</li>
      </ul>
    </div>
      <table class="buy-dialog-table">
        <tr>
          <th>购买数量</th>
          <th>产品类型</th>
          <th>有效时间</th>
          <th>产品版本</th>
          <th>总价</th>
        </tr>
        <tr>
          <td>{{numbe}}</td>
          <td>{{productbum[1]}}</td>
          <td>{{yearum[1]}}</td>
          <td>
            <span > {{versionnum[1]}} </span>
          </td>
          <td>{{pricefc}}</td>
        </tr>
      </table>
      <h3 class="buy-dialog-title">请选择银行</h3>
      <div class="button buy-dialog-btn" >
        确认购买
      </div>
  </div>
</template>

<script>
  import Btn from '../btn'
  import BtnOne from '../btnone'
  import BtnTwo from '../btntwo'
  import Add from '../add'
    export default {
      components: {
        Btn,
        BtnOne,
        BtnTwo,
        Add
      },
      data () {
        return {
          numbe:0,
          productbum:[0],
          yearum:[0],
          versionnum:[0],
          price:0,
          arrays:[],
          versions:[
            {
              name:"入门版",
              value:50,
              selector:false
            },
            {
              name:"初级版",
              value:100,
              selector:false
            },
            {
              name:"高级版",
              value:150,
              selector:false
            }
          ],
          time:[
            {
              name:"半年",
              value:200,
              selector:false
            },
            {
              name:"一年",
              value:300,
              selector:false
            },
            {
              name:"两年",
              value:450,
              selector:false
            }
          ],
          versionss:[
            {
              name:"客户版",
              value:100,
              selector:false
            },
            {
              name:"代理商版",
              value:150,
              selector:false
            },
            {
              name:"专家版",
              value:200,
              selector:false
            }
          ]
        }
      },
      methods:{
        numberfc (value) {
          this.numbe = value
        },
        productfc (value) {
          this.productbum = value
        },
        yearfc (value) {
          this.yearum = value
        },
        versionfc (value) {
          this.versionnum = value
        }
      },
      computed: {
        pricefc () {
          this.price = this.numbe *(this.productbum[0]+this.yearum[0]+this.versionnum[0])
          return this.price
        }
      }
    }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .sales-board{
    padding-left: 20px;
    color: #404040;
  }
  .sales-board-intro h2 , .sales-board-intro p{
    margin: 20px 0px  ;
  }
  .sales-board-line{
    margin: 20px 0px;
  }
  .sales-board-line-left,.sales-board-line-right{

    display: inline-block;
  }
  .buy-dialog-btn{
    width: 70px;
    height: 25px;
    line-height: 25px;
    margin-bottom: 20px;
  }
  .button{
    padding: 5px 20px;
    background-color: #58804F;
    color: #f7f7f7;
    margin-left: 40px;
  }
  .sales-board-des h2,.sales-board-des p,.buy-dialog-title{
    margin: 20px 0px;
  }
 .sales-board-des li{
   list-style: none;
   margin: 10px 0px;
 }
 .buy-dialog-table{
   background-color: black;
 }
.buy-dialog-table td,.buy-dialog-table th{
  background-color: white;
  height: 20px;
  padding: 5px 20px;
}
</style>
