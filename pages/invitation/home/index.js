Page({
    /**
     * 生命周期函数--监听页面加载
     * 
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
        enConferenceName: "Invitation Letter Design Conference",
        conferenceName: "第十二届 邀请函设计会议",
        date: "2020/10/17 - 10:00",
        address: "重庆市巴南区龙洲湾",
        hotline: "023-6666 6666",
        site: "FUKAI.ASIA"
    },
    toDetail() {
        wx.redirectTo({
            url: "/pages/invitation/detail/index"
        })
    }
})