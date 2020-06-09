// pages/video/video.js
const {
    $Message
} = require('../../dist/base/index');
Page({
    data: {
        imgUrls: [],
        window: false,
        windowMsg: ""

    },
    selectImg() {
        let that = this
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                that.setData({
                    imgUrls: res.tempFilePaths
                })
            },
            fail(res) {
                $Message({
                    content: "选择失败",
                    type: "error"
                });
            }
        })
    },
    previewImg() {
        if (this.data.imgUrls.length == 0) {
            $Message({
                content: "请先选择图片",
                type: "error"
            });
            return
        }
        wx.previewImage({
            current: this.data.imgUrls[0],
            urls: this.data.imgUrls
        })
    },
    imgInfo() {
        if (this.data.imgUrls.length == 0) {
            $Message({
                content: "请先选择图片",
                type: "error"
            });
            return
        }
        this.setData({
            window: true
        })
        let that = this
        wx.getImageInfo({
            src: this.data.imgUrls[0],
            success(res) {
                that.setData({
                    windowMsg: "宽:" + res.width + "高:" + res.height
                })
            }
        })
    },
    saveImg() {
        if (this.data.imgUrls.length == 0) {
            $Message({
                content: "请先选择图片",
                type: "error"
            });
            return
        }
        wx.saveImageToPhotosAlbum({
            filePath: this.data.imgUrls[0],
            success(res) {
                console.log("成功")
                console.log(res)
                $Message({
                    content: "保存到相册成功",
                    type: "success"
                });
            },
            fail(res) {
                console.log("失败")
                console.log(res)
                $Message({
                    content: "保存失败",
                    type: "error"
                });
            }
        })
    },
    windowOk() {
        this.setData({
            window: false
        })
    }
})