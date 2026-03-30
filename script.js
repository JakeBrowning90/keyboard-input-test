function hightlightKey(e) {
  //   console.log(`${e.code}`);
  let targetedKey = document.getElementById(e.code);
  targetedKey.classList.add("activeKey");
}

function unhightlightKey(e) {
  //   console.log(`${e.code}`);
  let targetedKey = document.getElementById(e.code);
  targetedKey.classList.remove("activeKey");
}

function getMovement(e) {
  if (e.code == "KeyW") {
    executeMovement("up");
  } else if (e.code == "KeyA") {
    executeMovement("left");
  } else if (e.code == "KeyS") {
    executeMovement("down");
  } else if (e.code == "KeyD") {
    executeMovement("right");
  }
}

function executeMovement(input) {
  console.log(input);
  // get current location
  let location = document.getElementById("playerChar").parentElement;
  console.log(location);
  let destination = parseInt(location.getAttribute("yloc")) + 1;
  if (input == "up" && parseInt(location.getAttribute("yloc")) + 1 < fieldSize)
    if (input == "up" && destination < fieldSize) {
      // determine if movement is valid from current location
      // valid move
      let newLocation = document.getElementById(
        location.getAttribute("xloc") + ", " + destination,
      );
      console.log(newLocation);
      location.removeChild(playerChar);
      newLocation.appendChild(playerChar);
    }
  //   else if (input == "down" && destination < fieldSize){}
  //   else if (){}
  //   else if () else{
  //     console.log("Invalid move")
  //   }
}

document.addEventListener("keydown", hightlightKey);
document.addEventListener("keyup", unhightlightKey);
document.addEventListener("keydown", getMovement);

function drawPlayfield(fieldSize) {
  let playField = document.getElementById("playField");

  for (let i = 0; i < fieldSize; i++) {
    let fieldRow = document.createElement("div");
    fieldRow.classList.add("fieldRow");

    for (let j = fieldSize - 1; j > -1; j--) {
      let playCell = document.createElement("div");
      playCell.classList.add("playCell");
      let x = document.createAttribute("xLoc");
      x.value = i;
      playCell.setAttributeNode(x);
      let y = document.createAttribute("yLoc");
      y.value = j;
      playCell.setAttributeNode(y);
      playCell.setAttribute("id", `${i}, ${j}`);
      playCell.textContent = playCell.id;
      fieldRow.appendChild(playCell);
    }

    playField.appendChild(fieldRow);
  }
}

function getCenterField(fieldSize) {
  let center;
  if (fieldSize % 2 == 0) {
    center = fieldSize / 2;
  } else {
    center = (fieldSize - 1) / 2;
  }
  return center;
}

let fieldSize = 5;
drawPlayfield(fieldSize);

let center = getCenterField(fieldSize);
let startingCell = document.getElementById(`${center}, ${center}`);
let playerChar = document.createElement("div");
playerChar.setAttribute("id", "playerChar");
// playerChar.classList.add("playerChar");

// let x = document.createAttribute("xLoc");
// x.value = startingCell.x;
// playerChar.setAttributeNode(x);
// let y = document.createAttribute("yLoc");
// y.value = startingCell.y;
// playerChar.setAttributeNode(y);

startingCell.appendChild(playerChar);
