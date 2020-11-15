/**
 * 返回实时位置坐标对象（经纬度）
 */
function realLocation() {
  return new Promise((resolve, reject) => {
    wx.getLocation({
      type: "gcj02",
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        let coordinate = {
          longitude: res.longitude,
          latitude: res.latitude
        }
        resolve(coordinate)
      },
      fail: function () {
        reject("realLocation() failed")
      }
    })
  })
}
/**
 * 地理编码 详细地址 -> 经纬度
 */
function geoCoding(address) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://restapi.amap.com/v3/geocode/geo",
      data: {
        key: "7f002f50ea4991e66d98e5b83ae0ffbd",
        address: address
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        console.log("地理编码", res)
        resolve({
          address: res.data.geocodes[0].formatted_address,
          coordinate: res.data.geocodes[0].location
        })
      },
      fail: function () {
        reject("geoCoding() failed")
      }
    })
  })
}
/**
 * 逆地理编码 经纬度->详细地址
 */
function reverseGeoCoding(coordinate) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://restapi.amap.com/v3/geocode/regeo",
      data: {
        key: "7f002f50ea4991e66d98e5b83ae0ffbd",
        location: coordinate.longitude + "," + coordinate.latitude
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        let address = {
          province: res.data.regeocode.addressComponent.province,
          city: res.data.regeocode.addressComponent.city,
          district: res.data.regeocode.addressComponent.district,
          adcode: res.data.regeocode.addressComponent.adcode
        }
        resolve(address)
      },
      fail: function () {
        reject("reverseGeoCoding() failed")
      }
    })
  })
}

/**
 * 根据 adcode 获取实时天气
 * @param {Integer} adcode 城市编码
 */
function getWeather(adcode) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://restapi.amap.com/v3/weather/weatherInfo",
      data: {
        key: "7f002f50ea4991e66d98e5b83ae0ffbd",
        city: adcode,
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        resolve(res)
      },
      fail: function () {
        reject("getWeather() failed")
      }
    })
  })
}

/**
 * 根据经纬度坐标获取和风天气近3天的天气情况
 * @param {String} coordinate 经纬度坐标
 */
function getDetailWeather(coordinate) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: "https://devapi.heweather.net/v7/weather/3d",
      data: {
        key: "90036f0854254799a96f12fa05c52909",
        location: coordinate
      },
      method: "GET",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        resolve(res)
      },
      fail: function () {
        reject("getWeather() failed")
      }
    })
  })
}

module.exports = {
  realLocation,
  geoCoding,
  reverseGeoCoding,
  getWeather,
  getDetailWeather
}