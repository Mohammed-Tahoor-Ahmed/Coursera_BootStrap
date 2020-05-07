$(document).ready(function() {
    $(".carousel").carousel({interval:1000});
    $("#carousel-button").click(function() {
        if($('#carousel-button').children('span').hasClass('fa fa-pause')) {
            $(".carousel").carousel('pause');
            $('#carousel-button').children('span').removeClass('fa fa-pause');
            $('#carousel-button').children('span').addClass('fa fa-play');
        }
        else if($('#carousel-button').children('span').hasClass('fa fa-play')) {
            $(".carousel").carousel('cycle');
            $('#carousel-button').children('span').removeClass('fa fa-play');
            $('#carousel-button').children('span').addClass('fa fa-pause');
        }
    });
});

$(document).ready(function() {
    $('#login-button').click(function() {
        $('#loginModal').modal('show');
    });
    $('#reserve-button').click(function() {
        $('#reserveModal').modal('show');
    })
});