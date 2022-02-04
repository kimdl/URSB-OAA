const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
    
  }
  else { // Open Hamburger Menu
    body.classList.add('noscroll');
    header.classList.add('open');
    fadeElems.forEach(function(element){
      element.classList.remove('fade-out');
      element.classList.add('fade-in');
    });

  }  
});

document.getElementById('btnUrsHymn').addEventListener('click', function(){
  document.getElementById("overlay1").style.display = "block";
})

document.getElementById('overlay1').addEventListener('click', function(){
  document.getElementById("overlay1").style.display = "none";
})

document.getElementById('btnUrsKO').addEventListener('click', function(){
  document.getElementById("overlay2").style.display = "block";
})

document.getElementById('overlay2').addEventListener('click', function(){
  document.getElementById("overlay2").style.display = "none";
})

document.getElementById('btnUrsOS').addEventListener('click', function(){
  document.getElementById("overlay3").style.display = "block";
})

document.getElementById('overlay3').addEventListener('click', function(){
  document.getElementById("overlay3").style.display = "none";
})

document.getElementById('btnUrsGiants').addEventListener('click', function(){
  document.getElementById("overlay4").style.display = "block";
})

document.getElementById('overlay4').addEventListener('click', function(){
  document.getElementById("overlay4").style.display = "none";
})


//slideshow
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3000); // Change image every 3 seconds
}

//login
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//for citizenship
function yesnoCheck() {
  if (document.getElementById("foreignCheck").selected || document.getElementById("dualCheck").selected || document.getElementById("otherCheck").selected) {
      document.getElementById("ifYes").style.display = "block";
  } else {
      document.getElementById("ifYes").style.display = "none";
  }
}

//for a faculty child
function childCheck() {
  if (!document.getElementById("yesChild").checked) {
    var nodes = document.getElementById("ifChild").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
         nodes[i].disabled = true;
    }
    var nodes = document.getElementById("ifChildd").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
         nodes[i].disabled = true;
    }
  } else {
    
    var nodes = document.getElementById("ifChild").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
         nodes[i].disabled = false;
    }
    var nodes = document.getElementById("ifChildd").getElementsByTagName('*');
    for(var i = 0; i < nodes.length; i++){
         nodes[i].disabled = false;
    }
  }
}

//for self supporting specification
function yesnoSelfSup() {
  if (document.getElementById("yesSelfSup").selected) {
      document.getElementById("ifSelfSup").style.display = "block";
  } else {
      document.getElementById("ifSelfSup").style.display = "none";
  }
}