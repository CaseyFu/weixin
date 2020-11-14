const {
    $Message
} = require('../../dist/base/index');
Page({
    onLoad() {
        wx.showLoading({
            title: 'Loading...',
        })
        let timer = setTimeout(() => {
            wx.hideLoading()
            clearTimeout(timer)
        }, 1000)
        this.render()
    },
    data: {
        arr: [{
                name: "xfk",
                age: 20
            },
            {
                name: "dfk",
                age: 21
            },
            {
                name: "ffk",
                age: 22
            },
        ],
        animationData: {},
        // 手势识别
        lastX: 0,
        lastY: 0,
        text: "没有滑动",
        currentGesture: 0,
        // canvas绘制图片
        canvas: null,
        cxt: null
    },

    // ********** 手势识别 **********
    handletouchmove(event) {
        // console.log("handletouchmove", event)
        if (this.data.currentGesture != 0) {
            return
        }
        let currentX = event.touches[0].pageX
        let currentY = event.touches[0].pageY
        let tx = currentX - this.data.lastX
        let ty = currentY - this.data.lastY
        let text = ""
        // 左右方向滑动
        if (Math.abs(tx) > Math.abs(ty)) {
            if (tx < 0) {
                text = "向左滑动"
                this.data.currentGesture = 1
            } else if (tx > 0) {
                text = "向右滑动"
                this.data.currentGesture = 2
            }
        }
        // 上下方向滑动
        else {
            if (ty < 0) {
                text = "向上滑动"
                this.data.currentGesture = 3
            } else if (ty > 0) {
                text = "向下滑动"
                this.data.currentGesture = 4
            }
        }
        //将当前坐标进行保存以进行下一次计算
        this.data.lastX = currentX
        this.data.lastY = currentY
        this.setData({
            text: text
        });
    },
    handletouchtart(event) {
        // console.log("handletouchtart", event)
        this.data.lastX = event.touches[0].pageX
        this.data.lastY = event.touches[0].pageY
    },
    handletouchend(event) {
        // console.log(event)
        this.data.currentGesture = 0
        this.setData({
            text: "没有滑动",
        });
    },

    // ********** 绘制canvas图片 **********
    render() {
        // 通过 SelectorQuery 获取 Canvas 节点
        wx.createSelectorQuery()
            .select('#canvas')
            .fields({
                node: true,
                size: true,
            }).exec(res => {
                // console.log(res)
                const canvas = res[0].node
                const ctx = canvas.getContext('2d')
                const dpr = wx.getSystemInfoSync().pixelRatio
                canvas.width = res[0].width * dpr
                canvas.height = res[0].height * dpr
                ctx.scale(dpr, dpr)
                const image = canvas.createImage()
                image.src = "/images/portal/notebook.png"
                image.onload = () => {
                    ctx.drawImage(image, 0, 0, 128, 128);
                }
            })
    },

    selectVideo() {
        let that = this
        wx.chooseVideo({
            sourceType: ['album', 'camera'],
            maxDuration: 60,
            camera: 'back',
            success(res) {
                that.setData({
                    videoSrc: res.tempFilePath
                })
            }
        })
    },
    startVideo() {
        this.videoContext.play()
    },
    stopVideo() {
        this.videoContext.pause()
    },
    saveVideo() {
        wx.saveVideoToPhotosAlbum({
            filePath: this.data.videoSrc,
            success(res) {
                $Message({
                    content: "保存成功",
                    type: "success"
                });
            }
        })
    },
    bindKeyInput(e) {
        this.setData({
            barrage: e.detail.value
        })
    },
    send() {
        let color = this.randomColor()
        this.videoContext.sendDanmu({
            text: this.data.barrage,
            color: color
        })
    },
    randomColor() {
        const rgb = []
        for (let i = 0; i < 3; ++i) {
            let color = Math.floor(Math.random() * 256).toString(16)
            color = color.length === 1 ? '0' + color : color
            rgb.push(color)
        }
        return '#' + rgb.join('')
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