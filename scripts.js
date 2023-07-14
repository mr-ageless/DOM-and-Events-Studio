// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Write your JavaScript code here.
// Remember to pay attention to page loading!
// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const button = document.getElementById("takeoff");
    const status = document.getElementById("flightStatus");
    const flightScreen = document.getElementById('shuttleBackground');
    const shuttleHeight = document.getElementById('spaceShuttleHeight');
    const land = document.getElementById('landing');
    const abort = document.getElementById('missionAbort');
    const rocketImage = document.getElementById('rocket');
    rocketImage.style.position = 'absolute';
    rocketImage.style.bottom = "0px";
    rocketImage.style.left = "0px";
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    let rocketOn = false;

    button.addEventListener('click', function(event) {
        const confirm = window.confirm('Confirm that the shuttle is ready for takeoff.')
        if(confirm) {
            status.innerHTML = 'Shuttle in flight.';
            flightScreen.style.background = 'blue';
            shuttleHeight.innerHTML = 10000;
            rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + "px";
            rocketOn = true;   
        }
    });
    land.addEventListener('click', function(event) {
        const alert = window.confirm("The shuttle is landing. Landing gear engaged.")
        if (alert) {
            status.innerHTML = "The shuttle has landed."
            flightScreen.style.background = 'green';
            shuttleHeight.innerHTML = 0;
            rocketImage.style.bottom = 0;
            rocketOn = false;
        }
    });
    
    abort.addEventListener('click', function(event) {
        const aborted = window.confirm("Confirm that you want to abort the mission.")
        if (aborted) {
            status.innerHTML = "Mission aborted."
            flightScreen.style.background = 'green';
            shuttleHeight.innerHTML = 0;
            rocketImage.style.bottom = 0;
            rocketImage.style.left = 0;
            rocketOn = false;
        }
    });
    
    upButton.addEventListener('click', function(event) {
        if(rocketOn === true){
            if (parseInt(rocketImage.style.bottom) < flightScreen.offsetTop){ 
                shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;        
                rocketImage.style.bottom = parseInt(rocketImage.style.bottom) + 10 + "px";
            }
        }
    });
    
    downButton.addEventListener('click', function(event) {
        if(rocketOn === true){
            if (parseInt(rocketImage.style.bottom) > 0){ 
                shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
                rocketImage.style.bottom = parseInt(rocketImage.style.bottom) - 10 + "px";
            }
    }
    });
    
    leftButton.addEventListener('click', function(event) {
        if (parseInt(rocketImage.style.left) > 0){
        rocketImage.style.left = parseInt(rocketImage.style.left) - 10 + "px";
        }
    });
    
    rightButton.addEventListener('click', function(event) {
        console.log(flightScreen.offsetRight)
        if (parseInt(rocketImage.style.left) < flightScreen.offsetLeft){
        rocketImage.style.left = parseInt(rocketImage.style.left) + 10 + "px";
        }
    });
    
    }
    
    
    window.addEventListener("load", init);