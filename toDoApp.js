//Check off to do items by clicking.
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click x to delete to do.
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13)
        {
            // toDo to be added.
            var toDoText = $(this).val();
            // Clear input box.
            $(this).val("");
            // Create and add new li.
            $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + toDoText + "</li>");
        }
});
// Toggle form
$(".fa-plus").click(function(){
   $("input[type='text']").fadeToggle(); 
});