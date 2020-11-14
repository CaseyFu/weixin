// pages/video/video.js
Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: '返回主页'
        },
        textColor: {
            type: String,
            value: "black"
        }
    },
    data: {
        // innerText: "返回主页"
    },
    methods: {
        backHome() {
            wx.switchTab({
                url: "/pages/index/index"
            })
        }
    }
})