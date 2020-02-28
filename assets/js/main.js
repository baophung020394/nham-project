$(document).ready(function() {
    $('.list-menu li').on('click', function(){
        $('.list-menu li').removeClass('active');
        $(this).addClass('active')
    })

    $('.datepicker').datepicker({
        format: 'yyyy/mm/yy',
        // startDate: '-3d'
    });

    $('.btn-close').on('click', function() {
        $('.dashboard-logout .container-card').toggleClass('active');
    })

    $('.date span').on('click', function() {
        $(this).toggleClass('active');
    })
})