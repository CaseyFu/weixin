Page({
  data: {
       Arr:[
            1,2,3,4,5,6,7,8,9
       ],
       score:61,
       testName0:{firstName:"f", lastName:"xk"},
       testName1:{firstName:"f", lastName:"kk"},
       testName2:{firstName:"f", lastName:"xx"},
       count:2,
  },
  viewTap(){
       console.log("viewTap");
  },
  add:function(){
       this.data.count++;
  },
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})