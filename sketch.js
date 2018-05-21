//Kiss Part Variables//
var body = ["standing up", "laying down", "sitting down", "kneeling", "crouching over", "prone", "curled up", "leaning"];
var hands = ["butt", "shoulders", "chin", "cheeks", "neck", "sides", "hair", "back"];
var mouth = ["open", "relaxed", "grimacing", "smiling", "quivering", "smirking", "parted", "puckered"];
var where = ["mouth", "shoulder", "neck", "cheek", "forehead", "nose", "hand", "ear"];
var eyes = ["squeezed shut", "crying", "blinking rapidly", "tearing up", "closed", "partially closed", "wide open", "open"];
var extra = ["with tongue", "without tongue", "and misses accidentally", "with minty fresh breath", "and it is slobbery", "while humming", "with a soft groan", "with bad breath"];
var names = ["Noah", "Liam", "Mason", "Jacob", "William", "Ethan", "James", "Alexander", "Michael", "Benjamin", "Emma", "Olivia", "Sophia", "Ava", "Isabella", "Mia", "Abigail", "Emily", "Charlotte", "Harper", "Oliver", "Jack", "Harry", "Charlie", "Thomas", "Oscar", "George", "Alfie", "Joshua", "Muhammad", "Archie", "Leo", "Henry", "Joseph", "Samuel", "Amelia", "Isla", "Jessica", "Poppy", "Ruby", "Lily", "Grace", "Evie", "Sophie", "Ella", "Scarlet", "Chloe", "Isabelle", "Luis", "Jose", "Jesus", "Christian"];
var relationship = ["family", "best friends", "married", "in a relationship", "strangers", "recently broken up", "enemies", "childhood friends"];
var emotion = ["surprise", "excitement", "joy", "contentment", "sadness", "disgust", "annoyance", "a bittersweet pang"];
var whereKiss = ["outside", "inside", "in a park", "at home", "in the rain", "in a car", "at an altar", "under mistletoe"];
var watchers = ["crowds watch", "a couple watches", "children watch", "men watch", "women watch", "family and friends watch", "no one watches", "neighbors watch"];
var handAction = ["grabbing at ", "resting on ", "pulling at ", "pressing into ", "straining toward ", "hovering over ", "running over ", "pulling away from "];

//Random Selection Variables//
var randomIndex = [];
var randomName = [];

//Automatic Scrolling Variables//
var currentpos = 0;
var alt = 1;
var curpos1 = 0;
var curpos2 = -1;
var rate = 15;

//Font & TextSize Things//
var hoefler;
var kissContent;
var fontScale = 40;

function preload() {
  hoefler = loadFont("baskerville.otf");
}

//General Kiss Creation & Setup//
function setup() {
  frameRate(1);
  createCanvas(0, 0);
  startScroll();
}

function draw() {
  naming();
  listing();
  kiss();
  rate = rate - 1;
}

//Automatic Scrolling Functions//
//window.onload=startScroll

function startScroll(){
  setInterval("scrollwindow()", rate)
}

function scrollwindow(){
  if (document.all) {
    temp=document.body.scrollTop
  } else { 
    temp=window.pageYOffset
  }
  
  if (curpos1!=curpos2){
    if (document.all) {
      currentpos=document.body.scrollTop+1
    } else {
      currentpos=window.pageYOffset+1
      window.scroll(0,currentpos)
    }
  } else {
    currentpos=0
    window.scroll(0,currentpos)
  }
  
//  if (alt==0) {
//    alt=1
//  } else {
//    alt=0
//  }
  
  if (alt==0) {
    curpos1=temp
  } else {
    curpos2=temp
  }
}

//Randomizing Functions//
function listing() {
  randomIndex = [];
  for (i = 0; i < 20; i++) {
    randomIndex.push(round(random(0, body.length - 1)));
  }
}

function naming() {
  randomName = [];
  for (i = 0; i < 3; i++) {
    randomName.push(round(random(0, names.length - 1)));
  }
}

//Kiss Creation Function//
function kiss() {
  kissContent = createP(names[randomName[1]] + "'s body is " + body[randomIndex[1]] + ". " +
    names[randomName[2]] + "'s body is " + body[randomIndex[2]] + ". " +
    names[randomName[1]] + "'s hands are " + handAction[randomIndex[18]] + names[randomName[2]] + "'s " + hands[randomIndex[3]] + ". " +
    names[randomName[2]] + "'s hands are " + handAction[randomIndex[19]] + names[randomName[1]] + "'s " + hands[randomIndex[4]] + ". " +
    names[randomName[1]] + "'s mouth is " + mouth[randomIndex[5]] + ". " +
    names[randomName[2]] + "'s mouth is " + mouth[randomIndex[6]] + ". " +
    names[randomName[1]] + "'s eyes are " + eyes[randomIndex[7]] + ". " +
    names[randomName[2]] + "'s eyes are " + eyes[randomIndex[8]] + ". " +
    names[randomName[1]] + " is kissing " + names[randomName[2]] + "'s " + where[randomIndex[9]] + ". " +
    names[randomName[2]] + " is kissing " + names[randomName[1]] + "'s " + where[randomIndex[10]] + ". " +
    names[randomName[1]] + " and " + names[randomName[2]] + " are " + relationship[randomIndex[11]] + ". " +
    names[randomName[1]] + " kisses " + extra[randomIndex[12]] + ". " +
    names[randomName[2]] + " kisses " + extra[randomIndex[13]] + ". " +
    names[randomName[1]] + " feels " + emotion[randomIndex[14]] + " when kissing " + names[randomName[2]] + ". " +
    names[randomName[2]] + " feels " + emotion[randomIndex[15]] + " when kissing " + names[randomName[1]] + ". " +
    names[randomName[1]] + " and " + names[randomName[2]] + " kiss each other " + whereKiss[randomIndex[16]] + ". " +
    names[randomName[1]] + " and " + names[randomName[2]] + " kiss while " + watchers[randomIndex[17]] + ". ")
  
  kissContent.style("font-size", fontScale + "px");
  kissContent.style("line-height", "125%");
  fontScale = fontScale + 15;
}