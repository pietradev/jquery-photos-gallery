$(document).ready(function(){
    $('#add-task').on('click', function(e){
        e.preventDefault();
        const newTask = $('#input-task').val();
        console.log(newTask);
        const newList= $('<li class="task-item"></li>');
        $(`
            <input type="checkbox" class="checkbox-done"/>
        `).appendTo(newList);
        $(`
            <h3>${newTask}</h3>
            `).appendTo(newList);
 
        $(newList).appendTo('#space-tasks');
        $('#input-task').val(" ");

    });

// Event delegation for dynamically added checkboxes
$(document).on('change', '.checkbox-done', function() {
    const taskText = $(this).siblings('h3');
    if (this.checked) {
        taskText.css('text-decoration', 'line-through');
    } else {
        taskText.css('text-decoration', 'none');
    }
});
})