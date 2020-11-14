const {
    $Message
} = require('../../dist/base/index')
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
        this.detailLocalData()
    },
    data: {
        modalVisible: false,
        inputValue: "",
        msg: "本地存储",
        status: false,
        key: "",
        data: "",
        storageInfo: {
            "currentSize": 0,
            "surplusSize": 0,
            "limitSize": 0,
            "currentPortion": 0,
            "surplusPortion": 0
        },
        allKeys: {
            data: "空无一物, 请刷新",
            status: true
        }
    },
    getLocalData() {
        wx.getStorage({
            key: this.data.key,
            success: (e) => {
                this.setData({
                    data: e.data
                })
            },
            fail: (e) => {
                this.setData({
                    data: "读取失败" + e.errMsg
                })
            }
        })
    },
    setLocalData() {
        wx.setStorage({
            key: this.data.key,
            data: this.data.data,
            success: () => {
                $Message({
                    content: '写入成功',
                    type: "success"
                });
            },
            fail: () => {
                $Message({
                    content: '写入失败',
                    type: "error"
                });
            }
        })
    },
    detailLocalData() {
        wx.getStorageInfo({
            success: (e) => {
                let surplusSize = parseInt(e.limitSize) - parseInt(e.currentSize)
                let currentPortion = (parseFloat(e.currentSize) / parseFloat(e.limitSize)).toFixed(2)
                let surplusPortion = (parseFloat(e.surplusSize) / parseFloat(e.limitSize)).toFixed(2)
                this.setData({
                    "storageInfo.currentSize": e.currentSize,
                    "storageInfo.surplusSize": surplusSize,
                    "storageInfo.limitSize": e.limitSize,
                    "storageInfo.currentPortion": currentPortion,
                    "storageInfo.surplusPortion": surplusPortion
                })
            }
        })
    },
    removeLocalData() {
        if (this.data.key == "") return
        wx.removeStorage({
            key: this.data.key,
            success: () => {
                $Message({
                    content: "删除" + this.data.key + "成功",
                    type: "success"
                });
            },
            fail: (e) => {
                $Message({
                    content: "删除" + this.data.key + "失败:" + e.errMsg,
                    type: "error",
                    duration: 4
                });
            }
        })
    },
    printLocalData() {
        if (this.data.allKeys.status) {
            wx.getStorageInfo({
                success: (e) => {
                    this.setData({
                        "allKeys.data": e.keys,
                        "allKeys.status": false
                    })
                }
            })
        } else {
            this.setData({
                "allKeys.data": "空无一物, 请刷新",
                "allKeys.status": true
            })
        }
    },
    bindKeyInput(e) {
        this.setData({
            inputValue: e.detail.value,
            key: e.detail.value,
        })
    },
    bindDataInput(e) {
        this.setData({
            data: e.detail.value,
        })
    },
    cleanLocalData() {
        this.setData({
            modalVisible: true
        })
    },
    handleCloseOk() {
        this.setData({
            modalVisible: false
        })
        wx.clearStorage()
        $Message({
            content: "清空成功",
            type: "success",
            duration: 3
        });
    },
    handleCloseNot() {
        this.setData({
            modalVisible: false
        })
    }

})