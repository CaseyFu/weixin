// pages/video/video.js
const app = getApp()
const worker = wx.createWorker('workers/request/index.js')
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
        animationData: {}
    },
    test() {
        worker.postMessage({
            msg: "这里是todoList",
            x: 10,
            y: 5
        })
        worker.onMessage((res) => {
            console.log("主线程打印")
            console.log(res)
        })
        worker.terminate()
    },
    onShow() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        animation.scale(2, 2).rotate(45).step()

        this.setData({
            animationData: animation.export()
        })

        setTimeout(function () {
            animation.translate(30).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 1000)
    },
    rotateAndScale() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        // 旋转同时放大
        animation.scale(2, 2).rotate(45).step()
        this.setData({
            animationData: animation.export()
        })
    },
    rotateThenScale() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        // 先旋转后放大
        animation.rotate(360).step()
        animation.scale(2, 2).step()
        this.setData({
            animationData: animation.export()
        })
    },
    rotateAndScaleThenTranslate() {
        var animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        // 先旋转同时放大，然后平移
        animation.scale(2, 2).rotate(45).step()
        animation.translate(100, 100).step({
            duration: 1000
        })
        this.setData({
            animationData: animation.export()
        })
    }




})