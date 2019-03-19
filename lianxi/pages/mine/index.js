// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden:true,
    nocancel:false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  bindGetUserInfo(e) {
    // console.log(e.detail.userInfo)
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称
          wx.getUserInfo({
            success(res) {
             wx.showModal({
                title:"验证成功",
                content:"----是否跳转页面----",
                success:()=>{
                  wx.switchTab({url:"/pages/homepage/index"})
             }})
            }
          })
        }
      }
    })
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

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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