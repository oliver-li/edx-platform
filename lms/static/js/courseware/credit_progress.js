$(document).ready(function() {
    $('.detail-collapse').on('click', function() {
        var el = $(this);
        $('.requirement-container').toggleClass('is-hidden');
        el.find('.fa').toggleClass('fa-caret-up fa-caret-down');
        el.find('.requirement-detail').text(function(i, text){
          return text === gettext('Less') ? gettext('More') : gettext('Less');
        });
    });

});
