let icons = {
    'weather': ['bicycle.png', 'big-rain.png', 'big-rain.svg', 'car.png', 'city.svg', 'clothes.png', 'cloudy.png', 'cloudy.svg', 'cotton.png', 'date.svg', 'delight.png', 'fog.png', 'fog.svg', 'hot.svg', 'humidity.png', 'humidity.svg', 'leng.svg', 'max.svg', 'mid-rain.png', 'mid-rain.svg', 'min.svg', 'san.svg', 'small-rain.png', 'small-rain.svg', 'sun.png', 'sun.svg', 'sun-down.svg', 'sun-rise.svg', 'thunder.png', 'thunder.svg', 'umbrella.png', 'uv.svg', 'virus.svg', 'weather.png', 'winddirection.png', 'winddirection.svg', 'windpower.png', 'windpower.svg', 'windspeed.svg', 'yiren.svg', 'zhenyu.svg'],
    'invitation': ['ayst.jpg', 'cup.png', 'cup1.png', 'oula.png', 'process.svg', 'refresh.svg', 'rick.jpg', 'trademark.png'],
    'pushBox': ['box.png', 'box-tnt.png', 'end.png', 'end-board.png', 'path-bookshelf.png', 'path-coal.png', 'path-diamond.png', 'path-gold.png', 'path-iron.png', 'path-mud.png', 'path-redstone.png', 'player-1.png', 'player-2.png', 'player-3.png', 'stone-1.png', 'stone-2.png', 'stone-3.png', 'direction.svg', 'footprint.svg', 'refresh.svg', 'tank.svg', 'time.svg'],
    'portal': ['demo.png', 'file.png', 'guess-fist.png', 'notebook.png', 'qing.png', 'qing-light.png', 'qr.png', 'questionnaire.png'],
    'sysIcon': ['nav-home.png', 'nav-return.png', 'selected-home.png', 'unselected-home.png', 'selected-portal.png', 'unselected-portal.png'],
    'otherIcon': []
}
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
        let total = icons.weather.length + icons.invitation.length + icons.pushBox.length + icons.portal.length + icons.sysIcon.length + icons.otherIcon.length
        this.setData({
            total
        })
    },
    data: {
        icons: icons,
        total: 0
    }
})