document.write('<div class="navbar">');
document.write('<div class="warp" style="padding:0;overflow-x: inherit;">');
document.write('<div class="logo"><a href="http://www.ilvyou.cc/" target="_blank" ><img src="images/124.png" width="187" height="41" border="0" style="margin-top:5px;"></a></div>');
document.write('<div class="menus">');
document.write('<ul>');
document.write('<li><a href="http://www.ilvyou.cc" target="_blank">首页</a></li>');
document.write('<li><a href="http://sales.ilvyou.cc/" target="_blank">乐游特惠</a></li>');
document.write('<li><a>海岛游轮</a></li>');
document.write('<li><a href="http://wh.ilvyou.cc/round" target="_blank">周边旅游</a></li>');
document.write('<li><a href="http://wh.ilvyou.cc/domestic" target="_blank">国内旅游</a></li>');
document.write('<li><a href="http://wh.ilvyou.cc/departure" target="_blank">境外旅游</a></li>');
document.write('<li><a href="http://custom.ilvyou.cc/" target="_blank">定制旅游</a></li>');
document.write('<li><a href="http://activity.ilvyou.cc/huodong/wxminux/" target="_blank">钜惠旅游季</a></li>');
document.write('<li class="loginreg"> <div class="gang_l">|</div> <div class="logregbody"><span class="guanzhu">关注乐游</span> </div>');
document.write('<div class="gang_r">|</div>');
document.write('<div class="attentionbox">');
document.write(' <div class="attentionwechat">');
document.write(' <p> <span class="fl">乐游官方微信</span> <a href="#" class="foot1rightimg2 fl ml5"></a> </p>');
document.write('<img src="http://www.iloyo.net/contentv1/imgs/top_weixin_code.png" width="107" height="101" alt="">');
document.write('</div>');
document.write(' <div class="attentionsina">');
document.write('<p>');
document.write('<span class="fl">乐游官方微博</span> <a href="#" class="foot1rightimg1 fl ml5"></a>');
document.write('</p>');
document.write('<img src="http://www.iloyo.net/contentv1/imgs/top_QR_code.png" width="107" height="101" alt="">');
document.write('</div>');
document.write('<div class="attentionboxright">');
document.write('<a href="http://i.ilvyou.cc/mfp/myinvite.html" class="attention" style="margin-top: 25px;"  target="_blank">邀请好友 </a>');
document.write('<a class="wechatbtn attention" " href="#" title=""> <span class="fl">乐游微信</span> </a>');
document.write('<a class="sinabtn attention"  href="#" title="">');
document.write(' <span >乐游微博</span> </a></div></div>');
document.write('</li>');
document.write('</ul>');
document.write('</div>');
document.write('</div>');
document.write('</div>');

$(function () {
    $(".loginreg").mouseover(function (event) {
        $(this).children('.logregbody').css({ 'color': '#000', 'background-color': '#fff' });
        $(this).children('.attentionbox').show();
        $(this).find('.guanzhu').css('background', 'url(http://www.iloyo.net/activitycommres/imgs/guanzhu.png) 0px -20px no-repeat');
    });
    $(".loginreg").mouseleave(function (event) {
        $(this).children('.logregbody').css({ 'color': '#fff', 'background-color': '' });
        $(this).children('.attentionbox').hide();
        $(this).find('.guanzhu').css('background', 'url(http://www.iloyo.net/activitycommres/imgs/guanzhu.png)  0px -2px no-repeat');
    });
    $(".wechatbtn").hover(function (event) {
        $(".attentionbox").width(203);
        $(".attentionwechat").show();
        $(".attentionsina").hide();

    }, function () {
        $(".attentionbox").width(87);
        $(".attentionwechat").hide();
        $(".attentionsina").hide();
    });

    $(".sinabtn").hover(function (event) {
        $(".attentionbox").width(203);
        $(".attentionsina").show();
        $(".attentionwechat").hide();
    }, function () {
        $(".attentionbox").width(87);
        $(".attentionwechat").hide();
        $(".attentionsina").hide();
    });
});