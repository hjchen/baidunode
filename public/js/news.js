$(document).ready(function() {
    //导航条宽度设置
    var deviceWidth = $('body').width();
    $('nav li').each(function(index, item) {
        if ($(this).find('a').html().split('').length > 2) {
            $(this).width(deviceWidth / 3);
        } else {
            $(this).width(deviceWidth / 6);
        }
    });

    refreshNews('精选');

    //点击导航条切换新闻类型
    $('nav a').click(function(e){
    	e.preventDefault();
    	var type = $(this).html();
    	refreshNews(type);
    });	

});

//动态添加节点
function refreshNews(type) {
    var $lists = $('article ul');
    $lists.empty();
    $.ajax({
        url: '/news',
        type: 'get',
        datatype: 'json',
        data: { newstype: type },
        success: function(data) {
        	console.log(data);
            addNews(data);
        }
    });
}

//添加新闻信息
function addNews(data) {
    data.forEach(function(item ,index ,array) {
        var $lists = $('article ul');
        var $list = $('<li></li>').addClass('news-list').prependTo($lists);
        var $newsImg = $('<div></div>').addClass('news-img').appendTo($list);
        var $img = $('<img>').attr('src', item.newsimg).appendTo($newsImg);
        var $newsContent = $('<div></div>').addClass('news-content').appendTo($list);
        var $h1 = $('<h1></h1>').html(item.newstitle).appendTo($newsContent);
        var $p = $('<p></p>').appendTo($newsContent);
        var $newsTime = $('<span></span>').addClass('news-time').html(item.newstime).appendTo($p);
        var $newsSrc = $('<span></span>').addClass('news-src').html(item.newssrc).appendTo($p);
    });

}
