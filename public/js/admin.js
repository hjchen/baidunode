$(document).ready(function() {
    var $newstable = $('#newstable tbody');
    //刷新新闻列表
    refreshNews();

    //提交新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault();
        if ($('#newstitle').val() == '' || $('#newstype').val() == '' || $('#newsimg').val() == '' || $('#newstime').val() == '' || $('#newssrc').val() == '') {
            if ($('#newstitle').val() == '') {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }
            if ($('#newstype').val() == '') {
                $('#newstype').parent().addClass('has-error');
            } else {
                $('#newstype').parent().removeClass('has-error');
            }
            if ($('#newsimg').val() == '') {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }
            if ($('#newstime').val() == '') {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }
            if ($('#newssrc').val() == '') {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }
        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val()
            };
            //提交添加
            $.ajax({
                url: '/admin/insert',
                type: 'post',
                datatype: 'json',
                data: jsonNews,
                success: function(data) {
                    refreshNews();
                }
            });
        }
    });

    //删除新闻
    var deleteId = null;
    $newstable.on('click', '.btn-danger', function(e) {
        $('#deleteModal').modal('show');
        deleteId = $(this).parent().prevAll().eq(3).html();
    });
    $('#deleteModal #confirmDelete').click(function() {
        if (deleteId) {
            $.ajax({
                url: '/admin/delete',
                type: 'post',
                data: { newsid: deleteId },
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            })
        }
    });
    //修改新闻
    var updateId = null;
    $newstable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(3).html();
        $.ajax({
            url: '/admin/curnews',
            type: 'get',
            datatype: 'json',
            data: { newsid: updateId },
            success: function(data) {
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split('T')[0];
                $('#unewstime').val(utime);
            }
        });
    });
    $('#updateModal #confirmUpdate').click(function() {
        $.ajax({
            url: '/admin/update',
            type: 'post',
            data: {
            	newstitle: $('#unewstitle').val(),
            	newstype: $('#unewstype').val(),
            	newsimg: $('#unewsimg').val(),
            	newssrc: $('#unewssrc').val(),
            	newstime: $('#unewstime').val(),
            	id: updateId
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refreshNews();
            }
        })
    });
    //刷新新闻列表
    function refreshNews() {
        //清空表格
        $newstable.empty();

        $.ajax({
            url: '/admin/getnews',
            type: 'get',
            datatype: 'json',
            data: {newstype:null},
            success: function(data) {
                data.forEach(function(item, index, array) {
                    //遍历数据添加
                    var $tdid = $('<td>').html(item.id);
                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn-primary btn btn-xs').html('编辑');
                    var $btndelete = $('<button>').addClass('btn-danger btn btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdtime, $tdctrl);
                    $newstable.append($tRow);
                });
            }
        });
    }

});
