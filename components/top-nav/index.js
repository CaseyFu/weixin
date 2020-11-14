const app = getApp();
Component({
    properties: {
        /**
         * 导航栏标题
         */
        navTitle: {
            type: String,
            value: ""
        },
        /**
         * 导航栏标题颜色
         */
        navTitleColor: {
            type: String,
            value: "white"
        },
        /**
         * 导航栏样式
         */
        navStyle: {
            type: String,
            value: ""
        },
        /**
         * 是否是搜索框
         */
        isSearch: {
            type: Boolean,
            value: false
        },
        /**
         * 返回跳转到哪个页面
         */
        backUrl: {
            type: String,
            value: ""
        },
        /**
         * 是否有返回主页按钮
         */
        haveHome: {
            type: Boolean,
            value: false
        }
    },
    data: {
        havaBack: false, // 是否有返回按钮
        statusBarHeight: 0, // 状态栏高度
        navbarHeight: 0, // 顶部导航栏高度
        navbarBtn: { // 胶囊位置信息
            height: 0,
            width: 0,
            top: 0,
            bottom: 0,
            right: 0
        },
        cusnavH: 0, //title高度
    },
    // 微信7.0.0支持wx.getMenuButtonBoundingClientRect()获得胶囊按钮高度
    attached() {
        if (!app.globalData.systeminfo) {
            app.globalData.systeminfo = wx.getSystemInfoSync();
        }
        if (!app.globalData.headerBtnPosi) app.globalData.headerBtnPosi = wx.getMenuButtonBoundingClientRect();
        // console.log(app.globalData)
        let statusBarHeight = app.globalData.systeminfo.statusBarHeight // 状态栏高度
        let headerPosi = app.globalData.headerBtnPosi // 胶囊位置信息
        // console.log(statusBarHeight)
        // console.log(headerPosi)
        let btnPosi = { // 胶囊实际位置，坐标信息不是左上角原点
            height: headerPosi.height,
            width: headerPosi.width,
            top: headerPosi.top - statusBarHeight, // 胶囊top - 状态栏高度
            bottom: headerPosi.bottom - headerPosi.height - statusBarHeight, // 胶囊bottom - 胶囊height - 状态栏height （胶囊实际bottom 为距离导航栏底部的长度）
            right: app.globalData.systeminfo.windowWidth - headerPosi.right // 这里不能获取 屏幕宽度，PC端打开小程序会有BUG，要获取窗口高度 - 胶囊right
        }
        let haveBack = false;
        if (this.properties.backUrl !== "") { // backUrl有值时显示返回按钮
            haveBack = true;
        }
        // console.log("home: ", this.properties.haveHome)
        var cusnavH = btnPosi.height + btnPosi.top + btnPosi.bottom // 导航高度
        // console.log(app.globalData.systeminfo.windowWidth, headerPosi.width)
        this.setData({
            haveBack: haveBack, // 获取是否是通过分享进入的小程序
            statusBarHeight: statusBarHeight,
            navbarHeight: headerPosi.bottom + btnPosi.bottom, // 胶囊bottom + 胶囊实际bottom
            navbarBtn: btnPosi,
            cusnavH: cusnavH
        });
        //将实际nav高度传给父类页面
        this.triggerEvent('commonNavAttr', {
            height: headerPosi.bottom + btnPosi.bottom
        });
    },
    methods: {
        toPrevious() {
            if (this.properties.backUrl.includes("/pages/portal/index") || this.properties.backUrl.includes("/pages/home/index")) {
                wx.switchTab({
                    url: this.properties.backUrl
                })
            } else {
                wx.redirectTo({
                    url: this.properties.backUrl
                })
            }
        },
        bindKeyInput: function (e) {
            console.log(e.detail.value);
        },
        toHome() {
            wx.switchTab({
                url: '/pages/home/index',
            })
        }
    }
})