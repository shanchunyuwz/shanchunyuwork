// pages/homepage/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liststr:[]
  },
  fujin:function(e){
    let initall=[];
    initall.push({
      url:"//ci.xiaohongshu.com/f5376235-8ea2-5b35-be92-38eb4f0f6330?imageView2/2/w/400/q/50/format/jpg",
      value:"OOTD/ 金jennie的小迷妹之同款 🌼part 1🌼 全网第一金智妮脑"
    },{
      url:"//ci.xiaohongshu.com/ea730028-7ea0-5562-a953-d6587b9f1405?imageView2/2/w/400/q/50/format/jpg",
      value:"华为mate20pro 终于到手📱一部被手机耽误的相机📷 等了大半个月，心水"
    },{
      url:"//ci.xiaohongshu.com/61501a08-6923-5b7c-b97e-9c48839faaf8?imageView2/2/w/400/q/50/format/jpg",
      value:"特立独行，小姐姐喜欢的酷酷小车，奥迪A5🚗 奥迪一直以来都是深受中国人喜欢的高"
    },{
      url:"//ci.xiaohongshu.com/237a00b2-ca7c-5c97-9b6e-4d6209046daf?imageView2/2/w/400/q/50/format/jpg",
      value:"南通南通 男士逗号刘海"
    },{
      url:"//ci.xiaohongshu.com/8bff7216-6e41-5a00-af5a-b587d51ab7dc?imageView2/2/w/400/q/50/format/jpg",
      value:"新手入门级别👉纸杯小蛋糕自制教程 一看就会，一学就对系列"
    },{
      url:"//ci.xiaohongshu.com/535d8425-0f7e-51fb-98b9-e93a94614e7d?imageView2/2/w/400/q/50/format/jpg",
      value:"职场小白摆脱迷茫|【25岁前一定要看的书】📖 . 🔍《见识》 豆瓣8.3 一"
    })
    this.setData({liststr:initall})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  tuijian:function(e){
    this.onShow()
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let initall=[];
    initall.push({
      url:"//ci.xiaohongshu.com/924bf077-65c0-5a23-b8bd-53504e1e1fb4?imageView2/2/w/400/q/50/format/jpg",
      value:"大哥到大哥的女人的转变，颧骨内推+下颌角 上海磨骨手术  一点都不含水分，为了好"
    },{
      url:"//ci.xiaohongshu.com/0164bc05-0f5b-5c02-bd0a-74641dbf2b20?imageView2/2/w/400/q/50/format/jpg",
      value:"今天来说说杨幂吧！她这个人真的是穿衣风格太棒了叭 🍓杨幂平时私服穿搭就很让人种"
    },{
      url:"//ci.xiaohongshu.com/277fb416-dad3-5d3a-b64b-1b1f2fb8958f?imageView2/2/w/400/q/50/format/jpg",
      value:"【杏花楼🌸青团测评】图文版（视频版已出） ◆咸蛋黄🐧肉松味 喜爱指数：⭐️⭐"
    },{
      url:"//ci.xiaohongshu.com/0efd5443-9046-50fb-b818-44643f957ff4?imageView2/2/w/400/q/50/format/jpg",
      value:'〖推荐几本popo文、又肉又剧情、高甜❤❤！！〗 《诱妻记》 文案💦 林莞二十'
    },{
      url:"//ci.xiaohongshu.com/6cd4c8fe-deb3-52b7-bb5b-409c9faa19e3?imageView2/2/w/400/q/50/format/jpg",
      value:"陈果老师哲学三部曲，《好的爱情》《好的孤独》《懂你》，希望在人生的道路上，一路花"
    },{
      url:"//ci.xiaohongshu.com/770c9772-789d-5fec-b16d-17b5fa953c08?imageView2/2/w/400/q/50/format/jpg",
      value:"💥高考历史必修❶❷❸干货知识点归纳总结‼️必得高分❾❺+分‼️ 🔶🔶🔶�"
    })
    this.setData({liststr:initall})
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})