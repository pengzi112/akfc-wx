Page({
  data:{
    // text:"这是一个页面"
    category:[],
    hotpro:[],
    newpro:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.loadcategory();
    this.loadhotpro();
    this.loadnewpro();
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
  loadcategory:function(){
      var that=this;
      wx.request({
          url:"http://tianhaikryzx.com:8088/doctor/category/api/getCategory.do",
          header:{
              "Content-Type":"application/json"
          },
          success: function(res){
            //  console.log(res);
              var category=res.data.data;
              var partmessage=category.slice(0,8);
              that.setData({
                  category:partmessage,
              })
          }
      })
  },
  loadhotpro:function(){
      var that=this;
      wx.request({
          url:"http://tianhaikryzx.com:8088/doctor/category/api/getHot.do",
          header:{
              "Content-Type":"application/json"
          },
          success: function(res){
              //console.log(res);
             var hotpro=res.data.data;
             var partmessage=hotpro.slice(0,4);
             that.setData({
                  hotpro:partmessage
              })
          }
      })
  },
  loadnewpro:function(){
      var that=this;
      wx.request({
          url:"http://tianhaikryzx.com:8088/doctor/category/api/getLatest.do",
          header:{
              "Content-Type":"application/json"
          },
          success: function(res){
              //console.log(res);
             var newpro=res.data.data;
             var partmessage=newpro.slice(0,4);
             that.setData({
                  newpro:partmessage
              })
          }
      })
  },
  Tocategroy:function(){
    wx.navigateTo({
        url:"templist/templist?id=category"
    })
  },
  Tohotpro:function(){
     wx.navigateTo({
         url:"templist/templist?id=hotpro"
     })
  },
  Tonewpro:function(){
     wx.navigateTo({
         url:"templist/templist?id=newpro"
     })
  },
  search:function(){
     wx.navigateTo({
         url:"templist/templist?id=search"
     })
  }
})