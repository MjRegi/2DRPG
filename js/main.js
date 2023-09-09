const player = document.getElementById("player");
// creating player



    let marginHorizontal = 0;
    let marginVertical = 0;
    let marginChange = 100;
    // creating num for margins and the change nums
document.onkeydown = client => {
    if (client.key == 's') {
        moveDown();
    } else if (client.key == 'w'){
        moveUp();
    } else if (client.key == 'd'){
        moveRight()
    } else if (client.key == 'a'){
        moveLeft()
    }
  };
  // keydown events

function moveDown(){
    marginHorizontal += marginChange;
    // adding 100 to marginRight
    player.style.marginTop = marginHorizontal + "px";
    // move down
} 
// moving down function

function moveUp(){
    marginHorizontal += -marginChange;
    // deleting 100 from marginRight
    player.style.marginTop = marginHorizontal + "px";
    // move up
}
// moving up function

function moveRight(){
    marginVertical += marginChange;
    // adding 100 to marginLeft
    player.style.marginLeft = marginVertical + "px";
    // move right
}
// moving left function

function moveLeft(){
    marginVertical += -marginChange;
    // delete 100 from marginLeft
    player.style.marginLeft = marginVertical + "px";
}

// creating movment