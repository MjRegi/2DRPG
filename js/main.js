const player = document.getElementById("player");
// creating player

    let marginHorizontal = 0;
    let marginVertical = 0;
    let marginChange = 300;
    // creating num for margins and the change nums
    let coordinates = [0];
    // coordinates in an array need a fix later but works fine
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
