'use strict';

//This is to connect my JS with my HTML IDs.
var pictureOne = document.getElementById('pictureone');
var pictureTwo = document.getElementById('picturetwo');
var pictureThree = document.getElementById('picturethree');
var results = document.getElementById('results');

var allPictures = [];
var turnCount = 0;


function BusPic(name, src) {
  this.filepath = `img/${name}${src}`;
  this.scr = src;
  this.name = name;
  this.views = 0;
  this.clicks = 0;

  allPictures.push(this);
}


new BusPic('bag','.jpg');
new BusPic('banana','.jpg');
new BusPic('bathroom','.jpg');
new BusPic('boots','.jpg');
new BusPic('breakfast','.jpg');
new BusPic('bubblegum','.jpg');
new BusPic('chair','.jpg');
new BusPic('cthulhu','.jpg');
new BusPic('dog-duck','.jpg');
new BusPic('dragon','.jpg');
new BusPic('pen','.jpg');
new BusPic('pet-sweep','.jpg');
new BusPic('scissors','.jpg');
new BusPic('shark','.jpg');
new BusPic('sweep','.png');
new BusPic('tauntaun','.jpg');
new BusPic('unicorn','.jpg');
new BusPic('usb','.gif');
new BusPic('water-can','.jpg');
new BusPic('wine-glass','.jpg');

//to get pics to display
function choosePics() {
  let currentPictures = [];
  do {
    do {
      var randomNumber = Math.floor(Math.random() * allPictures.length);
      var pic = allPictures[randomNumber];
    } while (formerPictures.includes(pic) || currentPictures.includes(pic));
    currentPictures.push(pic);
  } while (currentPictures.length < 3);

  return currentPictures;
}

var formerPictures = [];
turn();


function turn() {
  var currentPictures = choosePics();
  render(currentPictures);

  for(var i = 0; i < 3; i++) {
    currentPictures[i].views++;
  }

  formerPictures=currentPictures;

  turnCount++;
}

function render(currentPictures) {
  pictureOne.src = currentPictures[0].filepath;
  pictureOne.alt = currentPictures[0].name;
  pictureOne.title = currentPictures[0].name;

  pictureTwo.src = currentPictures[1].filepath;
  pictureTwo.alt = currentPictures[1].name;
  pictureTwo.title = currentPictures[1].name;

  pictureThree.src = currentPictures[2].filepath;
  pictureThree.src = currentPictures[2].name;
  pictureThree.title = currentPictures[2].name;

  pictureOne.addEventListener('click', handleClick);
  pictureTwo.addEventListener('click', handleClick);
  pictureThree.addEventListener('click', handleClick);

}


function handleClick(event) {
  if (turnCount < 26) {
    clickCountAdd(event.target.title);
    turn();
  } else if (turnCount === 26) {
    create();
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

function create() {
  var row = document.createElement('tr');
  var headerTitle = document.createElement('td');
  headerTitle.innerText = 'Picture Name';
  row.appendChild(headerTitle);

  var headerClicksSum = document.createElement('td');
  headerClicksSum.innerText = 'Clicks - Total';
  row.appendChild(headerClicksSum);


  var headerViewsSum = document.createElement('td');
  headerViewsSum.innerText = 'Views - Total';
  row.appendChild(headerViewsSum);

  var headerClickPercent = document.createElement('td');
  headerClickPercent.innerText = 'Clicked Precentage';
  row.appendChild(headerClickPercent);



  results.appendChild(row);


  // loop through allPictures length and create table rows and headings
  for (var i = 0; i < allPictures.length; i++) {
    var imageRow = document.createElement('tr');
    var picName = document.createElement('td');
    picName.innerText = allPictures[i].name;
    imageRow.appendChild(picName);


    var clicksSumTotal = document.createElement('td');
    clicksSumTotal.innerText = allPictures[i].clicks;
    imageRow.appendChild(clicksSumTotal);

    var viewsSumTotal = document.createElement('td');
    viewsSumTotal.innerText = allPictures[i].views;
    imageRow.appendChild(viewsSumTotal);

    var clickedPercentageTotal = document.createElement('td');
    clickedPercentageTotal.innerText = (Math.floor((allPictures[i].clicks / allPictures[i].views) * 100) + '%');
    imageRow.appendChild(imageRow);

    results.appendChild(imageRow);
  }
}



