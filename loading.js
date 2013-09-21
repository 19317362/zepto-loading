(function() {

    /* Enable scrolling */
    function enableScroll() {
        var html = $('html');
        html.css('overflow-y', 'auto');
        document.ontouchmove = function(e) {
            return true;
        };
    }

    /* Prevent scrolling */	
    function disableScroll() {
        var html = $('html');
        html.css('overflow-y', 'hidden');
        document.ontouchmove = function(e) {
            e.preventDefault();
        };
    }

    var LOADING_TPL = [
        '<section class="zepto-pop-loading" style="position: absolute; left: 0; top: 0; width: 100%; height: 100%; box-sizing: border-box; z-index: 110;">',
            '<div class="tips" style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto; width: 100px; height: 1.2em; line-height: 1.2em; z-index: 112; text-align: center; padding: 3px 5px; color: #000; font-size: 14px; background: transparent; border-radius: 10px;">',
                '<img src="http://gtms01.alicdn.com/tps/i1/T1YPeKFbJiXXcPpDYg-46-46.gif" alt="" style="width: 2em; vertical-align: text-bottom; margin-right: 5px;" />',
            '</div>',
            '<div class="mask" style="width: 100%; height: 100%; background: #000; opacity: 0.3; z-index: 111;"></div>',
        '</section>'
    ].join('');

    var Loading = function() {
        
    };

    Loading.prototype = {
        initialize: function(options) {
            
        },

        show: function() {
            var that = this;
            var loading = $('.zepto-pop-loading');
            var body = $('body');

            if(that.loading) {
                that.loading.show();
                disableScroll();
                return;
            }

            that.loading = $(LOADING_TPL);
            that.loading.show();
            body.append(that.loading);
            disableScroll();
        },

        hide: function() {
            var that = this;

            if(that.loading) {
                that.loading.hide();
                enableScroll();
            }
        },

        destroy: function() {
            var that = this;

            if(that.loading) {
                that.loading.remove();
                that.loading = null;
                enableScroll();
            }
        }
    };

    this.Loading = Loading;

}).call(this);
