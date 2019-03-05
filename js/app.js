'use strict';

//This is to connect my JS with my HTML IDs. 
var containerOne = document.getElementById('pictureone');
var containerTwo = document.getElementById('picturetwo');
var containerThree = document.getElementById('picturtheree');

var allPictures = [];
var previousPictures = [];
var turnCount = 0;


var Pic = function MallPic(name, src) {
  this.name = name;
  this.scr = src;
  this.PictureSelected = 0;
  this.pictureDisplayed = 0;
  allPictures.push(this);
};


//to get pics to display
function choosePics() {
  var currentPictures = [];
  do {
    do {
      var randomNumber = Math.floor(Math.random() * allPictures.length);
      var pic = allPictures[randomNumber];
    } while (previousPictures.includes(pic) || currentPictures.includes(pic));
    currentPictures.push(pic);
  } while (currentPictures.length < 3);

  return currentPictures;
}

var formerPictures = [];
turn();


function turn() {
  var currrentPictures = choosePics();
  rendor(currentPictures);

  for(var i = 0; i < 3 i++) {
      currentPictures[i]. views++;
  }

  previousPictures=currrentPictures;

  turnCount++;
}

function render(currentPictures) {
  pictureOne.src=currentPictures[0].filepath;
  pictureOne.alt = currentPictures[0].name;
  pictureOne.title = currentPictures[0].name;

  pictureTwo.src=currentPictures[1].filepath;
  pictureTwo.alt=currentPictures[1].name;
  pictureTwo.title=currentPictures[1].name;

  pictureThree.src=currentPictures[2].filepath;
  pictureThree.src=currentPictures[2].name;
  pictureThree.title=currentPictures[2].name;
}


function handleClick(event) {
    if (turnCount < 26) {
        clickCountAdd(event.target.title);
        turn();
    } else if (turnCount === 26) {
        createTable();
        turnCount++;
    } else {
        return;
    }
}

function clickCountAdd(title) {
    for (var i = 0; i < allPictures.length; i++) {
        if (allPictures[i].name === title) {
            allPictures[i].clicks++;
            break;
        }
    }
}




new Pic('bag', './img/bag.jpg');
new Pic('banana', './img/banana.jpg');
new Pic('bathroom', './img/bathroom.jpg');
new Pic('boots', './img/boots.jpg');
new Pic('breakfast', './img/breakfast.jpg');
new Pic('bubblegum', './img/bubblegum.jpg');
new Pic('chair', './img/chair.jpg');
new Pic('cthulhu', './img/cthulhu.jpg');
new Pic('dog-duck', './img/dog-duck.jpg');
new Pic('dragon meat', './img/dragon.jpg');
new Pic('pen', './img/pen.jpg');
new Pic('pet-sweep', './img/pet-sweep.jpg');
new Pic('scissors', './img/scissors.jpg');
new Pic('shark', './img/shark.jpg');
new Pic('sweep', './img/sweep.png');
new Pic('tauntaun', './img/tauntaun.jpg');
new Pic('unicorn', './img/unicorn.jpg');
new Pic('usb', './img/usb.gif');
new Pic('water can', './img/water-can.jpg');
new Pic('wine glass', './img/wine-glass.jpg');
