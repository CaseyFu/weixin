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
        customItems: [{
                "name": "Guess Fist",
                "image": "guess-fist.png",
                "pagePath": "/pages/guess-fist/index"
            },
            {
                "name": "QRCode",
                "image": "qr.png",
                "pagePath": "/pages/qr/index"
            },
            {
                "name": "Questionaire",
                "image": "questionnaire.png",
                "pagePath": "/pages/questionnaire/index"
            },
            {
                "name": "LocalStorage",
                "image": "file.png",
                "pagePath": "/pages/storage/index"
            },
            {
                "name": "Demo",
                "image": "notebook.png",
                "pagePath": "/pages/demo/index"
            },
            {
                "name": "Icon管理",
                "image": "icon.png",
                "pagePath": "/pages/icon/index"
            }
        ],
        practitionItems: [{
                "name": "WeatherAss",
                "image": "qing-light.png",
                "pagePath": "/pages/weather/home/index"
            },
            {
                "name": "Invitation",
                "image": "invitation1.png",
                "pagePath": "/pages/invitation/home/index"
            },
            {
                "name": "Push box",
                "image": "box.png",
                "pagePath": "/pages/push-box/home/index"
            }
        ]
    },
    activate(e) {
        wx.redirectTo({
            url: e.currentTarget.dataset.param
        })
    }
})