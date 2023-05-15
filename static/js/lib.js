$(document).ready(function($) {

    // search
    $('.hd-searchBtn').hover(function(event) {
        $('.hd-search-form').stop().slideDown('fast');
    }, function() {
        $('.hd-search-form').stop().slideUp('fast');
    });

    //moblie Nav
    $("#slideNav").mmenu({
        "navbars": {
            "position": "right",
            "content": [
                "prev",
                "title",
                "close"
            ]
        },
        "offCanvas": {
            "position": "top"
        },
        "extensions": [
            "theme-dark"
        ]
    });

    //moblie
    $(".phone-menu").click(function() {
        $(".header .top").slideUp("fast");
    });
    $(".phone-button").click(function() {
        $(".header .top").slideToggle("fast");
    });

    // nav_products
    $('#nav li').hover(function() {
        $(this).children('.nav_sub').stop().slideToggle('fast');
    });

    // 二级导航
    function snavWid() {
        if ($('#snav').length) {
            var _wid = 0;
            $('#snav li').each(function() {
                _wid = _wid + $(this).outerWidth() + 2;
            });
            $('#snav ul').width(_wid);
        }
    }
    snavWid();
    $(window).resize(function(event) {
        snavWid();
    });

    // 锚点跳转
    if ($('.AnchorNav').length) {
        $('.AnchorNav a').click(function(event) {
            var _id = $(this).attr('href');
            var _top = $(_id).offset().top;
            $('body,html').stop().animate({
                scrollTop: _top
            }, 500);
            $(this).parents('li').addClass('active').siblings('li').removeClass('active');
            return false;
        });
    }

    // 百度分享
    window._bd_share_config = {
        "common": {
            "bdSnsKey": {},
            "bdText": "",
            "bdMini": "2",
            "bdMiniList": false,
            "bdPic": "",
            "bdStyle": "2",
            "bdSize": "32"
        },
        "share": {}
    };
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];

    // 选项卡
    $('.TAB li').mouseenter(function() {
        var _eq = $(this).index();
        var _con = $(this).parents('ul').attr('id');
        $(this).addClass('on').siblings('li').removeClass('on');
        $(_con).eq(_eq).removeClass('dn').show().siblings(_con).addClass('dn').hide();
    });

    // 一键查询
    $('#Search .close').click(function() {
        $(this).parents('#Search').hide();
    })

});