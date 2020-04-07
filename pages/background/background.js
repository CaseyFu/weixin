// pages/video/video.js
const {
    $Message
} = require('../../dist/base/index')
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
        list: [{
                "name": "1.jpg",
                "title": "绿色好心情",
                "extra": "额外信息",
                "comment": "评论, 多说一点话, 不行了, 我out了呵呵哈哈哈或或或或或或或或或或或或或或或或呵呵哈哈哈或或或或或或或或或或或或或或或或或或或或呵呵哈哈哈或或或或或或或或或或或或或或或或或或呵呵哈哈哈或或或或或或或或或或或或或或或或或或或"
            },
            {
                "name": "2.jpg",
                "title": "",
                "extra": "",
                "comment": ""
            },
            {
                "name": "3.jpg",
                "title": "",
                "extra": "",
                "comment": ""
            },
            {
                "name": "4.jpg",
                "title": "",
                "extra": "",
                "comment": ""
            },
            {
                "name": "6.jpg",
                "title": "",
                "extra": "",
                "comment": ""
            },
            {
                "name": "8.jpg",
                "title": "",
                "extra": "",
                "comment": ""
            }
        ]
    },
    handleClick(e) {
        wx.setStorage({
            key: "indexBackgroundImage",
            data: e.target.dataset.param,
            success: () => {
                $Message({
                    content: "更换成功, 即将跳转到主页",
                    type: "success"
                });
            }
        })
        let timer = setTimeout(() => {
            wx.switchTab({
                url: "/pages/index/index"
            })
            clearTimeout(timer)
        }, 2000)
    }

})