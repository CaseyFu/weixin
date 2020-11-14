let api = require('../../../libs/api.js');

Page({
  /**
   * 生命周期函数--监听页面加载
   * 1. 加载实时位置信息
   */
  onLoad() {
    wx.showLoading({
      title: 'Loading...',
    })
    this.init().then(() => {
      let timer = setTimeout(() => {
        wx.hideLoading()
        clearTimeout(timer)
      }, 500)
    })
    this.getDate()
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    // 显示顶部刷新图标
    wx.showNavigationBarLoading();
    // 要刷新请求服务器的方法
    if (this.data.adcode === "") {
      this.init().then(() => {
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        wx.showToast({
          title: "刷新成功!",
          icon: "success"
        })
      })
    } else {
      api.getWeather(this.data.adcode).then((res) => {
        this.setData({
          data: res.data.lives[0]
        })
        wx.hideNavigationBarLoading()
        wx.stopPullDownRefresh()
        wx.showToast({
          title: "刷新成功!",
          icon: "success"
        })
      })
    }
  },
  data: {
    data: {}, // 获取天气和城市数据
    region: ["", "", ""], // 城市选择器三级联动
    coordinate: {}, // 经纬度坐标
    adcode: "", // 城市编码
    date: "", // 日期
    weatherImage: "sun.svg" // 天气图片
  },
  /**
   * 1. 获取实时位置函数 - 获得经度,纬度
   * 2. 根据经度,纬度获得adcode
   * 3. 根据adcode获取首页天气的简单展示
   * 4. 根据选择的 重庆市重庆市渝北区 获得经度纬度, 根据经度纬度获取和风天气
   */
  init() {
    // 返回一个Promise
    return api.realLocation().then((coordinate) => {
      // 请求逆地理编码
      api.reverseGeoCoding(coordinate).then((res) => {
        let city = res.city ? res.city : res.province
        let region = [res.province, city, res.district]
        this.setData({
          region: region
        })
        return Promise.resolve(res.adcode)
      }).then((adcode) => {
        // 根据城市编码 adcode 请求天气数据
        api.getWeather(adcode).then((res) => {
          let weatherImage = this.reflectImageByWeather(res.data.lives[0].weather)
          this.setData({
            data: res.data.lives[0],
            adcode: adcode,
            weatherImage: weatherImage
          })
        })
      })
    })
  },
  /**
   * 获取日期
   */
  getDate() {
    let date = new Date();
    this.setData({
      date: date.getFullYear() + "年" + (date.getMonth() + 1) + "月" + date.getDate() + "日"
    })
  },
  /**
   * 重新定位，需要更新城市选择器、天气
   */
  reLocation() {
    wx.showLoading({
      title: '重新定位中...',
    })
    this.init().then(() => {
      wx.hideLoading({
        success: () => {
          wx.showToast({
            title: '定位成功!',
            icon: "success"
          })
        },
      })
    })
  },
  /**
   * 城市选择器
   */
  changeRegin(e) {
    // console.log(e)
    this.setData({
      region: e.detail.value,
      adcode: e.detail.code[2]
    })
    api.getWeather(e.detail.code[2]).then((res) => {
      this.setData({
        data: res.data.lives[0]
      })
    })
  },
  /**
   * 根据天气状况映射对应天气图片
   */
  reflectImageByWeather(weather) {
    // console.log(weather)
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
  },
  /**
   * 详情页面跳转
   */
  toDetail() {
    api.geoCoding(this.data.region.toString()).then((res) => {
      wx.redirectTo({
        url: '/pages/weather/detail/index?address=' + res.address + '&coordinate=' + res.coordinate
      })
    })
  }
})