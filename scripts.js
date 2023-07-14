// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
const button = document.getElementById("takeoff");
const status = document.getElementById("flightStatus");
const flightScreen = document.getElementById('shuttleBackground');
const shuttleHeight = document.getElementById('spaceShuttleHeight');
const land = document.getElementById('landing');
const abort = document.getElementById('missionAbort');
const upButton = document.getElementById("up");
const downButton = document.getElementById("down");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");

//const up = document.getElementById("up");
const rocket = document.getElementById("rocket");
rocket.style.position = "absolute";
rocket.style.bottom = "0px";
rocket.style.left = "0px";

button.addEventListener('click', function(event) {
    const confirm = window.confirm('Confirm that the shuttle is ready for takeoff.')
    if(confirm) {
        status.innerHTML = 'Shuttle in flight.';
        flightScreen.style.background = 'blue';
        shuttleHeight.innerHTML = 10000;
    }
});
land.addEventListener('click', function(event) {
    const alert = window.confirm("The shuttle is landing. Landing gear engaged.")
    if (alert) {
        status.innerHTML = "The shuttle has landed."
        flightScreen.style.background = 'green';
        shuttleHeight.innerHTML = 0;
    }
});

abort.addEventListener('click', function(event) {
    const aborted = window.confirm("Confirm that you want to abort the mission.")
    if (aborted) {
        status.innerHTML = "Mission aborted."
        flightScreen.style.background = 'green';
        shuttleHeight.innerHTML = 0;
    }
});

upButton.addEventListener("click", function(event){
     shuttleHeight.innerHTML = parseInt( shuttleHeight.innerHTML) + 10000;
rocket.style.bottom = parseInt(rocket.style.bottom ) + 10 + "px";


})

downButton.addEventListener("click", function(event){
    shuttleHeight.innerHTML = parseInt( shuttleHeight.innerHTML) - 10000;
    rocket.style.bottom = parseInt(rocket.style.bottom ) - 10 + "px";

})

leftButton.addEventListener("click", function(event){
    rocket.style.left = parseInt(rocket.style.left ) - 10 + "px";
})
rightButton.addEventListener("click", function(event){
    rocket.style.left = parseInt(rocket.style.left ) + 10 + "px";
})
}


window.addEventListener("load", init);