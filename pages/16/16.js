// pages/video/video.js
const {
    $Message
} = require('../../dist/base/index');
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
        value: "",
        meaning: "",
        en_meaning: ""
    },
    bindKeyInput(e) {
        this.setData({
            value: e.detail.value
        })
    },
    doSearch() {
        if (this.data.value == "") {
            $Message({
                content: "请输入单词",
                type: "error"
            });
            return
        }
        let that = this
        wx.request({
            url: "https://api.shanbay.com/bdc/search",
            data: {
                word: this.data.value
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (e) {
                that.setData({
                    meaning: e.data.data.definition,
                    en_meaning: e.data.data.en_definition.defn
                })
                console.log(e)
            },
            fail: function (e) {
                console.log(e)
            }
        })

    }
})