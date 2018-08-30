//jQuery Form
$('#myForm').submit(function(event){
    //You Prevent The default event
    event.preventDefault();
    //1. get all the form fields
      var data = $(this).serializeArray();
    //2. 
    var name = $('#name').val();
    console.log(name)
})