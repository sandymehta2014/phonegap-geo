
function msg()
{

    $.ajax({
        type       : "POST",
        url        : "http://www.aakarsoft.com/login.php",
        data       : {username : $('#txtLogin').val(), password : $('#txtPass').val()},
        dataType   : 'json',
        success    : function(response) {
            debugger;
            //console.error(JSON.stringify(response));
            alert('Works!');
            $("body").load("http://www.aakarsoft.com/honey.php");
        },
        error      : function(response) {
            debugger;
            //console.error("error");
            alert(response);                  
        }
    });     
}

