Page({
  data:{
    // text:"这是一个页面"
    btnmessage:[
      {
        imagesrc:"../../images/wenzhen.png",
        title:"我的诊室",
        middlemark:"0",
        url:"../consult/consult"
      },
      {
        imagesrc:"../../images/xuexi.png",
        title:"学习",
         middlemark:"1",
         url:"../leaning/leaning"
      },
      {
        imagesrc:"../../images/zhaotonghang.png",
        title:"找同行",
         middlemark:"0",
         url:"../consult/consult"
      },
      {
        imagesrc:"../../images/chufang.png",
        title:"电子处方",
         middlemark:"0",
         url:"../consult/consult"
      },
      {
        imagesrc:"../../images/bingli.png",
        title:"发布病例",
         middlemark:"1",
         url:"../consult/consult"
      },
      {
        imagesrc:"../../images/shuoshuo.png",
        title:"发布说说",
         middlemark:"0",
         url:"../publishsaid/said"
      }
    ],
    hotmessage:[]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.hotload();
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
  hotload:function(){
      var that=this; 
      wx.request({
        url: 'http://tianhaikryzx.com:8088/doctor/hot/api/getHotList.do',
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
          console.log(res.data.data);
          var hotlist=res.data.data;
          that.setData({
            hotmessage:hotlist
          })
        }
      })
 }
})