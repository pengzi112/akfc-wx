Page({
  data:{
    // text:"这是一个页面"
    iscategory:false,
    ishotpro:false,
    isnewpro:false,
    iscategorylist:false,
    categorylist:[],
    ishalfstar:true,
    issearch:false,
    categoryname:""
  },
  onLoad:function(options){
    //判断为何种列表
    var listid=options.id;
   // console.log(options);
    if(listid=="category"){//分类列表
      this.loadcategory();
      this.setData({
          iscategory:"true",
      })
    };
    if(listid=="hotpro"){//热门医生列表
      this.loadhotpro();
      this.setData({
          ishotpro:"true",
      })
    };
    if(listid=="newpro"){//最新医生列表
      this.loadnewpro();
      this.setData({
          isnewpro:"true",
      })
    };
    if(listid=="categorylist"){//根据类别获取医生列表
      var categoryid=options.categoryid;
      var name=options.name;
      this.loadcategorypro(categoryid);
      this.setData({
          iscategorylist:"true",
          categoryname:name,
      })
    };
    if(listid=="search"){//搜索列表
      this.setData({
          issearch:"true",
      })
    };
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
              that.setData({
                  categorylist:category,
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
              var category=res.data.data;
              that.setData({
                  categorylist:category,
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
              var category=res.data.data;
              that.setData({
                  categorylist:category,
              })
          }
      })
  },
  loadcategorypro: function(categoryid){
      var that=this;
      wx.request({
          url:"http://tianhaikryzx.com:8088/doctor/category/api/getCategoryUser.do",
          data:{
            categoryid:categoryid
          },
          header:{
              "Content-Type":"application/json"
          },
          success: function(res){
             //console.log(res);
              var category=res.data.data;
              that.setData({
                  categorylist:category,
              })
          }
      })
  },
  doctorcenter:function(){
    wx.navigateTo({
        url:"../../detail/doctor/doctor?name={{item.name}}&star={{item.star}}&hospital={{item.hospital}}&photo={{item.photo}}&status={{item.appellationid}}&special={{item.specialty}}"
    })
  },
  loadsearch: function(event){
      var that=this;
      var searchname=event.detail.value;
      console.log(searchname);
      var searchcode=encodeURIComponent(searchname);
      console.log(searchcode);
      wx.request({
          url:"http://tianhaikryzx.com:8088/doctor/category/api/getSeachUser.do",
          data:{
              name:searchcode
          },
          header:{
              "Content-Type":"application/json"
          },
          success: function(res){
             console.log(res);
              var category=res.data.data;
              that.setData({
                  categorylist:category,
              })
          }
      })
  },
 writeUTF: function (str, isGetBytes) {
   var back = [];
   var byteSize = 0;
   for (var i = 0; i < str.length; i++) {
     var code = str.charCodeAt(i);
     if (0x00 <= code && code <= 0x7f) {
        byteSize += 1;
        back.push(code);
     } else if (0x80 <= code && code <= 0x7ff) {
        byteSize += 2;
        back.push((192 | (31 & (code >> 6))));
        back.push((128 | (63 & code)))
     } else if ((0x800 <= code && code <= 0xd7ff) 
         || (0xe000 <= code && code <= 0xffff)) {
        byteSize += 3;
        back.push((224 | (15 & (code >> 12))));
        back.push((128 | (63 & (code >> 6))));
        back.push((128 | (63 & code)))
     }
    }
    for (i = 0; i < back.length; i++) {
      back[i] &= 0xff;
    }
    if (isGetBytes) {
      return back
    }
    if (byteSize <= 0xff) {
      return [0, byteSize].concat(back);
    } else {
      return [byteSize >> 8, byteSize & 0xff].concat(back);
    }
 }
})