$(document).ready(function(){


    $('header button').click(function() {
        $('form').slideDown();
    });

    $('#cancel-button').click(function(){
        $('form').slideUp();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const newImageUrl = $('#url-new-image').val();
        const newList= $('<li style="display: none"></li>');
        $(`<img src="${newImageUrl}" />`).appendTo(newList);
        $(`
            <div class="overlay-imagem-link">
                <a href="${newImageUrl}" target="_blank" title="Real Size Image">Real Size Image</a>
            </div>
            
        `).appendTo(newList);
        $(newList).appendTo('ul');
        $(newList).fadeIn(1000);
        $('#url-new-image').val(" ");


    });
})