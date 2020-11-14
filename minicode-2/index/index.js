const app = getApp()

Page({
  data: {
    canvas: null,
    ctx: null
  },

  onLoad: function () {
    // 通过 SelectorQuery 获取 Canvas 节点
    wx.createSelectorQuery()
      .select('#canvas')
      .fields({
        node: true,
        size: true,
      }).exec(res => {
        console.log(res)
        const canvas = res[0].node
        const ctx = canvas.getContext('2d')
        const image = canvas.createImage()
        image.src = "./car.png"
        image.onload = () => {
          ctx.drawImage(image, 0, 0, 150, 100);
        }
      })
  }
})