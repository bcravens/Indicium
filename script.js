$(document).ready(() => {
  console.log("working")
  $('#textbox').on( "click", function(){
    console.log("placeholder clear")
     $(this).removeAttr('placeholder');
  });
});
