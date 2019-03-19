// pages/two/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    betSallset:[],
    initallset:[]
   
  },

  /**
   * 生命周期函数--监听页面加载
   */

  appear:function(e){
    let initall=[];
    initall.push({
      value:"9:00-10:00",
      acthor:"开放"
    },{
      value:"10:00-11:00",
      acthor:"开放"
    },{
      value:"14:00-15:00",
      acthor:"开放"
    },{
      value:"15:00-16:00",
      acthor:"开放"
    })
    this.setData({initallset:initall})
  },
  onLoad: function (options) {

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
    let initall=[];
    initall.push({
      value:"03月14日",
      acthor:"今日·关闭"
    },{
      value:"03月15日",
      acthor:"周五·关闭"
    },{
      value:"03月16日",
      acthor:"周六·开放"
    },{
      value:"03月17日",
      acthor:"周日开放"
    },{
      value:"03月18日",
      acthor:"周一·关闭"
    },{
      value:"03月19日",
      acthor:"周二·关闭"
    },{
      value:"03月20日",
      acthor:"周三·关闭"
    },{
      value:"03月21日",
      acthor:"周四·关闭"
    }),
    this.setData({betSallset:initall})
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