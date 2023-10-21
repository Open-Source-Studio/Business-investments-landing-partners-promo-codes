
// encode(decode) html text into html entity
var decodeHtmlEntity = function(str) {
  return str.replace(/&#(\d+);/g, function(match, dec) {
    return String.fromCharCode(dec);
  });
};

var encodeHtmlEntity = function(str) {
  var buf = [];
  for (var i=str.length-1;i>=0;i--) {
    buf.unshift(['&#', str[i].charCodeAt(), ';'].join(''));
  }
  return buf.join('');
};


$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});


// Form Validation and Messages

function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();

    $(".form-wait").fadeIn();

    $.ajax({
        type: "POST",
        url: "app/php/process.php",
        data: "name=" + name + "&email=" + email + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false, text);
            }
        }
    });
}


function formError(){
    $('.notice-holder').animateCss('wobble');
    $(".form-wait").delay(499).fadeOut();
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "text-center tada animated text-success";
        $('.notice-holder').animateCss('pulse');
    } else {
        var msgClasses = "text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

$("#form-show").click(function(){

    $("#form-show").addClass("height-zero");
    $("#form-submit").removeClass("height-zero");
    $(".tab_info").slideUp(1000);
    $(".tab_form").removeClass("hidden").hide().slideDown(1200);
  
});

$( window ).load(function() {
  // Run code
  $('.overlaywp').fadeOut("slow");
  $('.notice-holder').removeClass("hidden").delay(2000).animateCss('bounceInDown');
});