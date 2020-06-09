// pages/video/video.js
Page({
    onReady() {
        // 生命周期函数--监听页面初次渲染完成
        this.audioCtx = wx.createAudioContext('myAudio')
    },
    data: {
        poster: "/images/wangjie.png",
        name: '不浪漫罪名',
        author: '王杰',
        src: "/static/music/noromantic.mp3",
        song: [{
            poster: "/images/wangjie.png",
            name: "不浪漫罪名",
            author: "王杰",
            src: "/static/music/noromantic.mp3"
        }, {
            poster: "/images/taylor.png",
            name: "Treacherous",
            author: "Taylor Swift",
            src: "/static/music/Treacherous.mp3"
        }]
    },
    audioPlay() {
        this.audioCtx.play()
    },
    audioPause() {
        this.audioCtx.pause()
    },
    audioStart() {
        this.audioCtx.seek(0)

    },
    play(e) {
        this.audioCtx.pause()
        this.setData({
            poster: e.currentTarget.dataset.param.poster,
            name: e.currentTarget.dataset.param.name,
            author: e.currentTarget.dataset.param.author,
            src: e.currentTarget.dataset.param.src,
        })
        this.audioCtx.play()
    }
})