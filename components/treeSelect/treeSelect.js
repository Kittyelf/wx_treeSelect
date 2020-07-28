// Componet/Componet.js
Component({
  /**
   * 组件的属性列表
   */
    properties: {
      model: Object
    },
  /**
   * 组件的初始数据
   */
    data: {
        selectShow:false,
        nowText : "请选择",
        open: true,
        isBranch: false,
    },
  /**
   * 组件的方法列表
   */
    methods: {
        selectToggle:function(){
            var nowShow=this.data.selectShow;
            this.setData({
                selectShow: !nowShow
            })
        },

        toggle: function(e) {
          if (this.data.isBranch) {
            this.setData({
              open: !this.data.open,
            })
          }
        },
        
        tapItem: function(e) {
          var itemid = e.detail.itemid;
          var value = e.detail.value;
          this.triggerEvent('tapitem', { value: value,itemid: itemid }, { bubbles: true, composed: true });
          this.setData({
            selectShow: false,
            nowText:value
          })
        }
    },
    ready: function(e) {
      this.setData({
        isBranch: Boolean(this.data.model.nodes && this.data.model.nodes.length)
      });
    }
})