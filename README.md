### dialog 弹窗组件

> 依赖  > jquery1.6

> 动画依赖于 animate.css

#### 调用方式
##### alert

    dialog.alert('提示信息');

或者：

    dialog.alert({
      title: "警告",
      inner: "你发出一个警告",
      ok: function(){
        // 当点击确定按钮时，发生点什么
      }
    })    
##### confirm

      dialog.confirm('提示信息');

或者：

     dialog.confirm({
        title: "警告",
        inner: "你发出一个警告",
        ok: function(){
          // 当点击确定按钮时，发生点什么
        }
      })   

弹窗看起来就像这样：

![exmple.png](https://raw.githubusercontent.com/Iamlars/dialog/master/exmple.png)

