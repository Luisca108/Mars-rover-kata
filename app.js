// Rover Object Goes Here
var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
};
// ======================

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (direction) {
    case "N":
         return "Rover is now facing West";
    break;
    case "E":
         return "Rover is now facing North";
    break;
    case "S":
          return "Rover is now facing East";
    break;
    case "W":
         return "Rover is now facing South";
         break;
    default:
         return "INCORRECT";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (direction) {
    case "N":
         return "Rover is now facing East";
    break;
    case "E":
         return "Rover is now facing South";
    break;
    case "S":
          return "Rover is now facing West";
    break;
    case "W":
         return "Rover is now facing North";
         break;
    default:
         return "INCORRECT";
  }
}

function moveForward(rover) {
  console.log("moveForward was called")
  switch (x, y) {
    case "N":
         y[0]++
         console.log("Rover is now increasing his y position");
    break;
    case "E":
         x[0]++
         console.log("Rover is now increasing his x position");
    break;
    case "S":
          y[0]--
          console.log("Rover is now decreasing his y position");
    break;
    case "W":
          x[0]--
         console.log("Rover is now decreasing his x position");
    break;
    default:
         return "INCORRECT";
  }
}
//================
function commands() {
  for (var i = 0; i < direction.length; i++) {
    var dir = direction[i];

    switch (dir) {
      case f:
         return moveForward(rover);
      break;
      case l:
        return turnLeft(rover);
      break;
      case r:
        return turnRight(rover);
      break;
      default:
        return "INCORRECT";
    }
  }
}
//===========
travelLog.push(commands);
