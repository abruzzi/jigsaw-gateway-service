$(function() {
    $('#search').on('click', function() {
        var input = $('#loginName').val();

        var basicTemplate = _.template($('#basic-info-template').text());

        $.get('/staffs/'+input).done(function(data) {
            $('#basic').html(basicTemplate({staff: data}));
        });
    })
});