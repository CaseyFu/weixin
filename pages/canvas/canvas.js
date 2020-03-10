// pages/video/video.js
let ctx;
Page({

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        ctx = wx.createCanvasContext("myCanvas")
        ctx.setStrokeStyle(this.data.pen.color)
        ctx.setLineWidth(this.data.pen.lineWidth)
        ctx.setLineCap("round")
        ctx.setLineJoin("round")
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {},
    /**
     * 页面的初始数据
     */
    data: {
        pen: {
            color: "#000",
            lineWidth: 2
        }
    },


    touchStart(e) {
        // console.log(e.touches[0].x)
        ctx.moveTo(e.touches[0].x, e.touches[0].y)
        ctx.setStrokeStyle(this.data.pen.color)
        ctx.setLineWidth(this.data.pen.lineWidth)
    },
    touchMove(e) {
        // console.log(e)
        let x = e.touches[0].x
        let y = e.touches[0].y
        ctx.lineTo(x, y)
        ctx.stroke()
        ctx.draw(true)
        ctx.moveTo(x, y)

    },
    switchEraser(e) {
        console.log(e)
        this.setData({
            "pen.color": "#d3d3d3",
            "pen.lineWidth": 20
        })
    },
    switchColor(e) {
        console.log(e)
        this.setData({
            "pen.color": e.target.dataset.param
        })
    },
    switchPen(e) {
        this.setData({
            "pen.color": "#000",
            "pen.lineWidth": 2
        })
    },



    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})