// pages/day1/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     ListDetails:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(this.data.ListDetails);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let initial=[];
    
    initial.push(
      {
        img:"http://img.manhua.weibo.com/hcover/2018/10/14/5571104374_3tarpSiu.jpg",
        name:"九州怪谈",
        author:"作者：酋长滚去画画",
        value:"看你能逃到哪里去……"
      },{
        img:"http://img.manhua.weibo.com/hcover/2018/09/20/2042188591_WAzFpsK2.jpg",
        name:"氪命游戏",
        author:"作者：会火漫画社",
        value:"亲，你玩儿过命吗？"
      },{
        img:"http://img.manhua.weibo.com/hcover/2018/09/27/2106978712_gd3M5tI8.jpg",
        name:"我的36D女管家",
        author:"作者：漫悠悠漫画",
        value:"每天被胸咚叫醒"
      },{
        img:"http://img.manhua.weibo.com/hcover/2018/11/01/6572967266_WNfXuRro.jpg",
        name:"妖咒录",
        author:"作者：唯羽社",
        value:"捉妖少年奇幻之旅"
      },{
        img:"http://img.manhua.weibo.com/hcover/2018/06/25/6274785245_WRn2dFV4.jpg",
        name:"元尊",
        author:"作者：未天文化",
        value:"气掌乾坤的世界"
      },{
        img:"http://img.manhua.weibo.com/hcover/2019/01/15/1420789885_WHx8h5W5.jpg",
        name:"我的灵界女友们",
        author:"作者：-冬漫社-",
        value:"女鬼求放过！"
      },{
        img:"http://img.manhua.weibo.com/hcover/2018/09/30/2042188591_coBu4gRr.jpg",
        name:"造梦师异闻",
        author:"作者：兔先生-Mr2",
        value:"来吧，梦里快活呀……"
      }
    )
      this.setData({ListDetails:initial})
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
    //console.log(this.data.ListDetails.slice(0,7))
    let initial=[];
    initial.push(    {
      img:"http://img.manhua.weibo.com/hcover/2018/09/10/2660188431_6aW5lN0a.png",
      name:"你们真的是来上大学的吗",
      author:"作者：常盘勇者",
      value:"上大学，可劲儿作！"
    },{
      img:"http://img.manhua.weibo.com/hcover/2019/02/08/1432102165_EQOQtS4s.jpg",
      name:"狩猎者",
      author:"作者：思迈笑天翔",
      value:"三族激战谁是最后主宰？"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/12/13/5718695756_O5iEh1mP.jpg",
      name:"我的邻居不是人",
      author:"作者：创易漫画",
      value:"见鬼少年追女神！"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/11/01/5677318383_uKQmVel7.jpg",
      name:"蓬莱仙诗",
      author:'作者：神居动漫',
      value:"超越时空的奇缘"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/11/08/3471934934_Jh3cmJsM.jpg",
      name:"皇上别碰我",
      author:"作者：鹿娘owo",
      value:"当红影帝意外穿越成帝后"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/10/31/6052922018_L7NknNSS.jpg",
      name:"桃花宝典",
      author:"作者：有鹿文化",
      value:'让你尝尽人间精彩'
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/10/12/6517042809_UcApJDMB.jpg",
      name:"假如我有超能力",
      author:"作者：春风画社",
      value:"你想要超能力嘛？"
    })
    this.setData({ListDetails:initial})
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let initial=this.data.ListDetails;
    if(this.data.ListDetails.length>30){
        return
    }
    initial.push({
      img:"http://img.manhua.weibo.com/hcover/2018/09/10/2660188431_6aW5lN0a.png",
      name:"你们真的是来上大学的吗",
      author:"作者：常盘勇者",
      value:"上大学，可劲儿作！"
    },{
      img:"http://img.manhua.weibo.com/hcover/2019/02/08/1432102165_EQOQtS4s.jpg",
      name:"狩猎者",
      author:"作者：思迈笑天翔",
      value:"三族激战谁是最后主宰？"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/12/13/5718695756_O5iEh1mP.jpg",
      name:"我的邻居不是人",
      author:"作者：创易漫画",
      value:"见鬼少年追女神！"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/11/01/5677318383_uKQmVel7.jpg",
      name:"蓬莱仙诗",
      author:'作者：神居动漫',
      value:"超越时空的奇缘"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/11/08/3471934934_Jh3cmJsM.jpg",
      name:"皇上别碰我",
      author:"作者：鹿娘owo",
      value:"当红影帝意外穿越成帝后"
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/10/31/6052922018_L7NknNSS.jpg",
      name:"桃花宝典",
      author:"作者：有鹿文化",
      value:'让你尝尽人间精彩'
    },{
      img:"http://img.manhua.weibo.com/hcover/2018/10/12/6517042809_UcApJDMB.jpg",
      name:"假如我有超能力",
      author:"作者：春风画社",
      value:"你想要超能力嘛？"
    })
    
    this.setData({ListDetails:initial})
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
      return {
        title:"A页面转发",
        path:"?pages/A/A"

      }
  }
})