function updateExpandable()
{
    $(".expandable").find("img").remove()
    $(".expandable")
        .prepend("<img src='assets/icons/dark/chevron-right.svg'>")
        .unbind("click")
        .bind("click", function()
        {
            $(this).toggleClass("expanded");
            $(this).find("img").attr("src", `assets/icons/dark/chevron-${$(this).hasClass("expanded") ? "down" : "right"}.svg`);
            $(this).parent().children(".expandable-content").slideToggle("fast");
        })
        .parent().children(".expandable-content")
        .hide();
}