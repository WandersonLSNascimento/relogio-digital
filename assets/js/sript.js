horas = document.getElementById('horas');
minutos = document.getElementById('minutos');
segundos = document.getElementById('segundos');

relogio = setInterval(function time() {
     dateToday = new Date();
     hr = dateToday.getHours();
     min = dateToday.getMinutes();
     s = dateToday.getSeconds();

    if (horas < 10) hr = 0 + hr;
    if (minutos < 10) hr = 0 + min;
    if (segundos < 10) hr = 0 + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
        
})