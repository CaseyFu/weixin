// pages/video/video.js
Page({
    onLoad(options) {
        // 生命周期函数--监听页面加载
    },
    onReady() {
        // 生命周期函数--监听页面初次渲染完成
    },
    onShow() {
        // 生命周期函数--监听页面显示
    },
    onHide() {
        // 生命周期函数--监听页面隐藏
    },
    onUnload() {
        // 生命周期函数--监听页面卸载
    },
    onPullDownRefresh() {
        // 页面相关事件处理函数--监听用户下拉动作
    },
    onReachBottom() {
        // 页面上拉触底事件的处理函数
    },
    onShareAppMessage() {
        // 用户点击右上角分享
    },

    data: {
        text1: [{
            name: 'div',
            attrs: {
                style: 'line-heigt:60px;color:red;font-weight:bold'
            },
            children: [{
                type: 'text',
                text: 'hellow world!'
            }]
        }],
        text2: [{
            name: 'div',
            attrs: {
                class: 'custom'
            },
            children: [{
                type: 'text',
                text: 'hellow world!'
            }]
        }],
        text3: '<div style="text-align:right;line-height:60px;color:red;line-weight:bold">hellow world!</div>'
    },
})