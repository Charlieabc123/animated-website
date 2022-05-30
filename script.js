let stuff = []
let i = 0
let timesLooped = 0
const WORDS = [ // words to cycle from
  "WoW",
  "that",
  "was",
  "really",
  "cool"
]
let showColor = false

function setup() {
  createCanvas(windowWidth-10, windowHeight-60);
}

function draw() {
clear()
  // the counter 
  document.getElementById("count").innerText = i + "/" + WORDS.length + " " + timesLooped + "/10"
  if(showColor){
    // makes the change color button show when "click me" button has been pressed
    document.getElementById("changeColor").style.display = "inline" 

  }
  textSize(20)
  for(thing of stuff){
    // adds the words
    fill(thing.c)
    text(thing.word, thing.x, thing.y)
  }
  // secrets
  if(timesLooped >= 5){
    push()
    fill(0)
    textStyle(BOLD)
    textAlign(CENTER,CENTER)
    text("why are you still here?", width/2, height/2)
    if(timesLooped >= 10){
      iframe = document.createElement("iframe")
      iframe.width = width
      iframe.height = height
      iframe.id = "sus"
      iframe.allow = "autoplay;"
      iframe.src =  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      document.getElementById("defaultCanvas0").style.display = "none"
      document.body.appendChild(iframe)
      noLoop()
    }
    pop()
  }
  
  // adds my name
  fill("black")
    text("Charlie",width-70,height-10)
}

function clicked(){
  // the base of the words
  wow = {x:random(10,width-30),y:random(10,height-30)}
  wow.c = color(random(256), random(256), random(256))
  wow.word = WORDS[i] // selects the word to show
  i++
  // to loop through the words
  if(i >= WORDS.length){
    i = 0
    timesLooped++
  }
  // adds the word to the list(array)
  stuff.push(wow)
  showColor = true
}

function changeColor(){
  // changes the color to a random one
  for(thing of stuff){
    thing.c = color(random(256), random(256), random(256))
  }
}
function keyPressed() {
  if(keyCode === 32){
    timesLooped = 0
    loop()

  // remove the secret  
  document.getElementById("defaultCanvas0").style.display = "inline"
    let tmp = document.getElementById("sus")
    if(tmp != null){
      tmp.remove()
      
    }
  }
}
