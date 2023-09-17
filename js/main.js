let game = {
    player:{
        hp:100,
        hunger:100,
        money:10
    },
    meals:{
      lebakassemmel:{
        hungerPoints:50,
        healthPoints:60
      }
    }
}
//creating an object with all things in the game
const player = document.getElementById("player");
// creating player
const hpBar = document.getElementById("hpV");
const hungerBar = document.getElementById("hungV");
//bars in the game
const commadline = document.getElementById("commandline");
//commandline in the game
const eventV = document.getElementById("event");
//the event thing in html
let commads = ["m"];
//all commands you can write in the input

/*
OLD MOVMENT MEBY USE LATER
    let marginHorizontal = 0;
    let marginVertical = 0;
    let marginChange = 600;
    // creating num for margins and the change nums
    let coordinates = [0];
    // coordinates in an array need a fix later but works fine upgrade!
    document.onkeydown = client => {
        if (coordinates[0] >= 0 && coordinates[0] < 2700) {
            if (client.key == 's') {
                coordinates.shift(); // Remove the first element
                coordinates.push(moveDown());
            } else if (client.key == 'w'){
                coordinates.shift(); // Remove the first element
                coordinates.push(moveUp());
            } else if (client.key == 'd'){
                coordinates.pop(); // Remove the last element
                coordinates.push(moveRight());
            } else if (client.key == 'a'){
                coordinates.pop(); // Remove the last element
                coordinates.push(moveLeft());
            }
        } else {
            console.log("Out of range");
            player.style.marginLeft = "0px"
            player.style.marginTop = "0px"
            coordinates.pop()
            coordinates.push(0)
            marginHorizontal = 0;
            marginVertical = 0;
            // setting back to default
        }
        console.log(coordinates);
    };
  // keydown events
  // a lil help from chat gpt because im stupid

function moveDown(){
    marginHorizontal += marginChange;
    // adding 100 to marginTop
    player.style.marginTop = marginHorizontal + "px";
    // move down
    return marginHorizontal
} 
// moving down function

function moveUp(){
    marginHorizontal += -marginChange;
    // deleting 100 from marginTop
    player.style.marginTop = marginHorizontal + "px";
    // move up
    return marginHorizontal
}
// moving up function

function moveRight(){
    marginVertical += marginChange;
    // adding 100 to marginLeft
    player.style.marginLeft = marginVertical + "px";
    // move right
    return marginVertical
}
// moving left function

function moveLeft(){
    marginVertical += -marginChange;
    // delete 100 from marginLeft
    player.style.marginLeft = marginVertical + "px";
    //move left
    return marginVertical
}
// creating movment
*/

setInterval(function(){
    game.player.hunger --
    hungerBar.innerHTML = game.player.hunger
    if(game.player.hunger <= 0){
        location.reload();
        console.log("hunger death");
        // player dies because of hunger (needs to be better soon) upgrade!
    }
},1000);
//slowly starve later change to 3000
setInterval(function(){
  hpBar.innerHTML = game.player.hp
  hungerBar.innerHTML = game.player.hunger
  //linking hp bar to hp in interval for constant refresh
  if(game.player.hp <= 0){
      location.reload();
      console.log("hp death");
      //player died because of low hp (needs to be better soon) upgrade!
  }
  if(game.player.hunger > 100){
    game.player.hunger = 100;
  }
  if(game.player.hp > 100){
    game.player.hp = 100;
  }
},10);

function damage(dam){
    game.player.hp -= dam;
    return game.player.hp;
}
//creating function for damaging the player
function heal(hp){
  game.player.hp += hp;
  return game.player.hp;
}
//creating function for healing the players hp
function eat(meal){
  game.player.hunger += meal.hungerPoints;
  game.player.hp += meal.healthPoints;
  return game.player.hunger;
}
//creating functions for eating
function move(){
    let randomEvent = Math.floor(Math.random() * 3)
    console.log(randomEvent);
    if(randomEvent == 0){
        eventV.innerHTML = '<img src="../assets/sprites/player-front.png" alt="player">';
    } else if(randomEvent == 1){
        damage(20);
    } else if(randomEvent == 2){
        eat(game.meals.lebakassemmel)
    }
}
window.onkeydown = (event) => {
    if (event.key == "Enter"){
        console.log("admit");
        if(commadline.value == commads[0]){
            console.log("move");
            move();
        }
    }
}


console.log("hunger " + game.player.hunger)
console.log("hp " + game.player.hp)
