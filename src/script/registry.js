! function($) {
    let $user = $('.username');
    let $usernameflag = true;
    $user.on('blur', function() {
        $.ajax({
            type: 'post',
            url: 'http://localhost/IQIYImall/php/registry.php',
            data: {
                username: $user.val()
            }
        }).done(function(result) {
            if (!result) { //不存在
                $('article').html('√').css('color', 'green');
                $usernameflag = true;
            } else {
                $('article').html('该用户名已经存在').css('color', 'red');
                $usernameflag = false;
            }
        })
    });

    $('form').on('submit', function() {
        if ($user.val() == '') {
            $('article').html('用户名不能为空').css('color', 'red');
            $usernameflag = false;
        }
        if (!$usernameflag) {
            return false; //阻止提交
        }
    });
}(jQuery);