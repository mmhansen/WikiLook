var luckyText = [
  {
    Johnnie: "how to quit drinking"
  },{
    Homer: "achillies"
  },{
    Euclid: "platonic solids"
  },{
    Epictetus: "stoic"
  },{
    Descartes: "do I exist"
  },{
    Quixote: "windmills"
  },{
    God: "flying spaghetti monster"
  },{
    Bach: "matthew passion"
  },{
    Aristotle: "depression"
  },{
    Hungry: "how to make a sandwhich"
  }
];
var random10;
function getLucky() {
  random10 = Math.floor(Math.random()*10);
}

$(document).ready(function(){
  
  var feeling;
  function getFeeling(){
      for(property in luckyText[random10]){
      feeling = property;
    };
 }
    
  $('#random').text("I'm feeling Johnnie");
  
  
  $('#random').mouseenter(function(){
    // returns a random number 10
    getLucky();
    getFeeling();
    $('#random').text("I'm feeling "+feeling); 
 
    
  });
  $('#random').mouseleave(function(){
    $(this).text("I'm feeling Johnnie");
  });
  
  
  $("#search").keypress(function(){
    $('.btn').css("display","none");    
    $('html').css({"margin":"0px",
                   "padding":"0px"})
    $('body').css({"margin":"0px",
                   "padding":"0px"})
    // create header bar
    $('.header').css({"background":"#E3F2FD",
                      "margin":"0",
                      "padding":"0",
                      "text-align":"left",
                      "box-shadow":"6px 6px 6px rgba(0,0,0,0.4)"});
    // alter logo text
    $('h1').css({"margin":"0",
                 "padding":"15",
                "display":"inline-block",
                "font-size":"2em"})
    
    //alter search bar
    $('input').css({"display":"inline-block",
                   "margin": "0",
                   "vertical-align":"top",
                   "margin-top":"14px"})
    
    //end keypress function
  })
   // reset to main page
 
  $('h1').click(function(){
    $(".header").removeAttr('style');
    $("h1").removeAttr('style');
    $("input").removeAttr('style');
    $("body").removeAttr('style');
    $("html").removeAttr('style');
    $(".btn").css("display","inline-block");
  })

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
  
  
  
// end document ready
});
