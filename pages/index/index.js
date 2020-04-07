//index.js
//获取应用实例
const app = getApp()

Page({
    onLoad: function () {
        let name = wx.getStorageSync("indexBackgroundImage")
        if (name) {
            this.setData({
                backgroundImage: name
            })
        }
    },
    data: {
        backgroundImage: "6.jpg",
        motto: 'welcome to summoner\'s rift',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },
    toCanvas() {
        wx.navigateTo({
            url: '/pages/canvas/canvas'
        })
    },
    toQR() {
        wx.navigateTo({
            url: "/pages/qr/qr"
        })
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },

    getUserInfo: function (e) {

    },
    toTwoD() {
        wx.navigateTo({
            url: '/pages/qr/qr'
        })
    },
    refresh() {
        this.onLoad()
    }
})