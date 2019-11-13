//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username: "",
    password: "",
    link: "<navigator url='../logs/logs'>LINK</navigator>"
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  message: function() {
    wx.navigateTo({
      url: '../message/message'
    })
  },
  getUsName: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
  getPsW: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
  login: function() {
    wx.request({
      url: 'https://service.58xiaoxiang.cn/wxsp/v1/user/login', //仅为示例，并非真实的接口地址
      data: {
        username: this.data.username,
        password: this.data.password
      },
      method: 'POST',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        wx.setStorageSync("login", res.data.data)
        wx.navigateTo({
          url: '../message/message',
        })
      }
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
