//var ip = "https://booktobook.herokuapp.com/";
var ip = "http://localhost:8080/";

$('#form-signin').submit(function(e){
    e.preventDefault();
});

function toggleResetPswd(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle() // display:block or none
    $('#logreg-forms .form-reset').toggle() // display:block or none
}

function toggleSignUp(e){
    e.preventDefault();
    $('#logreg-forms .form-signin').toggle(); // display:block or none
    $('#logreg-forms .form-signup').toggle(); // display:block or none
}
/*function ciao(e){
    e.preventDefault;
    $('#logreg-forms #PIPPO').css("font-size","500%")
}*/


//---------------------------------------------------------------------
//generating the query
//---------------------------------------------------------------------
function login() {
    var username = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    var data = {
        'user_mail': username,
        'password': password
    };
    /*
    $.post(ip + "api/user/login", data , function (data) {
        if (data.length > 0){
            window.location.href = ip + "index.html"
        }else {
            //TODO: HANDLE WRONG LOGIN
            alert("Wrong! Retry, you'll be luckier." )
        }
    })

     */
    $.post(ip + "api/user/login", data).done(
        function(response){
            // do something when response is ok
            //window.location.href = ip + "index.html";
            console.log("Il login e' andato a buon fine")
            console.log(response);
        }
    ).fail(
        function(jqXHR, textStatus, errorThrown) {
            console.log('Login failed!')
        }
    );
}





