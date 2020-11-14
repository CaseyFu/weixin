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
    },
    data: {
        lecturer: [{
                "avatar": "https://caseyfu.gitee.io/static/img/wx/invitation/ayst.jpg", // 主讲人头像
                "name": "爱因斯坦", // 主讲人名字
                // 主讲人详情介绍
                "detail": "爱因斯坦出生于德国。1905年，爱因斯坦获苏黎世大学物理学博士学位，并提出光子假设、成功解释了光电效应。",
                "bgColor": "background:rgb(229,204,255)" // 板块背景颜色
            },
            {
                "avatar": "https://caseyfu.gitee.io/static/img/wx/invitation/oula.png",
                "name": "欧拉",
                "detail": "莱昂哈德·欧拉，瑞士数学家、自然科学家。欧拉出生于牧师家庭，自幼受父亲的影响。13岁时入读巴塞尔大学，15岁大学毕业，16岁获得硕士学位。",
                "bgColor": "background:rgb(204,204,255)"
            },
            {
                "avatar": "https://caseyfu.gitee.io/static/img/wx/invitation/rick.jpg",
                "name": "瑞克",
                "detail": "天才兼疯子科学家",
                "bgColor": "background:rgb(214,247,111)"
            }
        ]
    },
    formulation() {
        let plugin = requirePlugin('routePlan');
        let key = 'YFVBZ-OD4W6-YM4SD-MBH56-65Y3J-P6BYE'; //使用在腾讯位置服务申请的key
        let referer = 'invitation'; //调用插件的app的名称
        let endPoint = JSON.stringify({ //终点
            'name': '重庆市巴南区龙洲湾',
            'latitude': 29.401636,
            'longitude': 106.542885
        });
        wx.navigateTo({
            url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint
        });
    }
})