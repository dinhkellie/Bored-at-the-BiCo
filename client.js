var degree;

document.querySelector(".button").addEventListener("click", function() {
    var b = document.querySelector(".result");
    b.className += " hidden";
  
    degree = Math.random() 
    document.querySelector(".button").classList.remove("paused");
    document.querySelector(".button").classList.remove("animating");
  
    document.querySelector(".button").style.webkitAnimation = 'none';
  
    setTimeout(function() {
      document.querySelector(".button").style.webkitAnimation = '';
        
      setTimeout(function() {
        var d = document.querySelector(".button");
        d.className += " animating";
        
        setTimeout(function() {
          setResult();
          document.querySelector(".button").className += " paused";
          document.querySelector(".result").classList.remove("hidden");
        }, (degree * 1000 + 2000))
      }, 0)
    }, 10);
}
                                                  )

var x = document.querySelector(".button");

// Standard syntax
function setResult() {
  
  var category_result = categories[Math.floor(degree*categories.length)];
  
  var item_result = category_result.items[Math.floor(Math.random()*category_result.items.length)];
  
  document.querySelector(".result").innerHTML=category_result.name+": "+item_result;
}


var categories = [
  {
    name: "Food", 
    items: [
      "FREE ICE CREAM AT THE DINING HALL!!",
      "Treat yo self to some Chipotle!",
      "Get some free tasters, visit the Ardmore Farmer’s Market!",
      "It doesn’t have to be 3AM after a night of partying to order some Campus Corner!",
      "Satisfy your sweet tooth with Insomnia Cookies!",
      "Food is life! Dine out at a Mainline restaurant!"
    ]
  },
  {
    name: "Campus",
    items: [
      "Your GPA can always use a little magic, give an offering to Athena!",
      "Did you order stuff online? Maybe it arrived! Go check your mailbox and find out!",
      "McBride students are the best! Find the McBride Labyrinth!",
      "Check out the art exhibit in one of the bi-co libraries!",
      "Stay informed and read a copy of the Bi-Co News! "

      ]
  },
  
  {
    name: "Philly",
    items: [
      "Drop everything! Get on the nearest regional rail train and get boba at Chinatown!",
      "It’s the weekend! Attend a Penn Frat toga party!",
      "Looking for some cool tunes? Check out Union Transfer for a concert!",
      "Recreate the scene of Rocky Balboa running up the Philadelphia Art Museum steps!",
      "Prepare to watch some amazing theater performances at the Wilma Theater!"

    ]
    
  },
  
  {
    name: "Fun",
    items: [
      "FREE CONCERT!! Attend FUCS at Haverford!!",
      "FREE MOVIE SCREENING!! Attend a Bryn Mawr Film Series screening!",
      "Attend an acapella concerts for the REAL collegiate experience!",
      "Get ready to laugh at a Lighted Fools performance!",
      "Tune into a WHRC Haverford Radio Station!"
    ]
  },
  
  {
    name: "Academic",
    items: [
      "Do you have homework? Maybe consider going to the library? Sorry!!",
      "Learn about something new and attend a guest lecture!",
      "Net-werk! Go to a conference! Don’t forget to bring your business cards!",
      "Time to give your Linkedin a facelift! Make sure to update it with all of your awesome accomplishments!",
      "Attend your professor’s office hours! Professors get lonely and you’ll gain a new friend!"

    ]
  },
  {
    name: "Random",
    items: [
      "FREE ICE CREAM AT THE DINING HALL!!",
      "Treat yo self to some Chipotle!",
      "Get some free tasters, visit the Ardmore Farmer’s Market!",
      "It doesn’t have to be 3AM after a night of partying to order some Campus Corner!",
      "Satisfy your sweet tooth with Insomnia Cookies!",
      "Food is life! Dine out at a Mainline restaurant!",
       "Your GPA can always use a little magic, give an offering to Athena!",
      "Did you order stuff online? Maybe it arrived! Go check your mailbox and find out!",
      "McBride students are the best! Find the McBride Labyrinth!",
      "Check out the art exhibit in one of the bi-co libraries!",
      "Stay informed and read a copy of the Bi-Co News! ",
      "Drop everything! Get on the nearest regional rail train and get boba at Chinatown!",
      "It’s the weekend! Attend a Penn Frat toga party!",
      "Looking for some cool tunes? Check out Union Transfer for a concert!",
      "Recreate the scene of Rocky Balboa running up the Philadelphia Art Museum steps!",
      "Prepare to watch some amazing theater performances at the Wilma Theater!",
      "FREE CONCERT!! Attend FUCS at Haverford!!",
      "FREE MOVIE SCREENING!! Attend a Bryn Mawr Film Series screening!",
      "Attend an acapella concerts for the REAL collegiate experience!",
      "Get ready to laugh at a Lighted Fools performance!",
      "Tune into a WHRC Haverford Radio Station!",
      "Do you have homework? Maybe consider going to the library? Sorry!!",
      "Learn about something new and attend a guest lecture!",
      "Net-werk! Go to a conference! Don’t forget to bring your business cards!",
      "Time to give your Linkedin a facelift! Make sure to update it with all of your awesome accomplishments!",
      "Attend your professor’s office hours! Professors get lonely and you’ll gain a new friend!"
    ]
  }
]
