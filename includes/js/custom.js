$("ul").on("click","li",function(){
    $(this).toggleClass("tamamlanmis");
});
$("ul").on("click","span",function(){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation(); 
});

$("input[type='text']").keypress(function(event){
    if(event.which == 13){ 
        var yeniItem = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash-o'aria-hidden='true'></i></span>"+yeniItem+"</li>");
    }
});
$(".fa fa-pencil").click(function(){
    $("input[type='text']").fadeToggle();
});