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
        items: [{
                "name": "猜拳小游戏",
                "image": "guessFist.png",
                "pagePath": "/pages/guessFist/guessFist"
            },
            {
                "name": "制定二维码",
                "image": "qr.png",
                "pagePath": "/pages/qr/qr"
            },
            {
                "name": "画图",
                "image": "draw.png",
                "pagePath": "/pages/canvas/canvas"
            },
            {
                "name": "日志",
                "image": "draw.png",
                "pagePath": "/pages/logs/logs"
            },
            {
                "name": "测试",
                "image": "login.png",
                "pagePath": "/pages/test/test"
            },
            {
                "name": "问卷调查",
                "image": "questionnaire.png",
                "pagePath": "/pages/questionnaire/questionnaire"
            },
            {
                "name": "todoList",
                "image": "todoList.png",
                "pagePath": "/pages/todoList/todoList"
            },
            {
                "name": "本地存储管理",
                "image": "local.png",
                "pagePath": "/pages/localStorage/localStorage"
            },
            {
                "name": "更换壁纸",
                "image": "background.png",
                "pagePath": "/pages/background/background"
            },
            {
                "name": "flex及动画",
                "image": "spring.png",
                "pagePath": "/pages/flexTest/flexTest"
            },
            {
                "name": "1. 循环",
                "image": "mission.png",
                "pagePath": "/pages/circle/circle"
            },
            {
                "name": "2. checkbox",
                "image": "mission.png",
                "pagePath": "/pages/2/2"
            },
            {
                "name": "3. input",
                "image": "mission.png",
                "pagePath": "/pages/3/3"
            },
            {
                "name": "4. label",
                "image": "mission.png",
                "pagePath": "/pages/4/4"
            },
            {
                "name": "5. form",
                "image": "mission.png",
                "pagePath": "/pages/5/5"
            },
            {
                "name": "6. picker",
                "image": "mission.png",
                "pagePath": "/pages/6/6"
            },
            {
                "name": "7. picker-view",
                "image": "mission.png",
                "pagePath": "/pages/7/7"
            },
            {
                "name": "8. radio",
                "image": "mission.png",
                "pagePath": "/pages/8/8"
            },
            {
                "name": "9. slider",
                "image": "mission.png",
                "pagePath": "/pages/9/9"
            },
            {
                "name": "10. switch",
                "image": "mission.png",
                "pagePath": "/pages/10/10"
            },
            {
                "name": "11. textarea",
                "image": "mission.png",
                "pagePath": "/pages/11/11"
            },
            {
                "name": "12. audio",
                "image": "mission.png",
                "pagePath": "/pages/12/12"
            },
            {
                "name": "13. audio",
                "image": "mission.png",
                "pagePath": "/pages/13/13"
            },
            {
                "name": "14. audio",
                "image": "mission.png",
                "pagePath": "/pages/14/14"
            },
            {
                "name": "15. audio",
                "image": "mission.png",
                "pagePath": "/pages/15/15"
            },
            {
                "name": "16. 网络",
                "image": "mission.png",
                "pagePath": "/pages/16/16"
            },
            {
                "name": "17. 图片管理",
                "image": "mission.png",
                "pagePath": "/pages/17/17"
            }
        ],
    },
    activate(e) {
        wx.navigateTo({
            url: e.currentTarget.dataset.param
        })
    }
})