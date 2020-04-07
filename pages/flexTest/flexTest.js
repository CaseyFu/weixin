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
        animationData: {}
    },
    rotate() {
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'linear',
        })
        animation.top(200)
        // animation.backgroundColor("red").scale(1, 1).rotate(60).step()
        this.setData({
            animationData: animation.export()
        })
        // setTimeout(function () {
        //     animation.translate(100).step()
        //     this.setData({
        //         animationData: animation.export()
        //     })
        // }.bind(this), 2000)
    },
    blowUp() {
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        animation.backgroundColor("skyblue");
        animation.scale(1.5, 1.5).step()

        this.setData({
            animationData: animation.export()
        })
        setTimeout(function () {
            animation.scale(1, 1).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 3000)
    },
    shrink() {
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        animation.scale(0.5, 0.5).step()

        this.setData({
            animationData: animation.export()
        })
        setTimeout(function () {
            animation.scale(1, 1).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 3000)
    },
    translate() {
        let animation = wx.createAnimation({
            duration: 1000,
            timingFunction: 'ease',
        })
        animation.translate(100, 50).step()

        this.setData({
            animationData: animation.export()
        })
        setTimeout(function () {
            animation.translate(0, 0).step()
            this.setData({
                animationData: animation.export()
            })
        }.bind(this), 3000)
    }



})