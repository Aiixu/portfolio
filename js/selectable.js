function initSelectable()
{
    $("li.selectable").bind("click", function()
    {
        $(this).parent().children().removeClass("interactable_selected");
        $(this).addClass("interactable_selected");
        
    });

    $("li.selectable:first-of-type").trigger("click");
}