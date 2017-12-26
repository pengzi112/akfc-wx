//获取应用实例
var app = getApp()
Page({
  data: {
    tabborder0:"2px solid #3fa7ff",
    tabborder1:"",
    tabborder2:"",
    tabborder3:"",
    knowledge:[],
    imagelength:"",
    knowledgeshow:true,
    activeshow:false,
    diseaseshow:false,
    saidshow:false,
    disease:[],
    said:[]
  },
  onLoad: function () {
   this.loadknowledge();
  },
  leaningtab:function(event){
    var id=event.target.id;
    if(id=="knowledge"){
      this.setData({
        tabborder0:"2px solid #3fa7ff",
        tabborder1:"",
        tabborder2:"",
        tabborder3:"",
        knowledgeshow:true,
        activeshow:false,
        diseaseshow:false,
        saidshow:false
      });
      this.loadknowledge();
    };
    if(id=="active"){
      this.setData({
        tabborder0:"",
        tabborder1:"2px solid #3fa7ff",
        tabborder2:"",
        tabborder3:"",
        knowledgeshow:false,
        activeshow:true,
        diseaseshow:false,
        saidshow:false
      });
      this.loadactive();
    };
    if(id=="disease"){
      this.setData({
        tabborder0:"",
        tabborder1:"",
        tabborder2:"2px solid #3fa7ff",
        tabborder3:"",
        knowledgeshow:false,
        activeshow:false,
        diseaseshow:true,
        saidshow:false
      })
      this.loaddisease();
    };
    if(id=="said"){
      this.setData({
        tabborder0:"",
        tabborder1:"",
        tabborder2:"",
        tabborder3:"2px solid #3fa7ff",
        knowledgeshow:false,
        activeshow:false,
        diseaseshow:false,
        saidshow:true
      });
      this.loadsaid();
    }
  },
  loadknowledge:function(){
    var that=this;
    wx.request({
      url:"http://tianhaikryzx.com:8088/doctor/knowledge/api/getKnowledgeList.do",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        //console.log(res);
        var knowledgedata=res.data.data;
        that.setData({
          knowledge:knowledgedata,
        })
      }
    })
  },
  loadactive:function(){
    var that=this;
    wx.request({
      url:"http://tianhaikryzx.com:8088/doctor/activity/api/getActivityList.do",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        var knowledgedata=res.data.data;
        that.setData({
          knowledge:knowledgedata,
        })
      }
    })
  },
  loaddisease:function(){
    var that=this;
    wx.request({
      url:"http://tianhaikryzx.com:8088/doctor/disease/api/getDisease.do",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        var diseasedata=res.data.data;
        that.setData({
          disease:diseasedata,
        })
      }
    })
  },
  loadsaid:function(){
    var that=this;
    wx.request({
      url:"http://tianhaikryzx.com:8088/doctor/said/api/getSaidList.do",
      header: {
          'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res);
        var saiddata=res.data.data;
        that.setData({
          said:saiddata,
        })
      }
    })
  },
})
