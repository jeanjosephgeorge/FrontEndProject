$(function(){
    $('.fa-plus').click(function(e){
        $("#mainInput").fadeToggle();
        $("#mainInput").focus();
    });

    $("input[type='text']").keypress(function (e) { 
        if(e.which === 13){
            let task = $(this).val();
            // make li element
            let li = $("<li>",{
                "class":"list-item",
                "text": task
            });
            let span = $("<span>",{"class":"trash"});
            let i = $('<i>',{"class":"fas fa-trash-alt"});
            span.append(i);
            li.prepend(span);
            $('ul').append(li);
            $('input').val('');
        }
    });

    #('#submitButton').on('click','ul',function(){
        
    })

    $('#mainUl').on('click','li',function(){
        $(this).toggleClass('completed');
    });

    $('#mainUl').on('click','.trash',function(){
        $(this).parent().fadeOut(400,function(){
            $(this).remove();
        })
    });
});