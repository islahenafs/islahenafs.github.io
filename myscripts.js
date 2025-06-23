var quotes = document.getElementsByClassName('quote')
var button = document.getElementById('new')
var button2 = document.getElementById('share')

// a function to hide all divs
var hideDivs = function(divs) {
  for (var div of divs) {
    div.style.display = 'none';
  }
}

hideDivs(quotes); // hide all initially
var rnd = Math.floor(Math.random() * quotes.length);
quotes[rnd].style.display = 'block'
txt = quotes[rnd].id
url = "https://islahenafs.github.io/"+txt+'.html'
var shareData = {
    url: url,
  };

// on click
button.addEventListener('click', function(event) {
  var rnd = Math.floor(Math.random() * quotes.length); // get random index
  hideDivs(quotes); // hide all quotes
  quotes[rnd].style.display = 'block'; // show random quote
  txt = quotes[rnd].id
  url = "https://islahenafs.github.io/"+txt+'.html'
  shareData = {
    url: url,
  };
  
})
button2.addEventListener("click", async () => {
    await navigator.share(shareData);
  });