Page({
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {
        wx.showLoading({
            title: 'Loading...',
        })
        let timer = setTimeout(() => {
            wx.hideLoading()
            clearTimeout(timer)
        }, 1000)
    },
    data: {
        levels: [
            '1.jpg',
            '2.jpg',
            '3.jpg',
            '4.jpg'
        ]
    },
    /**
     * 自定义函数--游戏选关
     */
    chooseLevel(e) {
        // console.log(e)
        let level = e.currentTarget.dataset.level

        // 跳转到游戏页面
        wx.redirectTo({
            url: '../game/index?level=' + level,
        })
    }
})