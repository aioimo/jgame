console.log('Hello Berlin')

function goToPage(link) {
  var goTo = $('[data-page=' + link + ']');    //selects DIV with data-page attribute = "link"
  console.log("GoTo",goTo);
  goTo.siblings().hide();
  goTo.show();

  //Highlights which page we are on
  $('li.nav-item').each(function(){
    var href = $(this).find('a.nav-link').attr('href');
    if (href == link) {
      $(this).addClass('active');
    } else {
      $(this).removeClass('active');
    }
  })
}

$('a').click(function(e){
  e.preventDefault()
  var link = $(this).attr('href');    //find the href of the clicked 'a' element
  goToPage(link);                   //goes to that link using above function
})

goToPage('home');

//add the class "active" in the navbar upon click (and removing it)
