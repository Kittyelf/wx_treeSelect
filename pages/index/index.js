//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    selectArray: {
      text: '', 
      id: '',
      nodes: [{
        "id": 5,
        "text": "沈阳市",
        "nodes": []
      }, {
        "id": 6,
        "text": "本溪市",
        "nodes": [{
          "id": 7,
          "text": "本溪石街",
          "nodes": []
        }, {
          "id": 8,
          "text": "本溪梨树",
          "nodes": []
        }, {
          "id": 9,
          "text": "辽宁本溪",
          "nodes": []
        }, {
          "id": 10,
          "text": "本溪平山",
          "nodes": []
        }, {
          "id": 11,
          "text": "本溪明山",
          "nodes": []
        }]
      }, {
        "id": 12,
        "text": "盘锦市",
        "nodes": [{
          "id": 13,
          "text": "盘锦辽东湾",
          "nodes": []
        }]
      }, {
        "id": 14,
        "text": "辽阳市",
        "nodes": [{
          "id": 15,
          "text": "辽阳灯塔",
          "nodes": []
        }]
      }, {
        "id": 16,
        "text": "铁岭市",
        "nodes": [{
          "id": 17,
          "text": "铁岭银州",
          "nodes": []
        }]
      }, {
        "id": 18,
        "text": "鞍山市",
        "nodes": [{
          "id": 19,
          "text": "鞍山千山",
          "nodes": []
        }]
      }]
    }
  },
  tapItem: function (e) {
    var itemid = e.detail.itemid;
    var itemval = e.detail.value;
    console.log("所选中的分区编号：" + itemid + "， 名称：" + itemval);
  }
})
