let api = require('../../../libs/api.js');

Page({
  onLoad(options) {
    // 生命周期函数--监听页面加载
    // 加载实时位置信息
    wx.showLoading({
      title: 'Loading...',
    })
    this.setData({
      address: options.address,
      coordinate: options.coordinate
    })
    this.init(options.coordinate).then(() => {
      let timer = setTimeout(() => {
        wx.hideLoading()
        clearTimeout(timer)
      }, 500)
    })
  },
  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    // 页面相关事件处理函数--监听用户下拉动作
    //显示顶部刷新图标
    wx.showNavigationBarLoading();
    // // 要刷新请求服务器的方法
    this.init(this.data.coordinate).then(() => {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
      wx.showToast({
        title: "刷新成功!",
        icon: "success"
      })
    })
  },
  data: {
    address: "", // 城市名
    coordinate: "", // 坐标
    daily: [] // 接收三天天气
  },
  /**
   * 初始化数据, 将天气映射天气对应的图片
   */
  init(coordinate) {
    return api.getDetailWeather(coordinate).then((res) => {
      for (let i = 0; i < res.data.daily.length; i++) {
        res.data.daily[i].img = this.reflectImageByWeather(res.data.daily[i].textDay)
      }
      console.log("res.data", res.data)
      this.setData({
        daily: res.data.daily
      })
    })
  },
  /**
   * 根据天气状况映射对应天气图片
   */
  reflectImageByWeather(weather) {
    if ("晴" === weather) {
      return "sun.svg"
    } else if ("阴" === weather || "多云" === weather || "少云" === weather || "晴间多云" === weather) {
      return "cloudy.svg"
    } else if ("小雨" === weather) {
      return "small-rain.svg"
    } else if ("中雨" === weather) {
      return "mid-rain.svg"
    } else if ("大雨" === weather) {
      return "big-rain.svg"
    } else if ("阵雨" === weather) {
      return "zhenyu.svg"
    } else if (weather.includes("雾")) {
      return "fog.svg"
    } else if (weather.includes("雷")) {
      return "thunder.svg"
    } else {
      return "sun.svg"
    }
  }
})