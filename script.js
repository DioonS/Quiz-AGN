function startTimer(duration, display) {
    var timer = duration, minutes, seconds;

    setInterval(function() {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if(--timer < 0) {
            timer = duration;
        }

    }, 1000);

}

window.onload = function() {
    var duration = 5; // Converter to seconds
    var display = document.querySelector('#timer'); // Select timer

    startTimer(duration, display); // Starts the timer
    
};

setTimeout(function() {
    window.location.href = "./quiz.html"
}, 6000);
