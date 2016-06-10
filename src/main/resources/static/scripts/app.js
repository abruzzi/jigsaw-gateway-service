$(function() {
    $('#search').on('click', function() {
        var input = $('#loginName').val();

        var basicTemplate = _.template($('#basic-info-template').text());

        $.get('/staffs/'+input).done(function(data) {
            $('#basic').html(basicTemplate({staff: data}));
        });

    });

    var assignmentTemplate = _.template($('#assignment-template').text());

    $('#basic').on('click', 'h4', function (e) {
        e.preventDefault();

        var employeeId = $(this).data('id');

        if(employeeId) {
            $.get('/assignments/'+employeeId).done(function (data) {
                $('#assignments').html(assignmentTemplate({assignments: data.assignments}));
            });
        }
    });
});