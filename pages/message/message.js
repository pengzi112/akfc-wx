Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.modalshow();
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    this.modalshow();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  modalshow: function(){
     wx.showModal({
       title:'登录状态',
       content:'您还没有登录，登录才能查看信息',
       success:function(res){
         if(res.confirm){
           wx.navigateTo({
             url: '../mycenter/mycenter',
           })
         }else{
            wx.navigateTo({
             url: '../mycenter/mycenter',
           })
         }
       }
     })
  }
})