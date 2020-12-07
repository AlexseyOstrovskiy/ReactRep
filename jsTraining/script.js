jQuery('document').ready(function(){
   jQuery('button').on('click', function(){
      
    var value1, value2, value3;
    value1 = jQuery('#val1').val();
    value2 = jQuery('#val2').val();

    value1 = parseInt(value1);
    value2 = parseInt(value2);
    value3 = value2 + value1;

    alert(value3);
   });
});