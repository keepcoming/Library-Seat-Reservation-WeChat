// pages/register/register.js
const app = getApp();
import api from "../../utils/api.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    sid: null,
    name: null
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

  },

  getSid: function (e) {
    this.setData({ sid: e.detail });
  },

  getName: function (e) {
    this.setData({ name: e.detail });
  },

  submit: function (e) {
    const that = this;
    // 提交绑定信息
    wx.request({
      url: api.register,
      data: {
        stuId: that.data.sid,
        name: that.data.name,
        openid: app.globalData.openid
      },
      success(res) {
        console.log(res.data);
        if (res.data.content) {
          wx.showLoading({
            title: '绑定中'
          });
          app.globalData.access = true
          setTimeout(function () {
            wx.hideLoading();
            wx.showToast({
              title: '绑定成功'
            });
            // 绑定成功后跳转到上级页面
            setTimeout(function(){
              wx.navigateBack({
                delta: 1
              })
            },200);
          }, 500);
          
        } else {
          // 后台没有添加信息
          wx.showToast({
            title: '没有权限，请联系管理员',
            icon: 'none'
          });
        }
      },
      fail(err) {
        wx.showToast({
          title: '请重试',
          icon: 'none'
        });
      }
    });
  }
})