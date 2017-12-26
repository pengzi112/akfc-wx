Page({
  data:{
    saidimg:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  getphotos:function(){
    var that=this;
    wx.chooseImage({
    count: 3, // 最多可以选择的图片张数，默认9
    sizeType: ['original', 'compressed'], // original 原图，compressed 压缩图，默认二者都有
    sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
    success: function(res){
      console.log(res);
      var imgsrc=res.tempFilePaths;
      that.setData({
        saidimg:imgsrc
      })
    },
    fail: function() { 
        // fail
    },
    complete: function() {
        // complete
    }
    })
  },
  publish:function(){
    wx.showToast({
      title:"待开发。。。",
      icon:'success',
      duration:2000
    })
  }
})