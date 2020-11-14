/**
 * 1墙 2路 3终点 4箱子 5玩家 6煤矿 7铁矿 8金矿 9钻石矿 10红石矿 11书架
 * 
 */

//关卡1
let map1 = [
    [1, 1, 1, 1, 6, 1, 1, 1, 10, 1],
    [1, 5, 2, 2, 1, 1, 1, 0, 1, 1],
    [1, 1, 0, 4, 2, 2, 0, 0, 0, 1],
    [1, 0, 1, 2, 1, 2, 0, 1, 0, 1],
    [1, 3, 1, 2, 1, 2, 2, 1, 1, 1],
    [9, 3, 4, 2, 2, 1, 2, 1, 0, 7],
    [1, 3, 2, 2, 2, 4, 2, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 11, 11, 11, 1, 1, 0, 1],
    [1, 1, 8, 1, 1, 1, 1, 10, 1, 1]
]
//关卡2
let map2 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 4, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 4, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 4, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 3, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 3, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 3, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 9, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
//关卡3
let map3 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 4, 4, 4, 0, 0, 0, 0, 0, 1],
    [1, 3, 3, 3, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 6, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 7, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 8, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 9, 0, 1],
    [1, 0, 0, 11, 0, 0, 0, 0, 10, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
//关卡4
let map4 = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 5, 4, 3, 0, 0, 0, 0, 0, 1],
    [1, 0, 4, 3, 0, 0, 0, 0, 0, 1],
    [1, 0, 4, 3, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 9, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 9, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 9, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 9, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 9, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

let round = {
    maps: [map1, map2, map3, map4]
}

//地图图层数据
let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

//箱子图层数据
let box = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
//方块的边长

let w = 30

//游戏主角小鸟所在的行和列
let row = 0
let col = 0
/**
 * 步数
 */
let step = 0
/**
 * 计时器
 */
let timer = null
Page({
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        // 获取关卡
        let level = options.level
        // console.log(options.level)
        // console.log("length", round.maps.length)
        if (level >= round.maps.length) {
            // 最后一关
            level -= 1
        }
        // console.log(level)

        // 每50毫秒执行一次函数 countdown
        timer = setInterval(this.countdown, 50)

        // let level = 1
        // 重置时间
        // startTime = new Date()
        // 步数置0
        step = 0
        // console.log(startTime)
        //更新关卡标题
        this.setData({
            level: parseInt(level) + 1
        })

        //创建画布上下文
        this.ctx = wx.createCanvasContext('myCanvas');

        //初始化地图
        this.initMap(level)

        //绘制地图
        this.render()
    },
    data: {
        level: 0, // 当前关卡数
        lastX: 0, // 记录最后滑动的 x 轴坐标
        lastY: 0, // 记录最后滑动的 y 轴坐标
        text: "没有滑动", // 滑动的状态
        currentGesture: 0, // 控制当前手势
        canvas: true, // 控制 canvas 的显示, 解决canvas优先级过高问题
        buttons: [{ // 通关后的消息确认框
            text: '回到主页'
        }, {
            text: '下一关'
        }],
        dialogShow: false, // 控制 通关后的消息确认框 的显示
        step: 0, // 记录当前滑动次数
        second: 0, // 记录时间 秒
        millisecond: 0 // 记录时间 毫秒

    },


    /**
     * 1墙 2路 3终点 4箱子 5玩家 6煤矿 7铁矿 9金矿 10钻石矿 11红石矿 12书架
     */
    initMap(level) {
        // 读取原始地图数据
        let mapData = round.maps[level]

        // 使用双重for循环记录地图数据
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                box[i][j] = 0;
                map[i][j] = mapData[i][j];
                // 当前位置是箱子
                if (mapData[i][j] == 4) {
                    box[i][j] = 4;
                    map[i][j] = 2;
                } else if (mapData[i][j] == 5) {
                    map[i][j] = 2;
                    // 更新对应行列
                    row = i;
                    col = j;
                }
            }
        }
    },

    /**
     * 1墙 2路 3终点 4箱子 5玩家 6煤矿 7铁矿 8金矿 9钻石矿 10红石矿 11书架
     */
    render() {
        // 先清空画布
        this.ctx.clearRect(0, 0, 300, 300)

        //使用双重for循环绘制地图
        for (var i = 0; i < map.length; i++) {
            for (var j = 0; j < map[i].length; j++) {
                //默认当前是道路
                let img = 'path-mud.png'
                if (1 === map[i][j]) {
                    // 当前位置是墙
                    img = 'stone-1.png'
                } else if (3 === map[i][j]) {
                    // 当前位置是终点
                    img = 'end-board.png'
                } else if (6 === map[i][j]) {
                    // 当前位置是煤矿
                    img = 'path-coal.png'
                } else if (7 === map[i][j]) {
                    // 当前位置是铁矿
                    img = 'path-iron.png'
                } else if (8 === map[i][j]) {
                    // 当前位置是金矿
                    img = 'path-gold.png'
                } else if (9 === map[i][j]) {
                    // 当前位置是钻石矿
                    img = 'path-diamond.png'
                } else if (10 === map[i][j]) {
                    // 当前位置是红石矿
                    img = 'path-redstone.png'
                } else if (11 === map[i][j]) {
                    // 当前位置是书架
                    img = 'path-bookshelf.png'
                }
                this.ctx.drawImage('/images/push-box/' + img, j * w, i * w, w, w)

                //叠加绘制箱子
                if (box[i][j] == 4) {
                    this.ctx.drawImage('/images/push-box/box.png', j * w, i * w, w, w)
                }
            }
        }
        //叠加绘制玩家
        this.ctx.drawImage('/images/push-box/player-1.png', col * w, row * w, w, w)

        //渲染画布
        this.ctx.draw()
    },
    /**
     * 监听滑动
     */
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
                this.goLeft()
            } else if (tx > 0) {
                text = "向右滑动"
                this.data.currentGesture = 2
                this.goRight()
            }

        } else {
            // 上下方向滑动
            if (ty < 0) {
                text = "向上滑动"
                this.data.currentGesture = 3
                this.goUp()
            } else if (ty > 0) {
                text = "向下滑动"
                this.data.currentGesture = 4
                this.goDown()
            }
        }
        //将当前坐标进行保存以进行下一次计算
        this.data.lastX = currentX
        this.data.lastY = currentY
        this.setData({
            text
        });
        // 步数递增1
        this.addStep()
    },
    /**
     * 
     * 监听点击事件(手指碰到屏幕)
     */
    handletouchtart(event) {
        // console.log("handletouchtart", event)
        this.data.lastX = event.touches[0].pageX
        this.data.lastY = event.touches[0].pageY
    },
    /**
     * 
     * 监听点击事件(手指离开屏幕)
     */
    handletouchend(event) {
        // console.log(event)
        this.data.currentGesture = 0
        this.setData({
            text: "没有滑动",
        });
    },

    /**
     * 向上
     */
    goUp() {
        // 如果玩家不在最顶端才考虑上移
        if (row != 0) {
            // 如果上方不是墙也不是箱子
            if (map[row - 1][col] != 1 && box[row - 1][col] != 4) {
                row--
            } else if (box[row - 1][col] == 4) {
                // 如果上方是箱子
                // 如果箱子不在最顶端才可以考虑推动
                if (row - 1 != 0) {
                    // 如果箱子上边不是墙或另一个箱子
                    if (map[row - 2][col] != 1 && box[row - 2][col] != 4) {
                        // 更新箱子数据
                        box[row - 2][col] = 4
                        box[row - 1][col] = 0
                        row--

                    }
                }
            }
            // 重新渲染地图
            this.render();
            // 检查游戏是否成功
            this.checkWin();
        }
    },

    /**
     * 向下
     */
    goDown() {
        // 如果玩家不在最底端才考虑下移
        if (row != map.length - 1) {
            // 如果上方不是墙也不是箱子
            if (map[row + 1][col] != 1 && box[row + 1][col] != 4) {
                row++;
            } else if (box[row + 1][col] == 4) {
                // 如果下方是箱子
                // 如果箱子不在最底端才可以考虑推动
                if (row - 1 != map.length - 1) {
                    // 如果箱子下边不是墙或另一个箱子
                    if (map[row + 2][col] != 1 && box[row + 2][col] != 4) {
                        // 更新箱子数据
                        box[row + 2][col] = 4;
                        box[row + 1][col] = 0;
                        row++;

                    }
                }
            }
            // 重新渲染地图
            this.render();
            // 检查游戏是否成功
            this.checkWin();
        }
    },

    /**
     * 向左
     */
    goLeft() {
        // 如果玩家不在最左端才考虑左移
        if (col != 0) {
            // 如果左方不是墙也不是箱子
            if (map[row][col - 1] != 1 && box[row][col - 1] != 4) {
                col--;
            } else if (box[row][col - 1] == 4) {
                // 如果左方是箱子
                // 如果箱子不在最左端才可以考虑推动
                if (col - 1 != 0) {
                    // 如果箱子左边不是墙或另一个箱子
                    if (map[row][col - 2] != 1 && box[row][col - 2] != 4) {
                        // 更新箱子数据
                        box[row][col - 2] = 4;
                        box[row][col - 1] = 0;
                        col--;

                    }
                }
            }
            // 重新渲染地图
            this.render();
            // 检查游戏是否成功
            this.checkWin();
        }
    },

    /**
     * 向右
     */
    goRight() {
        // 如果小鸟不在最右端才考虑右移
        if (col != map.length - 1) {
            // 如果右方不是墙也不是箱子
            if (map[row][col + 1] != 1 && box[row][col + 1] != 4) {
                col++;
            } else if (box[row][col + 1] == 4) {
                // 如果右方是箱子
                // 如果箱子不在最右端才可以考虑推动
                if (col + 1 != map.length - 1) {
                    // 如果箱子右边不是墙或另一个箱子
                    if (map[row][col + 2] != 1 && box[row][col + 2] != 4) {
                        // 更新箱子数据
                        box[row][col + 2] = 4;
                        box[row][col + 1] = 0;
                        col++;

                    }
                }
            }
            // 重新渲染地图
            this.render();
            // 检查游戏是否成功
            this.checkWin()
        }
    },

    /**
     * 判断游戏是否结束
     * true 游戏成功
     */
    isWin() {
        // 用双重for循环遍历整个数组
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[i].length; j++) {
                // 如果有箱子没有放回终点
                if (box[i][j] == 4 && map[i][j] != 3) {
                    return false;
                }
            }
        }
        return true;
    },

    /**
     * 处理对话框, 返回主页, 或是跳转到下一关
     */
    tapDialogButton(e) {
        // console.log(e.detail.index)
        if (0 === e.detail.index) {
            // 跳转到游戏主页
            wx.redirectTo({
                url: '/pages/push-box/home/index'
            })
        } else if (1 === e.detail.index) {
            // 下一关
            let canvas = !this.data.canvas
            this.setData({
                canvas
            })
            wx.redirectTo({
                url: '/pages/push-box/game/index?level=' + this.data.level,
            })
        }
    },

    /**
     * 游戏成功处理
     */
    checkWin() {
        if (this.isWin()) {
            // let timeConsume = new Date() - startTime
            // console.log("time", )
            // console.log("step", step)
            let canvas = !this.data.canvas
            this.setData({
                dialogShow: true,
                // timeConsume,
                canvas
            })
            clearInterval(timer)
        }
    },
    addStep() {
        step++
        this.setData({
            step
        });
    },
    /**
     * 重新开始游戏
     */
    restartGame() {
        step = 0;
        this.setData({
            second: 0,
            millisecond: 0,
            step

        })

        // 初始化地图数据
        // console.log(this.data.level)
        this.initMap(this.data.level - 1)

        // 重新渲染画布
        this.render()
    },
    /**
     * 读秒
     */
    countdown() {
        let millisecond = this.data.millisecond + 50;
        let second = this.data.second
        if (millisecond >= 1000) {
            millisecond = 0;
            second++
        }
        this.setData({
            second,
            millisecond
        })
    }
})