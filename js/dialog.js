
// 弹窗层由 遮罩层和窗体组成;
// 窗体可关闭，有回调事件;
// 依赖于jquery


;(function(window,$,undefined){

  var MyDialog = function(){

    this.body = $('body');
    this.wrap = $('.my-dialog-wrap');
    this.dialog = $('.my-dialog');
    this.btnClose = $('.my-dialog-close');
    this.mask = $('.my-dialog-mask');
    this.header = $('.my-dialog-header');
    this.inner = $('.my-dialog-body');
    this.footer = $('.my-dialog-footer');
    this.settings = {
      title: '提示',
      inner: '我是弹窗的内容',
      showType: 'slideInDown',
      ok: $.noop,
      close: $.noop
    };
  };

  MyDialog.prototype = {
    constructor: 'MyDialog',
    alert: function(option){
      var that = this;
      var settings = that.getSettings(option);
      that.footer.html('<span type="ok" class="my-dialog-btn">确定</span>');
      that.bulid(settings);
      that.firm(settings);
      that.wrap.show();
    },
    confirm: function(option){
      var that = this;
      var settings = that.getSettings(option);
      that.footer.html('<span type="cancel" class="my-dialog-btn">取消</span><span type="ok" class="my-dialog-btn">确定</span>');
      that.bulid(settings);
      that.firm(settings);
      that.wrap.show();
    },
    getSettings: function(option){
      return 'string' === typeof option ? $.extend({},this.settings,{inner: option}) : $.extend({},this.settings,option);
    },
    bulid: function(settings){
      var that = this;
      that.header.html(settings.title);
      that.inner.html(settings.inner);
      that.dialog.addClass(settings.showType);
    },
    firm: function(settings){
      var that = this;
      that.wrap.off('click.close').on('click.close','.my-dialog-close,.my-dialog-mask,.my-dialog-btn[type="cancel"]',function(){
        settings.close();
        that.close(settings);
      });
      that.wrap.off('click.ok').on('click.ok','.my-dialog-btn[type="ok"]',function(){
        settings.ok();
        that.close(settings);
      });

      that.body.off('keydown.ok').on('keydown.ok',function(e){
        if(e.which == 13){
          settings.ok();
          that.close(settings);
          return false;
        }
      });

      that.body.css('overflow','hidden');

    },
    close: function(settings){
      this.body.css('overflow','auto');
      this.dialog.removeClass(settings.showType);
      this.wrap.hide();
    }
  };

  window.dialog = new MyDialog();

}(this,this.jQuery));
