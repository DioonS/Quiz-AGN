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
    var duration = 5; // Converter para segundos
    var display = document.querySelector('#timer'); // Seleciona o timer

    startTimer(duration, display); // Inicia o timer
    
};

setTimeout(function() { // Ao fim da contagem encaminha para a tela seguinte
    window.location.href = "./quizEnergia.html"
}, 6000);
