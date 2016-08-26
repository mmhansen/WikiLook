
///////////////////////////////////////////////
// Switch between Landing and Content Styles //
///////////////////////////////////////////////

$(document).ready(function(){
  function contentCss(){
    $('#header').removeClass('landing');
    $('#header').removeClass('col-md-offset-3');
    $('#header').addClass('content');
  };


  $("#search").keypress(function(){
    contentCss();
  })
   // reset to main page
  $('h1').click(function(){
    $('#header').removeClass('content');
    $('#header').addClass('landing');
    $('#header').addClass('col-md-offset-3');    
  })
});

////////////////////////////////////////////
// Animation for I'm feeling Lucky button //
////////////////////////////////////////////

$(document).ready(function(){
  // initial Display
  $('#random').text("I'm feeling Johnnie");
  
  var imFeeling = ["Johnnie", "Homer", "Euclid", "Epictetus", "Descartes", "Quixote", "God", "Bach", "Aristotle", "Hungry"];
  var randomNum;
  var selectedFeeling;

  function getRandom() {
    randomNum = Math.floor(Math.random()*10);
    selectedFeeling = imFeeling[randomNum];
  }
  
  $('#random').mouseenter(function(){
    getRandom();
    $('#random').text("I'm feeling "+selectedFeeling); 
  });
  
  $('#random').mouseleave(function(){
    $(this).text("I'm feeling Johnnie");
  });

})

////////////////////////////////////////////////
// Autocomplete List dropdown from search bar //
////////////////////////////////////////////////



////////////////////////////
// Display Search Results //
////////////////////////////


////////////////////////////////////
// Display full page when clicked //
////////////////////////////////////






/*
  // display function
  
  var tags = [];
  $('#search').on('input', function(){
   
    var URL = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $('#search').val() + '&limit=10&namespace=0&format=json'
          
    function getTags(data) {
      tags = data[1];
     // console.log(tags);
    }
    
  $.get(URL, getTags, "jsonp")
  
  });
  
  
  
    function displayEach(){
      
      var item = 'https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=' 
       + 'He' + '&gsrlimit=10&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max'
      
      $.get(item, function(data){
                console.log(data);
                }, jsonp)
      // end display each
    };
  
  
  
  displayEach();
  
  
  




*/