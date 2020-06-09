// pages/video/video.js
const {
    $Message
} = require('../../dist/base/index');
Page({
    onLoad() {
        this.videoContext = wx.createVideoContext("myVideo")
    },
    data: {
        arr:[
            {name:"xfk",age:20},
            {name:"dfk",age:21},
            {name:"ffk",age:22},
        ]
    },
    selectVideo() {
        let that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success(res) {
                that.setData({
                    videoSrc: res.tempFilePath
                })
            }
        })
    },
    startVideo() {
        this.videoContext.play()
    },
    stopVideo() {
        this.videoContext.pause()
    },
    saveVideo() {
        wx.saveVideoToPhotosAlbum({
            filePath: this.data.videoSrc,
            success(res) {
                $Message({
                    content: "保存成功",
                    type: "success"
                });
            }
        })
    },
    bindKeyInput(e) {
        this.setData({
            barrage: e.detail.value
        })
    },
    send() {
        let color = this.randomColor()
        this.videoContext.sendDanmu({
            text: this.data.barrage,
            color: color
        })
    },
    randomColor() {
        const rgb = []
        for (let i = 0; i < 3; ++i) {
            let color = Math.floor(Math.random() * 256).toString(16)
            color = color.length === 1 ? '0' + color : color
            rgb.push(color)
        }
        return '#' + rgb.join('')
    }
})