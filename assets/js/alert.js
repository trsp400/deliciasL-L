$(function(){
    $(".foot").load("footer.html");
    $("#alert-login-user").hide();
    $("#alert-login-senha").hide();
    $("#alert-success").hide();
    $("#alert-cadastro").hide();
    $("#alert-success-cadastro").hide();

});

$(function() {
    

    $('#sem-conta').click(function(){
      $('#modal-cadastro').modal({show:true})
    });
  
    $('#com-conta').click(function(){
      $('#modal-login').modal({show:true})
    });
  
    $("#cadastro-submit").click(function(event) {
      event.preventDefault();
      if($("#user-cadastro").val() == "") {
          $("#alert-cadastro").show();
      }else {
          $("#alert-success-cadastro").show();                    
          setInterval( $(function() { window.location.href = "index.html" }) , 10000);                    
      }
    })
  
      $("#login-submit").click(function(event) {
          event.preventDefault();
          if($("#user").val() == "") {
              $("#alert-login-user").show();
              $("#alert-login-senha").hide();
          } else if ($("#senha").val() == "") {
              $("#alert-login-user").hide();
              $("#alert-login-senha").show();
          }else {
              $("#alert-success").show();                    
              setInterval( $(function() { window.location.href = "index.html" }) , 10000);                    
          }
      });
  });