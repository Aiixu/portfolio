function initInterfaces() { }

function loadInterface(interfaceName)
{
    const interfaceDir = `assets/interfaces/${interfaceName}`

    if($(`#interface_toolbar_${interfaceName}`).length)
    {
        $("#interface_toolbar").children().hide();
        $(`#interface_toolbar_${interfaceName}`).show();
    }
    else
    {
        $.ajax(
            {
                url: `${interfaceDir}/toolbar.html`,
                context: document.body,
                complete: jqXHR => 
                {
                    const html = jqXHR.responseText.replace("__dir", interfaceDir);
                    
                    $("#interface_toolbar").append(`<div id="interface_toolbar_${interfaceName}">${html}</div>`);
                    loadInterface(interfaceName);
                },
                error: jqXHR => 
                {
                    $("#interface_toolbar").append(`<div id="interface_toolbar_${interfaceName}">${jqXHR.responseText}</div>`);
                    loadInterface(interfaceName);
                }
            });
    }    
}