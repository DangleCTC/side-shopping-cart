$("[data-toggle='toggle']").click(function () {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
});


$('.toggle').click(function () {
    if (!$(this).next().hasClass('in')) {
        $(this).parent().children('.collapse.in').collapse('hide');
    }
    $(this).next().collapse('toggle');
});