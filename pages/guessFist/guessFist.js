// pages/guessFist/guessFist.js
let ti, to, titen   //计时器用全局
let round_num = 1
const Arr_imfo = [
     '请选择,倒计时后将自动选择', 
     '恭喜你,在本回合中胜利',
     '很遗憾,在本回合中失败', 
     '势均力敌,本回合平局'
]
Page({
     data: {
          win_height: 0, //自适应屏幕高度
          r: false, //顶部标题锁        
          nextBureau: true,   //加载时控制下一局按钮隐藏,true
          test:0,
          timeOutLock:true,   //正在思考,还未选择,true
          timeDown:'',        //10s计时器


          chooseButton: false, //选择后锁定
          equality: 0, //平局
          round: 1, //回合数
          victory: 0, //胜利数
          defeat: 0, //输
          virate: 0, //胜率
          second: 10, //秒表
          robot: [
               "image/stone.png",
               "image/scissor.png",
               "image/cloth.png"
          ],
          imfor: '点击下方图片开始游戏',
          result: 'image/delight.png',
          imagerandom: 'image/robot.png',
          imageuser: 'image/headimg.jpg',
     },
     choose: function(e) {
          if (this.data.chooseButton == false) return; //点击后无法再选择
          clearInterval(ti)        
          clearTimeout(to)
          clearInterval(titen)     //停掉10s

          let usernum, robotnum
          usernum = e.currentTarget.id;
          this.setData({
               imageuser: this.data.robot[usernum],
               timeOutLock:false,       //点击后timeout关闭
               second: 10,              //重置10s
               nextBureau: false,
          })
          robotnum = this.data.imagerandom
          this.judge(robotnum, usernum)
     },

     //判断结果
     judge:function(robotnum, usernum){
          if (this.data.imagerandom == this.data.robot[0]) {
               robotnum = 0;
          } else if (this.data.imagerandom == this.data.robot[1]) {
               robotnum = 1;
          } else {
               robotnum = 2;
          }
          if (usernum == robotnum) {
               this.setData({
                    equality: this.data.equality + 1,
                    result: 'image/equality.png',
                    imfor: Arr_imfo[3],
               })
          } else if ((usernum - robotnum == 2) || (usernum - robotnum == -1)) {
               this.setData({
                    victory: this.data.victory + 1,
                    result: 'image/victory.png',
                    imfor: Arr_imfo[1],
               })
          } else {
               this.setData({
                    defeat: this.data.defeat + 1,
                    result: 'image/defeat.png',
                    imfor: Arr_imfo[2],
               })
          }
          //计算胜率
          let test = this.calculateVictoryRate(this.data.victory, this.data.round)
          this.setData({
               chooseButton: false,
               time: false,
               virate: test,
          })
     },
     start: function() {
          if (this.data.result != 'image/delight.png')
               return;
          this.timeInterval()      //图片闪动
          this.timeOut()
          this.count_down()
          this.setData({
               chooseButton: true,
               imageuser: 'image/think.png',
               r: true,
               imfor: Arr_imfo[0],
               nextBureau:true,
          })
     },
     onLoad: function(options) {
          let that = this
          wx.getSystemInfo({ //获取用户屏幕高度,单位px,屏幕高度自适应
               success: function(res) {
                    console.log(res)
                    let height = res.windowHeight
                    that.setData({
                         win_height: height,
                    })
               },
          })
     },
     nextBureau: function() {
          this.timeInterval() //机器开始随机
          this.timeOut()
          this.count_down()
          round_num++
          this.setData({
               chooseButton: true,
               imageuser: 'image/think.png',
               imfor: Arr_imfo[0],
               round:round_num,
               second:10,
               nextBureau:true,
          })
     },
     calculateVictoryRate: function(x, y) {  //计算胜率
          return (x / y * 100).toFixed(1)
     },
     timeInterval: function() {              //机器人每隔100毫秒出拳,图片闪动
          ti = setInterval(this.roundTime, 100)
     },
     timeOut:function(){                     //10s倒计时后随机选择
          var that = this
          to = setTimeout(function(){
               if(that.data.timeOutLock == false){
                    clearTimeout(to)
                    return
               } 
               clearInterval(ti)
               clearInterval(titen)     //停掉10s
               let usernum, robotnum

               usernum = parseInt(Math.random()*3)
               that.setData({
                    imageuser: that.data.robot[usernum],
                    nextBureau: false,
               })
               robotnum = that.data.imagerandom
               that.judge(robotnum, usernum)
          },10000)
          that.setData({
               test:to,
               timeOutLock:true,
               second:10,
          })
     },

     roundTime: function() {                 //随机选择
          this.setData({
               imagerandom: this.data.robot[parseInt(Math.random() * 3)]
          })
     },
     count_down:function(){
          let that = this
          let time = that.data.second
          titen = setInterval(function(){
               time--
               that.setData({
                    second: time,
               })
          },1000)
     },
     onReady: function() {

     },

     /**
      * 生命周期函数--监听页面显示
      */
     onShow: function() {

     },

     /**
      * 生命周期函数--监听页面隐藏
      */
     onHide: function() {

     },

     /**
      * 生命周期函数--监听页面卸载
      */
     onUnload: function() {

     },

     /**
      * 页面相关事件处理函数--监听用户下拉动作
      */
     onPullDownRefresh: function() {

     },

     /**
      * 页面上拉触底事件的处理函数
      */
     onReachBottom: function() {

     },

     /**
      * 用户点击右上角分享
      */
     onShareAppMessage: function() {

     }
})