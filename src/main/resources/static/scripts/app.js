$(function() {
    $('#search').on('click', function() {
        var input = $('#loginName').val();

        var basicTemplate = _.template($('#basic-info-template').text());
        var assignmentTemplate = _.template($('#assignment-template').text());

        $.get('/staffs/'+input).done(function(data) {
            $('#basic').html(basicTemplate({staff: data}));

            $.get('/assignments/'+data.employeeId).done(function(data) {
                $('#assignments').html(assignmentTemplate({assignments: data.assignments}));
            })
        });
    })
});