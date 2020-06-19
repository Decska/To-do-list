/*ilyen idézőjel kell ahhoz amit újonnan kreálok js-ben`!*/

$('button').click(()  => {
  $('ul').append(`<li>${$('input').val()}</li>`);
//itt megint üres boxot csinál:
  $('input').val('');
})



