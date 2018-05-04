$(document).ready(function() {
    $( "#btncalcular" ).on( "click", function() {
      var result = $('#txtvalor1').val() * $('#txtvalor2').val();
      $('#resultado').html(result);
    });
});