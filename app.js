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
  switch (rover.direction) {
    case "N":
         rover.direction= "W"
         return "Rover is now facing West";
    break;
    case "E":
         rover.direction= "N"
         return "Rover is now facing North";
    break;
    case "S":
         rover.direction= "E"
        return "Rover is now facing East";
    break;
    case "W":
         rover.direction= "S"
         return "Rover is now facing South";
         break;
    default:
         return "INCORRECT";
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
         rover.direction= "E"
         return "Rover is now facing East";
    break;
    case "E":
         rover.direction= "S"
         return "Rover is now facing South";
    break;
    case "S":
         rover.direction= "W"
          return "Rover is now facing West";
    break;
    case "W":
         rover.direction= "N"
         return "Rover is now facing North";
         break;
    default:
         return "INCORRECT";
  }
}

function moveForward(rover) {
  console.log("moveForward was called")
  switch (rover.direction) {
    case "N":
         rover.y[0]++
         console.log("Rover is now increasing his y position");
    break;
    case "E":
         rover.x[0]++
         console.log("Rover is now increasing his x position");
    break;
    case "S":
          rover.y[0]--
          console.log("Rover is now decreasing his y position");
    break;
    case "W":
          rover.x[0]--
         console.log("Rover is now decreasing his x position");
    break;
    default:
         return "INCORRECT";
  }
}
//================
function commands() {
  var userCommands = commands.split("");
  for (var i = 0, i < userCommands.length; i++) {
    if (userCommands[i] === "f"){
      moveForward(rover);
    } else if (userCommands[i] === "l") {
      turnLeft(rover);
    } else if (userCommands[i] === "r") {
      turnRight(rover);
    } else {
      alert("Please use only f,l or r");
      return commands();
    }
  }
}

commands();
//===========
travelLog.push(commands);
