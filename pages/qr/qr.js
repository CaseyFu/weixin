// pages/video/video.js
const QR = require("wxmp-qrcode")
// import QR from "wxmp-qrcode"
Page({
     onLoad: function (options) {
          this.creatQRCode(this.data.url)
     },
     data: {
          canvasId: "canvasId",
          url: "https://www.cnblogs.com/xfk1999/"
     },
     creatQRCode(url) {
          let canvasId = this.data.canvasId
          QR.qrApi.draw(url, canvasId, () => {
               console.log('draw success!')
          })
     },
     getUrl(e) {
          let url = e.detail.value.url
          if (url == "") return
          wx.showToast({
               title: "生成中",
               icon: "loading",
               duration: 500
          })
          let that = this
          let timer = setTimeout(() => {
               that.creatQRCode(url);
               wx.hideToast();
               clearTimeout(timer)
          }, 500)
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