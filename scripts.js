// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
const button = document.getElementById("takeoff");
const status = document.getElementById("flightStatus");
const flightScreen = document.getElementById('shuttleBackground');
const shuttleHeight = document.getElementById('spaceShuttleHeight');

button.addEventListener('click', function(event) {
    const confirm = window.confirm('Confirm that the shuttle is ready for takeoff.')
    if(confirm) {
        status.innerHTML = 'Shuttle in flight.';
        flightScreen.style.background = 'blue';
        shuttleHeight.innerHTML += 10000;
    }
})


}


window.addEventListener("load", init);