Page({
  data:{
    // text:"这是一个页面"
    name:"",
    star:"",
    status:"",
    photo:"",
    hospital:"",
    special:"",
    message:[
      {
        title:"擅长",
        content:"1992年毕业于山西省中医学院，本科学历。现任大同市中医院皮肤科主任。本科学历。现任大同市中医院皮肤科主任本科学历。现任大同市中医院皮肤科主任本科学历。现任大同市中医院皮肤科主任",
      },
      {
        title:"发布论文",
        content:"《正确认识宫颈糜烂》",
      },
      {
        title:"所获奖项",
        content:"《妇科医生奖》 《腹腔镜专业技术奖》"
      }
    ]
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    this.setData({
      name : options.name,
      photo: options.photo,
      star : options.star,
      status : options.status,
      hospital : options.hospital,
      special : options.special,
    })
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
  updown:function(){
    var contents=document.getElementsByClassName("content");
    for(var i=0;i<contents.length;i++){
      console.log(contents[i].style.height);
    }
  }
})