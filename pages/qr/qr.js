// pages/video/video.js
const QR = require("wxmp-qrcode")
// import QR from "wxmp-qrcode"
Page({

     /**
      * 页面的初始数据
      */
     data: {
          canvasId: 'canvasId',
          QRdata: 'https://github.com'
     },
     creatQRCode() {
          let str = this.data.QRdata
          let canvasId = this.data.canvasId
          QR.qrApi.draw(str, canvasId, () => {
               console.log('draw success!')
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