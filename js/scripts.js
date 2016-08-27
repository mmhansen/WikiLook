
///////////////////////////////////////////////
// Switch between Landing and Content Styles //
///////////////////////////////////////////////
var test; 
// declare contentCss for later use
function contentCss(){
    $('#header').removeClass('landing');
    $('#header').removeClass('col-md-offset-3');
    $('#header').addClass('content');
  };


$(document).ready(function(){


  $(".search").keypress(function(){

    contentCss();
  })
   // reset to main page
  $('h1').click(function(){
    $('.results').empty()
    $('#header').removeClass('content');
    $('.search').blur();

    $('.search').val("")

    $('#header').addClass('landing');
    $('#header').addClass('col-md-offset-3');  
 
  })
});

////////////////////////////////////////////////
// Autocomplete List dropdown from search bar //
////////////////////////////////////////////////

$(document).ready(function(){

 var tags = [];
  
  $('.search').on('input', function(){
    
    //do get request for tags
    $.get('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + $('.search').val() + '&limit=5&namespace=0&format=json', function( data ) {
  
      //make tags the correct array
      tags = data[1];
      //update source
      $('.search').autocomplete( "option", { source: tags } );
    //search to refresh autocomplete
      $('.search').autocomplete( "search");
      
}, "jsonp" );
    
  });
  
  $('.search').autocomplete({
     source: tags,
     messages: {
       noResults: '',
       results: function(){}
     },
    minChars: 0,
    select: function (event, ui) {

      var searchItem = $('.search').val();

        if (searchItem == ""){
          $(".search").blur();
          $('.results').empty()
          $(".results").append( "<div class='error'> <p>Type something before you search!</p></div>" );

        } else {

          $(".search").blur();
          ajax(searchItem);

        }

      
}

});

})



////////////////////////////
// Display Search Results //
////////////////////////////
var searchItem;

// populate display field with search results
function showResults (callback) {

  for (var i = 0; i <= 9; i++) {
    $(".results").append("<div id='result' class='result-list result-" + i + "'>" + "<span class='result-title title-" + i + "'></span>" + "<br>" +"<span class='result-snippet snippet-" + i + "'></span>" + "<br>" + "<span class='result-metadata metadata-" + i + "'></span>" + "</div>" );
  }

  for (var m = 0; m <= 9; m++) {
    var title = callback.query.search[m].title;
    var url = title.replace(/ /g, "_");
    var timestamp = callback.query.search[m].timestamp;
    timestamp = new Date(timestamp);

    $(".title-" + m).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank' id='link-'" + m + ">" + callback.query.search[m].title + "</a>");
    $(".snippet-" + m).html(callback.query.search[m].snippet);
    $(".metadata-" + m).html((callback.query.search[m].size/1000).toFixed(0) + "kb (" + callback.query.search[m].wordcount + " words) - " + timestamp);
  }
}

function showError(keyword) {
  $(".results").append( "<div class='error'> <p>Your search <span class='keyword'>" + keyword + "</span> did not match any documents.</p> <p>Suggestions:</p><li>Make sure that all words are spelled correctly.</li><li>Try different keywords.</li><li>Try more general keywords.</li></div> ");
}

// get info from wikipedia
function ajax (keyword) { 
  $.ajax({ 
    url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
    dataType: "jsonp",
    success: function(response) {

      console.log(response.query);

      if (response.query.searchinfo.totalhits === 0) {
        $('.results').empty()
       showError(keyword) 
      }

      else {
        $('.results').empty()
        showResults(response)
      }
    }

    ,
    error: function () {
      $('.results').empty()
      $(".results").append( "<div class='error'> <p>Your search went awry! Please try again</p></div>" );
    }

  });
}

$(document).ready(function(){
// active display on enter press
  $('.search').keypress(function (e) {
      if (e.which == '13') {



        var searchItem = $('.search').val();

        if (searchItem == ""){
          $(".search").blur();
          $('.results').empty()
          $(".results").append( "<div class='error'> <p>Type something before you search!</p></div>" );

        } else {

          $(".search").blur();
          ajax(searchItem);

        }
      }
  });

})


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

    $('#random').click(function(){

     
      contentCss();
      ajax(selectedFeeling);

    })
  });
  
  $('#random').mouseleave(function(){
    $(this).text("I'm feeling Johnnie");
  });




})


////////////////////////////////////
// Display full page when clicked //
////////////////////////////////////

/*
<iframe src="link" height="100%">
</iframe>


https://en.wikipedia.org/w/api.php?action=parse&page=God
prase to get whole article content;
*/




