const player = document.getElementById("player");
// creating player

    let marginDown = 100
    // creating num for margin top (down)
document.onkeydown = client => {
    if (client.key == 'w') {
        moveDown();
    }
  };
  // keydown events

function moveDown(){

        player.style.marginTop = marginDown + "px"
        // move down

        marginDown += 100;
    } 
// moving down function
// creating movment